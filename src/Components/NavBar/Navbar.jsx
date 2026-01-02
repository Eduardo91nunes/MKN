import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../Assets/Logo.png';
import { FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = () => {
    setIsOpen(false);
    setDropdownOpen(false);
    window.scrollTo(0, 0);
  };

  
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setDropdownOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

 
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
       
        <div className="navbar-left">
          <Link to="/" onClick={handleNavClick}>
            <img src={logo} alt="MKN Logo" className="logo" />
          </Link>
        </div>

    
        <div className={`navbar-center ${isOpen ? 'active' : ''}`}>
          <Link to="/" onClick={handleNavClick} className="nav-link">
            INÍCIO
          </Link>
          <Link to="/sobre" onClick={handleNavClick} className="nav-link">
            SOBRE
          </Link>
          <Link to="/servicos" onClick={handleNavClick} className="nav-link">
            SERVIÇOS
          </Link>
          <Link to="/projetos" onClick={handleNavClick} className="nav-link">
            NOSSOS PROJETOS
          </Link>

          <div
            ref={dropdownRef}
            className={`dropdown ${dropdownOpen ? 'open' : ''}`}
            onMouseEnter={() => window.innerWidth > 768 && setDropdownOpen(true)}
            onMouseLeave={() => window.innerWidth > 768 && setDropdownOpen(false)}
          >
            <button
              className="dropbtn nav-link"
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              onClick={() =>
                window.innerWidth <= 768 && setDropdownOpen(!dropdownOpen)
              }
            >
              CONTATOS
            </button>

            <div className="dropdown-content" role="menu">
              <a
                href="https://wa.me/5538999285300"
                target="_blank"
                rel="noopener noreferrer"
                role="menuitem"
                onClick={handleNavClick}
              >
                <FaWhatsapp /> WhatsApp
              </a>
              <a
                href="https://instagram.com/mknambiental"
                target="_blank"
                rel="noopener noreferrer"
                role="menuitem"
                onClick={handleNavClick}
              >
                <FaInstagram /> Instagram
              </a>
              <a
                href="https://linkedin.com/in/SEU_PERFIL"
                target="_blank"
                rel="noopener noreferrer"
                role="menuitem"
                onClick={handleNavClick}
              >
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="navbar-right">

          <a
          href="https://wa.me/5538999285300"
          target="_blank"
          rel="noopener noreferrer"
          className="orcamento-btn"
        >
          FAÇA SEU ORÇAMENTO
        </a>
         
          <div
            className={`hamburger ${isOpen ? 'active' : ''}`}
            onClick={toggleMenu}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
