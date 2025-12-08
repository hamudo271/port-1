import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import "./Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container header-container">
        <Link to="/" className="logo">
          Dr. Morimori
        </Link>

        <nav className="desktop-nav">
          <ul className="nav-list">
            <li><Link to="/intro">Clinic Intro</Link></li>
            <li><Link to="/treatments">Treatments</Link></li>
            <li><Link to="/process">Process</Link></li>
            <li><Link to="/location">Location</Link></li>
          </ul>
        </nav>

        <div className="header-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
          <nav>
            <ul className="mobile-nav-list">
              <li><Link to="/intro" onClick={toggleMenu}>Clinic Intro</Link></li>
              <li><Link to="/treatments" onClick={toggleMenu}>Treatments</Link></li>
              <li><Link to="/process" onClick={toggleMenu}>Process</Link></li>
              <li><Link to="/location" onClick={toggleMenu}>Location</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
