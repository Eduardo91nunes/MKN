import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { Leaf } from 'lucide-react';
import './rodape.css';
import logo from '../../Assets/Logo.png';
import Email from './EmailLink'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-section">
            <img src={logo} alt="MKN Logo" className="footer-logo" />
            <p className="footer-description">
              Consultoria ambiental especializada em soluções sustentáveis para sua empresa crescer com responsabilidade.
            </p>
            <div className="footer-badge">
              <Leaf className="footer-badge-icon" />
              <span>Sustentabilidade em Ação</span>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Links Rápidos</h3>
            <ul className="footer-links">
              <li>
                <Link to="/" onClick={scrollToTop}>Início</Link>
              </li>
              <li>
                <Link to="/sobre" onClick={scrollToTop}>Sobre</Link>
              </li>
              <li>
                <Link to="/servicos" onClick={scrollToTop}>Serviços</Link>
              </li>
              <li>
                <Link to="/projetos" onClick={scrollToTop}>Nossos Projetos</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Nossos Serviços</h3>
            <ul className="footer-links">
              <li><span className="footer-service">Outorga</span></li>
              <li><span className="footer-service">PGRS</span></li>
              <li><span className="footer-service">Licenciamento Ambiental</span></li>
              <li><span className="footer-service">CAR</span></li>
              <li><span className="footer-service">Gerenciamento Ambiental</span></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Contato</h3>
            <div className="footer-contact">
              <a href="tel:+5538999285300" className="footer-contact-item">
                <FaPhone className="footer-contact-icon" />
                <span>(38) 99928-5300</span>
              </a>
              <Email />

              <a
                href="https://www.google.com/maps/place/Prefeitura+Municipal+de+Unaí/@-16.360872,-46.9019557,20.75z/data=!4m15!1m8!3m7!1s0x9357aa2ce7986bab:0x5aa3aadab708626a!2sUnaí+-+MG,+38610-000!3b1!8m2!3d-16.3588621!4d-46.904811!16zL20vMGI0aHpy!3m5!1s0x9356ed83e53a0b9d:0x19fa94c2c255180a!8m2!3d-16.3610678!4d-46.902112!16s%2Fg%2F1tjfcbb3?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-item"
                aria-label="Abrir localização de Unaí, Minas Gerais no Google Maps"
              >
                <FaMapMarkerAlt className="footer-contact-icon" />
                <span>Unaí, Minas Gerais</span>
              </a>

            </div>

            <h4 className="footer-social-title">Redes Sociais</h4>
            <div className="footer-social">
              <a
                href="https://wa.me/5538999285300"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link whatsapp"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://instagram.com/mknambiental"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link instagram"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com/in/SEU_PERFIL"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link linkedin"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>


      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="footer-copyright">
            © {new Date().getFullYear()} MKN Consultoria. Todos os Direitos Reservados.
          </p>
          <p className="footer-developer">
            Desenvolvido por <span className="developer-name">Eduardo Nunes</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
