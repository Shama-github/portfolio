# Portfolio React App

A modern, fully responsive portfolio site for a software engineer, built with React (Create React App–style structure).

## Features

- Hero, About, Skills, Projects, Experience, and Contact sections
- Light theme with accent color and soft, rounded cards
- Smooth-scrolling navigation bar (desktop + mobile)
- Fully responsive layout (desktop, tablet, mobile)
- Dummy content for skills, projects, experience, and education
- Non-functional contact form with inline demo success state
- Download Resume button pointing to a dummy `public/resume.pdf`

## Getting started

From the `portfolio` folder:

```bash
npm install
npm start
```

This will start the development server on `http://localhost:3000`.

To create a production build:

```bash
npm run build
```

## Structure

- `public/` – static assets (`index.html`, `manifest.json`, `resume.pdf`, `favicon.svg`)
- `src/`
  - `index.js` – React entry point
  - `index.css` – global styles, typography, theme tokens
  - `App.js` – layout and section composition
  - `components/` – functional components for each section and UI element


