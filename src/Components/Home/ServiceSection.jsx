import React, { useState } from 'react';
import { Leaf, Droplets, FileText, Map, BarChart3, ChevronRight } from 'lucide-react';
import './ServiceSection.css';
import { Link } from 'react-router-dom';

const ModernServiceSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      icon: Droplets,
      title: "Outorga",
      description: "Regularização do uso de recursos hídricos, garantindo o uso responsável e sustentável da água.",
      colorClass: "color-emerald-teal"
    },
    {
      id: 2,
      icon: BarChart3,
      title: "PGRS",
      description: "Desenvolvimento e implementação de planos para a correta gestão dos resíduos gerados pela sua empresa.",
      colorClass: "color-green-emerald"
    },
    {
      id: 3,
      icon: FileText,
      title: "Licenciamento Ambiental",
      description: "Assessoria completa para obtenção de licenças ambientais, assegurando conformidade com a legislação.",
      colorClass: "color-teal-cyan"
    },
    {
      id: 4,
      icon: Map,
      title: "CAR",
      description: "Cadastro de propriedades rurais no CAR, promovendo a regularização ambiental e preservação dos recursos naturais.",
      colorClass: "color-lime-green"
    },
    {
      id: 5,
      icon: Leaf,
      title: "Gerenciamento Ambiental",
      description: "Monitoramento e gestão de impactos ambientais, desenvolvendo estratégias para minimizar efeitos negativos.",
      colorClass: "color-green-dark"
    }
  ];

  return (
    <div className="modern-service-section">

      <div className="hero-container">
        <div className="hero-wrapper">
          <div className="hero-glow"></div>
          <div className="hero-content">
            <div className="hero-badge">
              <div className="hero-icon-wrapper">
                <Leaf className="hero-icon" />
              </div>
              <span className="hero-badge-text">Sustentabilidade em Ação</span>
            </div>

            <h1 className="hero-title">
              Estamos comprometidos em ajudar sua empresa a
              <span className="hero-title-gradient"> crescer de forma sustentável</span> e responsável
            </h1>

            <p className="hero-description">
              Soluções ambientais completas para empresas que se preocupam com o futuro do planeta e querem estar em conformidade com a legislação.
            </p>

            <div className="hero-buttons">
              <a
                href="https://wa.me/5538999285300"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Fale com um especialista
                <ChevronRight className="btn-icon" />
              </a>

              <Link to="/projetos" className="btn-secondary">
                Nossos Projetos
              </Link>
            </div>

          </div>
        </div>
      </div>


      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">Nossos Serviços</h2>
          <p className="services-subtitle">
            Soluções especializadas para cada necessidade ambiental da sua empresa
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="service-card-wrapper"
              >
                <div className={`card-glow ${service.colorClass}`}></div>

                <div className="service-card">
                  <div className={`card-icon ${service.colorClass}`}>
                    <Icon className="icon" />
                  </div>

                  <h3 className="card-title">{service.title}</h3>

                  <p className="card-description">{service.description}</p>


                  <Link to="/servicos" className="card-cta">
                    Saiba mais
                    <ChevronRight
                      className={`cta-icon ${hoveredCard === service.id ? 'cta-icon-hovered' : ''}`}
                    />
                  </Link>
                  

                  <div className={`card-decoration ${service.colorClass}`}></div>
                </div>
              </div>
            );
          })}
        </div>



      </div>


      <div className="floating-element floating-element-1"></div>
      <div className="floating-element floating-element-2"></div>
    </div>
  );
};

export default ModernServiceSection;