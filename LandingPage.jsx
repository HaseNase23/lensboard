import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="mesh-bg">
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 32 }}>
        <div style={{ maxWidth: 900 }}>
          <h1 style={{ margin: 0, fontSize: 56, lineHeight: 1.05, color: "rgba(255,255,255,0.92)" }}>
            Lensboard
          </h1>
          <p style={{ marginTop: 16, fontSize: 18, color: "rgba(255,255,255,0.75)" }}>
            Seite läuft. Als nächstes bauen wir die fehlenden Komponenten wieder sauber ein.
          </p>
        </div>
      </div>
    </div>
  );
}
