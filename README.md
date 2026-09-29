# React Post Composer

A simple and responsive Post Composer built with React and Vite. This project allows users to draft a post for Twitter or LinkedIn and instantly see the character count, warning them if they exceed the platform limit.

## Features
- Enter post content through a textarea.
- Switch between Twitter and LinkedIn modes.
- Real-time character count.
- Dynamic error message if the text exceeds platform limits.
- The "Post" button is disabled if the limit is exceeded or if the text is empty.
- Fully responsive design.

## Technologies Used
- React (Functional Components, Hooks)
- Vite (Build Tool)
- CSS (Vanilla CSS for styling)

## Character Limits
- **Twitter**: 280 characters
- **LinkedIn**: 3000 characters

## Folder Structure
```
post-composer/
├── public/
├── src/
│   ├── components/
│   │   ├── PostComposer.jsx
│   │   └── PostComposer.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## How to Install

1. Clone or download this repository.
2. Open a terminal in the project directory.
3. Run the following command to install the required dependencies:

```bash
npm install
```

## How to Run Locally

Start the Vite development server using:

```bash
npm run dev
```

Then, open your browser and navigate to `http://localhost:5173/` (or the URL shown in your terminal).

## Example Usage
- Start typing in the text area.
- Select "Twitter" and see the limit set to 280.
- Exceed 280 characters to see the error message and the disabled post button.
- Select "LinkedIn" and watch the limit change to 3000, which will dynamically remove the error if your text is between 281 and 3000 characters.

## Vercel link
https://github.com/sreekeshd7-cell/react-post-composer
