import React from "react";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <h1 className="hero-title">
        Lerne, dein <span>Geld</span> selbst<br />in die <span>Hand</span> zu nehmen.
      </h1>
      <p className="hero-text">
        Egal ob <strong>Taschengeld</strong>, <strong>BAföG</strong> oder <strong>Nebenjob</strong> – wer seine Finanzen versteht, hat mehr Freiheit.<br />
        Wir zeigen dir, wie du den Überblick behältst und deine Ziele erreichst.
      </p>
      <div className="hero-kicker">
        Schon 1.200 junge Leute haben ihren Finanzcheck gestartet. Sei auch dabei!
      </div>
      <div className="hero-tags">
        <span className="tag">Taschengeld</span>
        <span className="tag">Nebenjob</span>
        <span className="tag">BAföG</span>
      </div>
    </section>
  );
}
