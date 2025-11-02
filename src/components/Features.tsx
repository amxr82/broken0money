import React from "react";

export default function Features() {
  return (
    <>
      <section id="about" className="section">
        <h2 className="section-title">ABOUT US</h2>
        <h3 className="section-subtitle">
          Mach dein Geld <span>zum Gamechanger</span>
        </h3>
        <p className="lead">
          Egal ob Taschengeld oder Nebenjob: Mit den richtigen Gewohnheiten kannst du mehr aus deinem Geld machen – Schritt für Schritt.
        </p>

        <div className="grid">
          <div className="card">
            <h4>💰 Budget-Check</h4>
            <p>Finde heraus, wohin dein Geld wirklich fließt.</p>
          </div>
          <div className="card">
            <h4>🎯 Sparziele</h4>
            <p>Setze dir kleine Ziele und freu dich über jeden Fortschritt.</p>
          </div>
          <div className="card">
            <h4>⚠️ Finanzfallen</h4>
            <p>Erkenne typische Ausgabenfallen und wie du sie vermeidest.</p>
          </div>
          <div className="card">
            <h4>💡 Tipps & Tricks</h4>
            <p>Schnelle Hacks für den Alltag von Studis für Studis.</p>
          </div>
        </div>

        <div className="hero-cta" style={{ marginTop: "1rem" }}>
          <a className="btn btn-outline" href="#information">
            ERFAHRE MEHR
          </a>
        </div>
      </section>

      <section id="information" className="section">
        <h2 className="section-title">UNSER BLOG</h2>
        <h3 className="section-subtitle">
          Finanzwissen,<br />das im Alltag hilft
        </h3>

        <div className="grid tools">
          <div className="card">
            <h4>🧮 Nettolohn schnell berechnen</h4>
            <p>Brutto → Netto inkl. Steuerklasse, Minijob/Werkstudent, Sozialabgaben und Freibeträge.</p>
          </div>
          <div className="card">
            <h4>📊 Monatsbudget in 5 Minuten</h4>
            <p>Einnahmen verteilen, Fixkosten prüfen, automatische Sparrate festlegen.</p>
          </div>
          <div className="card">
            <h4>💼 Notgroschen & Rücklagen aufbauen</h4>
            <p>Zielbetrag berechnen, Dauerauftrag einrichten, Puffer für Arzt, Technik & Miete.</p>
          </div>
        </div>
      </section>

      <section id="neuigkeiten" className="section">
        <h2 className="section-title">NEUIGKEITEN</h2>
        <div className="card highlight">
          <h3>
            Mindestlohn & Nettogehalt:<br />Was unterm Strich bleibt
          </h3>
          <p>
            Ob Nebenjob, erster Vollzeitjob oder Teilzeit: Wir erklären verständlich, wie Steuern, Sozialabgaben und Freibeträge dein Nettogehalt beeinflussen – mit Beispielrechner und praxisnahen Tipps.
          </p>
        </div>
      </section>
    </>
  );
}
