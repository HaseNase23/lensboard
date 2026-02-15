# Projektstruktur für SaaS Landing Page

## Dateiorganisation

```
saas-landing-page/
├── public/
│   └── (static assets)
├── src/
│   ├── components/
│   │   ├── Aurora.jsx          (deine vorhandene Komponente)
│   │   ├── Aurora.css          (deine vorhandene CSS)
│   │   ├── Threads.jsx         (deine vorhandene Komponente)
│   │   ├── Threads.css         (deine vorhandene CSS)
│   │   ├── SpotlightCard.jsx   (deine vorhandene Komponente)
│   │   ├── SpotlightCard.css   (deine vorhandene CSS)
│   │   ├── Squares.jsx         (deine vorhandene Komponente)
│   │   └── Squares.css         (deine vorhandene CSS)
│   ├── LandingPage.jsx         ✅ NEU - Hauptkomponente
│   ├── LandingPage.css         ✅ NEU - Styling
│   ├── App.jsx                 ✅ NEU - Root-Komponente
│   ├── App.css                 ✅ NEU - App-Styling
│   ├── main.jsx                ✅ NEU - Entry Point
│   └── index.css               ✅ NEU - Global Styles
├── index.html                  ✅ NEU - HTML Entry
├── vite.config.js              ✅ NEU - Vite Config
├── package.json                ✅ NEU - Dependencies
└── README.md                   ✅ NEU - Dokumentation
```

## Setup-Schritte

### 1. Neues Projekt erstellen
```bash
npm create vite@latest saas-landing-page -- --template react
cd saas-landing-page
```

### 2. Dependencies installieren
```bash
npm install ogl
```

### 3. Dateien kopieren

**Deine vorhandenen Komponenten:**
- Kopiere Aurora.jsx + Aurora.css → src/components/
- Kopiere Threads.jsx + Threads.css → src/components/
- Kopiere SpotlightCard.jsx + SpotlightCard.css → src/components/
- Kopiere Squares.jsx + Squares.css → src/components/

**Neue Dateien (aus diesem Paket):**
- LandingPage.jsx → src/
- LandingPage.css → src/
- App.jsx → src/ (überschreibe die existierende)
- App.css → src/ (überschreibe die existierende)
- main.jsx → src/ (überschreibe die existierende)
- index.css → src/ (überschreibe die existierende)
- index.html → / (Root, überschreibe die existierende)
- vite.config.js → / (Root)
- package.json → / (merge mit existierender)

### 4. Import-Pfade anpassen

In `LandingPage.jsx` die Imports anpassen:

```jsx
import Aurora from './components/Aurora';
import Threads from './components/Threads';
import SpotlightCard from './components/SpotlightCard';
import Squares from './components/Squares';
```

### 5. Projekt starten
```bash
npm run dev
```

Öffne http://localhost:5173

## Wichtige Hinweise

1. **WebGL-Support**: Aurora und Threads benötigen WebGL-Unterstützung
2. **OGL Library**: Wird für WebGL-Rendering verwendet
3. **Fonts**: Werden automatisch von Google Fonts geladen
4. **Responsive**: Mobile-optimiert mit Breakpoints

## Deployment

### Vercel
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
netlify deploy --prod --dir=dist
```

### GitHub Pages
```bash
npm run build
# Push 'dist' Ordner zu gh-pages branch
```

## Performance-Tipps

1. Lazy-Load für Komponenten verwenden
2. Code-Splitting für große Bundles
3. Bilder optimieren (WebP, AVIF)
4. CDN für statische Assets nutzen

---

Viel Erfolg! 🚀
