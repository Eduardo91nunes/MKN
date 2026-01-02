import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

const EmailLink = () => {
  const email = 'contato@mkn.com.br';

  const handleClick = (e) => {
    e.preventDefault();

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {

      window.location.href = `mailto:${email}`;
    } else {

      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
        '_blank'
      );
    }
  };

  return (
    <a
      href={`mailto:${email}`}
      onClick={handleClick}
      className="footer-contact-item"
      aria-label={`Enviar e-mail para ${email}`}
    >
      <FaEnvelope className="footer-contact-icon" />
      <span>{email}</span>
    </a>
  );
};

export default EmailLink;
