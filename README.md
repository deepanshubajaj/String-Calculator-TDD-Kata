<h1 align="center">🧮 String Calculator - TDD Kata</h1>

<p align="center">
  <img src="https://img.shields.io/badge/react-18.x-blue" alt="React Badge" />
  <img src="https://img.shields.io/badge/typescript-5.x-blueviolet" alt="TypeScript Badge" />
  <img src="https://img.shields.io/badge/methodology-TDD-red" alt="TDD Badge" />
  <img src="https://img.shields.io/badge/tested_with-jest-99424f" alt="Jest Badge" />
  <img src="https://img.shields.io/badge/license-MIT-green" alt="License Badge" />
  <img src="https://img.shields.io/github/last-commit/deepanshubajaj/StringCalculator-TDD-Kata" alt="Last Commit" />
  <img src="https://img.shields.io/github/stars/deepanshubajaj/StringCalculator-TDD-Kata?style=social" alt="GitHub Stars" />
</p>

**String Calculator TDD Kata** is a React + TypeScript implementation of the classic String Calculator exercise using **Test-Driven Development**.  
Each enhancement is introduced via a failing test ➡️ implementation ➡️ refactoring ➡️ commit.

---

## ✨ Features

- ✅ Add empty string `""` ➝ returns `0`
- ✅ Add single number `"1"` ➝ returns `1`
- ✅ Add two numbers `"1,2"` ➝ returns `3`
- ✅ Add unknown number of values `"1,2,3,4"` ➝ returns `10`
- ✅ Support newline delimiters `"1\n2,3"` ➝ returns `6`
- ✅ Custom delimiter `"//;\n1;2"` ➝ returns `3`
- ✅ Handle invalid input `"1,\n"` ➝ returns error (optional)
- ✅ Throw error for negatives `"1,-2"` ➝ `negatives not allowed: -2`
- ✅ Multiple negatives ➝ `negatives not allowed: -1,-3`
- ✅ Ignore numbers > 1000 ➝ `"2,1001"` ➝ returns `2`
- ✅ Delimiters of any length `"//[***]\n1***2***3"` ➝ returns `6`
- ✅ Multiple delimiters `"//[*][%]\n1*2%3"` ➝ returns `6`
- ✅ Multiple long delimiters `"//[***][##]\n1***2##3"` ➝ returns `6`

---

## 🧪 Tech Stack

| Tech           | Description                  |
|----------------|------------------------------|
| React          | Frontend Library             |
| TypeScript     | Static Typing                |
| Jest           | Testing Framework            |
| TDD            | Red → Green → Refactor cycle |

---

## 📁 Project Structure

src/
├── calculator/
│ ├── stringCalculator.ts // Core logic
│ └── stringCalculator.test.ts // Unit tests (Jest)
├── App.tsx
└── ...

---

## 🧠 TDD Workflow

> Followed the classical TDD cycle:
1. 🔴 Write a failing test
2. 🟢 Make it pass
3. 🧹 Refactor the code
4. 💾 Commit the changes

Every commit in this repo corresponds to a **single, passing test**.

---

## 💡 Kata Guidelines

- Start with the simplest test case (empty string)
- Add functionality incrementally with tests first
- Refactor after **every** passing test
- Keep code clean and expressive
- Handle all edge cases via unit tests

---

## 🛠 Requirements

- Node.js ≥ 18.x
- npm or Yarn
- React ≥ 18.x
- TypeScript ≥ 5.x
- Jest for testing

---

## ▶️ Getting Started

To run this project locally:

```bash
    git clone https://github.com/deepanshubajaj/String-Calculator-TDD-Kata.git
```
```bash
    npm install
```
```bash
    npm test     # For test cases
```
```bash
    npm start   # For production build 
```

---

### 🖼️ Icon

<p align="center">
  <img src="ProjectOutputs/Snapshots/logo3.png" alt="Icon1" width="40%"  />
</p>

<p align="center">
  *This is the App Icon.*
</p>

---

## 🎨 Steps & Test:

