> **404 Brain Hacks – Quiz IQ Programming**

---

## I Added

- Created a new branch: **`DashaDev`**
- Installed and configured **TailwindCSS**
- Added **Google Fonts (Poppins)**
- Designed the first page (`index.html`) with Figma inspiration
- Created design in Figma
- Created logo in Adobe Illustrator
- Implemented **Welcome Page**
- Added **constants.js** for reusable IDs

---

## TailwindCSS Setup

### 1 Install dependencies

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

### 2 Tailwind Configuration (`tailwind.config.js`)

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}', './public/*.html', './src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
```

### 3 Tailwind Directives (`style.css`)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply font-poppins;
  }
}
```

### 4 Connect Generated CSS in `index.html`

```html
<link href="./public/output.css" rel="stylesheet" />
```

### 5 Connect Google Fonts in `index.html`

```html
<link
  href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

---

## First Page (`index.html`)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>404 Brain Hacks</title>
    <link href="./public/output.css" rel="stylesheet" />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
  </head>

  <body class="bg-hero">
    <button
      class="theme-toggle"
      onclick="toggleTheme()"
      aria-label="Toggle theme"
    >
      <span id="theme-icon"></span>
    </button>

    <div class="bg-overlay min-h-screen">
      <div id="user-interface" class="centered"></div>
    </div>

    <script type="module" src="src/app.js"></script>
  </body>
</html>
```

✅ Theme toggle button prepared (functionality will be added later).

---

## Welcome Page (`welcomeView.js`)

- Imports constants:

```js
import { START_QUIZ_BUTTON_ID, USER_NAME_INPUT_ID } from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
   <div class="flex justify-center mt-[5vh] md:mt-[10vh]">
  <img src="./public/images/logo.svg" alt="logo" class="h-24 sm:h-32 md:h-40 lg:h-50 w-auto">
    </div>

    <h2 class="text-white text-lg font-medium mb-8 tracking-widest">404 BRAIN HACKS</h2>
    
    <h1 class="text-white text-5xl md:text-6xl font-bold mb-6 tracking-wide">
        QUIZ IQ PROGRAMMING
    </h1>
    
    <p class="text-white/90 text-lg mb-12 max-w-md mx-auto">
        This project is an interactive quiz with 10 questions and four answer options for each.
    </p>
    
    <button 
        id="${START_QUIZ_BUTTON_ID}"
        class="w-full max-w-md bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium py-4 px-8 rounded-full text-lg transition-all duration-300 hover:from-orange-600 hover:to-red-600 hover:scale-105 mb-6"
    >
        START
    </button>
    
    <input 
        type="text" 
        id="${USER_NAME_INPUT_ID}"
        placeholder="WRITE YOUR NAME"
        class="w-full max-w-md bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/70 py-4 px-6 rounded-full text-center font-medium text-lg outline-none focus:border-white/40 focus:bg-white/20 transition-all duration-300"
    />
    
    <p class="text-white/70 text-sm mt-8 max-w-md mx-auto">
        It helps users test their knowledge of the DOM and JavaScript in a fun way.
    </p>
    
    <p class="text-white/50 text-xs mt-8">
        2025 404 brain hacks. All rights reserved.<br>
        This quiz is created for educational and entertainment purposes only. The questions are designed to test knowledge of DOM and JavaScript. Results should not be considered as professional certification.
    </p>
  `;
  return element;
};
```

- Contains:

  - Logo
  - Start button
  - Input field (username)
  - Introductory description

---

## Constants (`constants.js`)

```js
export const SHOW_ANSWER_BUTTON_ID = 'show-answer-button';
export const USER_NAME_INPUT_ID = 'user-name';
export const THEME_TOGGLE_ID = 'theme-toggle';
```

---

## Project Structure

```
project/
 ├── public/
 │   ├── images/
 │   ├── output.css
 │   ├── style.css
 │   └── README.md
 ├── src/
 │   ├── pages/
 │   ├── views/
 │   │   ├── answerView.js
 │   │   ├── questionView.js
 │   │   ├── welcomeView.js
 │   │   └── README.md
 │   ├── app.js
 │   ├── constants.js
 │   └── data.js
 ├── index.html
 ├── tailwind.config.js
 └── .gitignore
```
