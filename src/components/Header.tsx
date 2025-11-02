import React from "react";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">BrokeNoMore Company</div>
      <nav className="nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#preise">Preise</a></li>
          <li><a href="#information">Information</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#kontakt">Kontakt</a></li>
        </ul>
      </nav>
    </header>
  );
}
