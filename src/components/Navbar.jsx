import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowCircleDown,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons"; // Import hamburger and close icons
import "../styles/Navbar.css";
import logo from "../assets/logo/logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        {/* Navbar left side */}
        <div className="navbar-left">
          <a href="/" className="logo-link">
            <img src={logo} alt="Logo" className="logo" />
          </a>
        </div>

        {/* Navbar links */}
        <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <a href="/about" className="navbar-link" onClick={toggleMenu}>
            About
          </a>
          <a href="/team" className="navbar-link" onClick={toggleMenu}>
            Team
          </a>
          <a href="/contact" className="navbar-link" onClick={toggleMenu}>
            Contact
          </a>
        </div>

        {/* Navbar right side */}
        <div className="navbar-right">
          <a href="CryptaSetup.exe" download className="download-link">
            <span style={{ marginRight: "12px" }}>Download</span>
            <FontAwesomeIcon icon={faArrowCircleDown} />
          </a>
          <a href="https://youtube.com/watch?v=-SN-jaTEgIE" className="yt-icon">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a
            href="https://github.com/areebahmeddd/Crypta"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        {/* Hamburger icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
