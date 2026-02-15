# SaaS Landing Page - NEXUS

Eine moderne, futuristische SaaS-Landing-Page mit WebGL-Effekten und interaktiven Animationen.

## ✨ Features

- **Hero Section** mit Aurora & Threads WebGL-Effekten
- **Features Section** mit interaktiven SpotlightCards
- **Pricing Section** mit drei Pricing-Tiers
- **Footer** mit animiertem Grid-Background
- Responsive Design für alle Bildschirmgrößen
- Smooth Scrolling & Animationen
- Moderne Typografie (Orbitron + Space Mono)
- Futuristisches Dark Theme mit Cyan-Akzenten

## 🚀 Installation

### 1. Projekt Setup

```bash
# Verzeichnis erstellen
mkdir saas-landing-page
cd saas-landing-page

# Dependencies installieren
npm install
```

### 2. Dateistruktur

Erstelle folgende Dateistruktur:

```
saas-landing-page/
├── src/
│   ├── components/
│   │   ├── Aurora.jsx
│   │   ├── Aurora.css
│   │   ├── Threads.jsx
│   │   ├── Threads.css
│   │   ├── SpotlightCard.jsx
│   │   ├── SpotlightCard.css
│   │   ├── Squares.jsx
│   │   └── Squares.css
│   ├── LandingPage.jsx
│   ├── LandingPage.css
│   ├── App.jsx
│   └── App.css
├── package.json
└── index.html
```

### 3. Komponenten einfügen

Kopiere alle bereitgestellten Komponenten in den `src/components/` Ordner:

- `Aurora.jsx` + `Aurora.css`
- `Threads.jsx` + `Threads.css`
- `SpotlightCard.jsx` + `SpotlightCard.css`
- `Squares.jsx` + `Squares.css`

### 4. Main Files

Kopiere die erstellten Dateien:
- `LandingPage.jsx` → `src/LandingPage.jsx`
- `LandingPage.css` → `src/LandingPage.css`
- `App.jsx` → `src/App.jsx`
- `App.css` → `src/App.css`

### 5. index.html erstellen

Erstelle eine `index.html` im Root:

```html
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Nexus - Transform Your Workflow</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

### 6. main.jsx erstellen

Erstelle `src/main.jsx`:

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### 7. index.css erstellen

Erstelle `src/index.css`:

```css
body {
  margin: 0;
  font-family: 'Space Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

### 8. Vite Config

Erstelle `vite.config.js` im Root:

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
```

## 🎯 Development

```bash
# Development Server starten
npm run dev

# Build für Production
npm run build

# Preview Production Build
npm run preview
```

Die App läuft unter `http://localhost:5173`

## 🎨 Anpassungen

### Farben ändern

In `LandingPage.css` die CSS-Variablen anpassen:

```css
:root {
  --color-bg: #000000;
  --color-primary: #05bfdb;
  --color-primary-dark: #088395;
  --color-primary-darker: #0a4d68;
  /* ... */
}
```

### Aurora-Effekt anpassen

In `LandingPage.jsx` die Aurora-Props ändern:

```jsx
<Aurora
  colorStops={['#0a4d68', '#088395', '#05bfdb']}
  amplitude={0.8}
  blend={1}
  speed={0.3}
/>
```

### Content ändern

Alle Texte, Überschriften und Beschreibungen sind direkt in `LandingPage.jsx` editierbar.

## 📱 Responsive Breakpoints

- Desktop: > 1024px
- Tablet: 768px - 1024px
- Mobile: < 768px

## 🔧 Komponenten-Details

### Aurora
WebGL-Shader mit Simplex-Noise für organische Wellenanimation
- Props: `colorStops`, `amplitude`, `blend`, `speed`

### Threads
Perlin-Noise basierte Thread-Animation mit Maus-Interaktion
- Props: `color`, `amplitude`, `distance`, `enableMouseInteraction`

### SpotlightCard
Interaktive Card mit Spotlight-Effekt beim Hover
- Props: `spotlightColor`, `className`, `children`

### Squares
Animiertes Grid-Pattern mit Hover-Effekt
- Props: `speed`, `squareSize`, `direction`, `borderColor`, `hoverFillColor`

## 🌐 Browser Support

- Chrome/Edge (neueste 2 Versionen)
- Firefox (neueste 2 Versionen)
- Safari (neueste 2 Versionen)

WebGL erforderlich für Aurora & Threads Effekte.

## 📄 Lizenz

Privates Projekt - Alle Rechte vorbehalten

## 🤝 Support

Bei Fragen oder Problemen, bitte GitHub Issue erstellen.

---

**Viel Erfolg mit deiner SaaS-Landing-Page! 🚀**
