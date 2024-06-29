import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className="logo-text">TEMA</h2>
          <p>
            TEMA is dedicated to bridging the gap between healthcare and rural
            areas, providing essential services and resources to those who need
            them most.
          </p>
        </div>
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <nav>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#teams">Teams</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer-section team">
          <h3>&copy; 2024 TEMA</h3>
          <p>Designed by:</p>
          <ul>
            <li>Arinze Umehobi</li>
            <li>Isaac Adegboyega</li>
            <li>Bernard Amegah</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