Also refer [here](https://blog.incubyte.co/blog/tdd-assessment/) & [here](https://osherove.com/tdd-kata-1/).

<p align="center">
  <img src="ProjectOutputs/Snapshots/screenAbout.jpg" alt="Image1"  />
</p>

<p align="center">
  *Add empty string `""` ➝ returns `0`*
</p>

<p align="center">
  <img src="ProjectOutputs/Snapshots/screenAbout.jpg" alt="Image1"  />
</p>

<p align="center">
  *Add single number `"1"` ➝ returns `1`*
</p>

<p align="center">
  <img src="ProjectOutputs/Snapshots/screenAbout.jpg" alt="Image1"  />
</p>

<p align="center">
  *Add two numbers `"1,2"` ➝ returns `3`*
</p>

<p align="center">
  <img src="ProjectOutputs/Snapshots/screenAbout.jpg" alt="Image1"  />
</p>

<p align="center">
  *Add unknown number of values `"1,2,3,4"` ➝ returns `10`*
</p>

<p align="center">
  <img src="ProjectOutputs/Snapshots/screenAbout.jpg" alt="Image1"  />
</p>

<p align="center">
  *Support newline delimiters `"1\n2,3"` ➝ returns `6`*
</p>

<p align="center">
  <img src="ProjectOutputs/Snapshots/screenAbout.jpg" alt="Image1"  />
</p>

<p align="center">
  *Custom delimiter `"//;\n1;2"` ➝ returns `3`*
</p>

<p align="center">
  <img src="ProjectOutputs/Snapshots/screenAbout.jpg" alt="Image1"  />
</p>

<p align="center">
  *Handle invalid input `"1,\n"` ➝ returns error (optional)*
</p>

<p align="center">
  <img src="ProjectOutputs/Snapshots/screenAbout.jpg" alt="Image1"  />
</p>

<p align="center">
  *Throw error for negatives `"1,-2"` ➝ `negatives not allowed: -2`*
</p>

<p align="center">
  <img src="ProjectOutputs/Snapshots/screenAbout.jpg" alt="Image1"  />
</p>

<p align="center">
  *Multiple negatives ➝ `negatives not allowed: -1,-3`*
</p>

<p align="center">
  <img src="ProjectOutputs/Snapshots/screenAbout.jpg" alt="Image1"  />
</p>

<p align="center">
  *Ignore numbers > 1000 ➝ `"2,1001"` ➝ returns `2`*
</p>
<p align="center">
  *Delimiters of any length `"//[***]\n1***2***3"` ➝ returns `6`*
</p>
<p align="center">
  *Multiple delimiters `"//[*][%]\n1*2%3"` ➝ returns `6`*
</p>
<p align="center">
  *Multiple long delimiters `"//[***][##]\n1***2##3"` ➝ returns `6`*
</p>

---

## 🖼️ Screenshots:

<p align="center">
  <img src="ProjectOutputs/Snapshots/SScreen5.jpg" alt="Splash Screen 0D" width="30%" />
</p>

<p align="center">
  <img src="ProjectOutputs/Snapshots/SScreen1.jpg" alt="Splash Screen 1D" width="30%" />
  <img src="ProjectOutputs/WorkingVideo/SplashScreenDVideo.gif" alt="Splash ScreenD" width="30%" />
  <img src="ProjectOutputs/Snapshots/SScreen2.jpg" alt="Splash Screen 2D" width="30%" />
</p>

<p align="center">
  *Splash screen displayed upon app launch in Dark Mode.*
</p>


##

<p align="center">
  <img src="ProjectOutputs/Snapshots/SScreen6.jpg" alt="Splash Screen 0B" width="30%" />
</p>

<p align="center">
  <img src="ProjectOutputs/Snapshots/SScreen3.jpg" alt="Splash Screen 1B" width="30%" />
  <img src="ProjectOutputs/WorkingVideo/SplashScreenBVideo.gif" alt="Splash ScreenB" width="30%" />
  <img src="ProjectOutputs/Snapshots/SScreen4.jpg" alt="Splash Screen 2B" width="30%" />
</p>

<p align="center">
  *Splash screen displayed upon app launch in Bright Mode.*
</p>


##

<p align="center">
    <img src="ProjectOutputs/Snapshots/mainScreenD1.jpg" alt="Main Screen 1D" width="30%" />
    <img src="ProjectOutputs/Snapshots/mainScreenD2.jpg" alt="Main Screen 2D" width="30%" />
    <img src="ProjectOutputs/Snapshots/mainScreenD3.jpg" alt="Main Screen 3D" width="30%" />
</p>

##

<p align="center">
    <img src="ProjectOutputs/Snapshots/mainScreenD4.jpg" alt="Main Screen 4D" width="30%" />
    <img src="ProjectOutputs/Snapshots/mainScreenD5.jpg" alt="Main Screen 5D" width="30%" />
    <img src="ProjectOutputs/Snapshots/mainScreenD6.jpg" alt="Main Screen 6D" width="30%" />
</p>

##

<p align="center">
    <img src="ProjectOutputs/Snapshots/mainScreenD7.jpg" alt="Main Screen 7D" width="30%" />
    <img src="ProjectOutputs/Snapshots/mainScreenD8.jpg" alt="Main Screen 8D" width="30%" />
    <img src="ProjectOutputs/Snapshots/mainScreenD9.jpg" alt="Main Screen 9D" width="30%" />
</p>

##

<p align="center">
    <img src="ProjectOutputs/Snapshots/mainScreenD10.jpg" alt="Main Screen 10D" width="30%" />
    <img src="ProjectOutputs/Snapshots/mainScreenD11.jpg" alt="Main Screen 11D" width="30%" />
    <img src="ProjectOutputs/Snapshots/mainScreenD11b.jpg" alt="Main Screen 11bD" width="30%" />
</p>

##

<p align="center">
    <img src="ProjectOutputs/Snapshots/mainScreenD11b.jpg" alt="Main Screen 11bD" width="30%" />
    <img src="ProjectOutputs/Snapshots/mainScreenD12.jpg" alt="Main Screen 12D" width="30%" />
    <img src="ProjectOutputs/Snapshots/mainScreenD13.jpg" alt="Main Screen 13D" width="30%" />
</p>


<p align="center">
  *Screenshots of the MemoRise App showing different screens in Dark Mode*
</p>

##

<p align="center">
    <img src="ProjectOutputs/Snapshots/mainScreenB1.jpg" alt="Main Screen 1B" width="30%" />
    <img src="ProjectOutputs/Snapshots/mainScreenB2.jpg" alt="Main Screen 2B" width="30%" />
    <img src="ProjectOutputs/Snapshots/mainScreenB3.jpg" alt="Main Screen 3B" width="30%" />
</p>

##

<p align="center">
    <img src="ProjectOutputs/Snapshots/mainScreenB4.jpg" alt="Main Screen 4B" width="30%" />
    <img src="ProjectOutputs/Snapshots/mainScreenB5.jpg" alt="Main Screen 5B" width="30%" />
    <img src="ProjectOutputs/Snapshots/mainScreenB6.jpg" alt="Main Screen 6B" width="30%" />
</p>

##

<p align="center">
    <img src="ProjectOutputs/Snapshots/mainScreenB7.jpg" alt="Main Screen 7B" width="30%" />
    <img src="ProjectOutputs/Snapshots/mainScreenB8.jpg" alt="Main Screen 8B" width="30%" />
    <img src="ProjectOutputs/Snapshots/mainScreenB9.jpg" alt="Main Screen 9B" width="30%" />
</p>

##

<p align="center">
    <img src="ProjectOutputs/Snapshots/mainScreenB10.jpg" alt="Main Screen 10B" width="30%" />
    <img src="ProjectOutputs/Snapshots/mainScreenB11.jpg" alt="Main Screen 11B" width="30%" />
    <img src="ProjectOutputs/Snapshots/mainScreenB11b.jpg" alt="Main Screen 11bB" width="30%" />
</p>

##

<p align="center">
    <img src="ProjectOutputs/Snapshots/mainScreenB11b.jpg" alt="Main Screen 11bB" width="30%" />
    <img src="ProjectOutputs/Snapshots/mainScreenB12.jpg" alt="Main Screen 12B" width="30%" />
    <img src="ProjectOutputs/Snapshots/mainScreenB13.jpg" alt="Main Screen 13B" width="30%" />
</p>


<p align="center">
  *Screenshots of the MemoRise App showing different screens in Bright Mode*
</p>

## 🌄 Functionalities Demo:

<table style="width:100%">
  <tr>
    <th>Creating New List</th>
    <th>Creating New Item in List</th>
  </tr>
  <tr>
    <td><video src="https://github.com/user-attachments/assets/3a9c5c62-0259-44dc-ba95-5c76d5dce5cf" width="180" /></td> 
    <td><video src="https://github.com/user-attachments/assets/83dd8ba6-7713-417c-a7ef-126c9c11c572" width="180"/></td> 
  </tr>
  
  <tr>
    <th>Editing & Scheduling Reminder</th>
    <th>Searching for an Item</th>
  </tr>
  <tr>
    <td><video src="https://github.com/user-attachments/assets/3e36b868-43e1-4e6e-9328-e8bcca5b3f56" width="180" /></td> 
    <td><video src="https://github.com/user-attachments/assets/25e9b0de-2b91-4833-94e6-97c3fa62012b" width="180"/></td> 
  </tr>
  
  <tr>
    <th>Marking and Item as Complete</th>
    <th>Reminder Notification</th>
  </tr>
  <tr>
    <td><video src="https://github.com/user-attachments/assets/f423d141-7045-492b-99fa-9811eadeb436" width="180" /></td> 
    <td><video src="https://github.com/user-attachments/assets/f0273e7f-1532-4de0-9edd-d91359213797" width="180" /></td> 
  </tr>
</table>

---

## 📱 App Icon:

<p align="center">
  <img src="ProjectOutputs/Snapshots/appIcon.png" alt="App Icon" width="30%" />
</p>
<p align="center">
  *The App Icon reflects the MemoRise Look*
</p>

---

## 🚀 Video Demo:

Here’s a short video showcasing the app's functionality in Dark & Bright Mode:

<p align="center">
  <img src="ProjectOutputs/WorkingVideo/WorkingVideoD.gif" alt="Working App 1 - Dark Mode" width="30%" />
  <img src="ProjectOutputs/WorkingVideo/WorkingVideoB.gif" alt="Working App 2 - Bright Mode" width="30%" />
</p>



➤ <a href="ProjectOutputs/WorkingVideo/SplashScreenDVideo.MP4">🎬 Watch Splash Screen Video - [Dark Mode]</a>

➤ <a href="ProjectOutputs/WorkingVideo/SplashScreenBVideo.MP4">🎬 Watch Splash Screen Video - [Bright Mode]</a>

➤ <a href="ProjectOutputs/WorkingVideo/WorkingVideoD.MP4">🎥 Watch Working Video 1 - [Dark Mode]</a>

➤ <a href="ProjectOutputs/WorkingVideo/WorkingVideoB.MP4">🎥 Watch Working Video 2 - [Bright Mode]</a>

---

## 🤝 Contributing:

Thank you for your interest in contributing to this project!  
I welcome contributions from the community.

- You are free to use, modify, and redistribute this code under the terms of the **MIT License**.
- If you'd like to contribute, please **open an issue** or **submit a pull request**.
- All contributions will be reviewed and approved by the author — **[Deepanshu Bajaj](https://github.com/deepanshubajaj?tab=overview&from=2025-03-01&to=2025-03-31)**.

---

### 📌 How to Contribute:

To contribute:

1. Fork the repository.

2. Create a new branch:
   ```bash
    git checkout -b feature/your-feature-name
   ```

3. Commit your changes:
   ```bash
    git commit -m 'Add your feature'
   ```

4. Push to the branch:
   ```bash
    git push origin feature/your-feature-name
   ```

5. Open a pull request.

---

## 📃 License:

This project is licensed under the [MIT License](./LICENSE).  
You are free to use this project for personal, educational, or commercial purposes — just make sure to provide proper attribution.

> **Clarification:** Commercial use includes, but is not limited to, use in products,  
> services, or activities intended to generate revenue, directly or indirectly.

---

## 📃 Contact:

You can reach out to me [here]().
