import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand">BrokeNoMore Company</div>
        </div>
        <div>
          <div className="footer-heading">Home</div>
          <ul>
            <li><a href="#home">Start</a></li>
          </ul>
        </div>
        <div>
          <div className="footer-heading">Services</div>
          <ul>
            <li><a href="#services">Überblick</a></li>
          </ul>
        </div>
        <div>
          <div className="footer-heading">Preise</div>
          <ul>
            <li><a href="#preise">Pakete</a></li>
          </ul>
        </div>
        <div>
          <div className="footer-heading">Information</div>
          <ul>
            <li><a href="#information">Blog</a></li>
          </ul>
        </div>
        <div>
          <div className="footer-heading">About</div>
          <ul>
            <li><a href="#about">Team & Mission</a></li>
          </ul>
        </div>
        <div>
          <div className="footer-heading">Kontakt</div>
          <ul>
            <li><a href="#kontakt">Kontakt</a></li>
          </ul>
        </div>
        <div>
          <div className="footer-heading">Social</div>
          <ul>
            <li><a href="https://www.linkedin.com" target="_blank" rel="noopener">LinkedIn</a></li>
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener">Facebook</a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener">Instagram</a></li>
          </ul>
        </div>
      </div>
      <p className="copyright">© 2025 BrokeNoMore, GmbH.</p>
    </footer>
  );
}
