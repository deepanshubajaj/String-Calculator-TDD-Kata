import React, { useState, useEffect } from 'react';
import './App.css';
import { add } from './stringCalculator';

const SAMPLE_INPUTS = [
  { label: "Empty string", value: "" },
  { label: "Single number", value: "42" },
  { label: "Comma separated", value: "1,2,3,4,5" },
  { label: "With newlines", value: "1\n2,3" },
  { label: "Custom delimiter", value: "//;\n1;2;3" },
  { label: "Long delimiter", value: "//[***]\n1***2***3" },
  { label: "Multiple delimiters", value: "//[*][%]\n1*2%3" },
  { label: "Complex delimiters", value: "//[***][##][&]\n1***2##3&4" },
];

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [history, setHistory] = useState<{input: string, result: number}[]>([]);
  const [favorites, setFavorites] = useState<{input: string, result: number}[]>([]);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    document.body.className = isDarkTheme ? 'dark-theme' : 'light-theme';
  }, [isDarkTheme]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('calculator-favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkTheme(prev => !prev);
  };

  const handleCalculate = () => {
    try {
      const sum = add(input);
      setResult(sum);
      setError(null);
      setHistory(prev => [...prev, {input, result: sum}].slice(-5)); // Keep last 5
    } catch (err) {
      setError((err as Error).message);
      setResult(null);
    }
  };

  const handleSampleInput = (sampleValue: string) => {
    setInput(sampleValue);
  };

  const handleClear = () => {
    setInput('');
    setResult(null);
    setError(null);
  };

  const getInputStatus = () => {
    try {
      add(input);
      return input.length > 0 ? "valid" : "empty";
    } catch {
      return "invalid";
    }
  };

  const toggleFavorite = (item: {input: string, result: number}) => {
    const exists = favorites.some(fav => fav.input === item.input);
    let newFavorites;
    
    if (exists) {
      newFavorites = favorites.filter(fav => fav.input !== item.input);
    } else {
      newFavorites = [...favorites, item];
    }
    
    setFavorites(newFavorites);
    localStorage.setItem('calculator-favorites', JSON.stringify(newFavorites));
  };

  const isFavorite = (input: string) => {
    return favorites.some(fav => fav.input === input);
  };

  return (
    <div className={`App ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <header className="App-header">
        <h1>String Calculator</h1>
        <button 
          onClick={toggleTheme} 
          className="theme-toggle"
          title={isDarkTheme ? "Switch to light theme" : "Switch to dark theme"}
        >
          {isDarkTheme ? "☀️" : "🌙"}
        </button>
        <div className="calculator-container">
          <div className="samples-container">
            <p>Sample inputs:</p>
            <div className="sample-buttons">
              {SAMPLE_INPUTS.map((sample, index) => (
                <button 
                  key={index}
                  onClick={() => handleSampleInput(sample.value)}
                  className="sample-button"
                  title={sample.value}
                >
                  {sample.label}
                </button>
              ))}
            </div>
          </div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter numbers (e.g. '1,2,3' or '//;\n1;2;3')"
            rows={5}
            className={`input-field ${getInputStatus()}-input`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleCalculate();
              }
            }}
          />
          <div className="button-group">
            <button onClick={handleCalculate} className="calculate-button">
              Calculate
            </button>
            <button onClick={handleClear} className="clear-button">
              Clear
            </button>
          </div>
          {result !== null && (
            <div className="result">Result: {result}</div>
          )}
          {error && (
            <div className="error">Error: {error}</div>
          )}
          {history.length > 0 && (
            <div className="history-container">
              <p>History:</p>
              <div className="history-items">
                {history.map((item, index) => (
                  <div key={index} className="history-item">
                    <div onClick={() => setInput(item.input)}>
                      <span className="history-input">{item.input.length > 20 ? 
                        item.input.substring(0, 20) + '...' : item.input}</span>
                      <span className="history-result">{item.result}</span>
                    </div>
                    <button 
                      className="favorite-button" 
                      onClick={() => toggleFavorite(item)}
                      title={isFavorite(item.input) ? "Remove from favorites" : "Add to favorites"}
                    >
                      {isFavorite(item.input) ? "★" : "☆"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
          {favorites.length > 0 && (
            <div className="favorites-container">
              <p>Favorites:</p>
              <div className="favorites-items">
                {favorites.map((item, index) => (
                  <div key={index} className="favorite-item">
                    <div onClick={() => setInput(item.input)}>
                      <span className="favorite-input">{item.input.length > 20 ? 
                        item.input.substring(0, 20) + '...' : item.input}</span>
                      <span className="favorite-result">{item.result}</span>
                    </div>
                    <button 
                      className="favorite-button" 
                      onClick={() => toggleFavorite(item)}
                      title="Remove from favorites"
                    >
                      ★
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
