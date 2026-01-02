import React, { useEffect, useState } from 'react';
import { Leaf, Award, MapPin, Calendar, Star, Quote } from 'lucide-react';
import './NossosProjetos.css';

const NossosProjetos = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    
    window.scrollTo(0, 0);

    
    fetch('http://localhost:5000/api/testimonials/public/visible')
      .then(res => res.json())
      .then(data => {
        setTestimonials(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Erro ao carregar depoimentos:', err);
        setLoading(false);
      });
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="projects-page">
      <div className="projects-hero">
        <div className="hero-badge">
          <Award className="hero-badge-icon" />
          <span>Cases de Sucesso</span>
        </div>
        <h1 className="projects-title">
          Nossos <span className="title-gradient">Projetos</span>
        </h1>
        <p className="projects-subtitle">
          Conheça alguns dos projetos que desenvolvemos com excelência e compromisso. 
          Cada história representa nossa dedicação em entregar soluções ambientais de qualidade.
        </p>
      </div>

      
      <div className="projects-stats">
        <div className="stat-card">
          <div className="stat-icon-wrapper">
            <Award className="stat-icon" />
          </div>
          <h3 className="stat-number">100+</h3>
          <p className="stat-label">Projetos Concluídos</p>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon-wrapper">
            <Leaf className="stat-icon" />
          </div>
          <h3 className="stat-number">2</h3>
          <p className="stat-label">Anos de Experiência</p>
        </div>
      </div>

      <div className="projects-container">
        <h2 className="section-title">Depoimentos dos Nossos Clientes</h2>
        <p className="section-subtitle">
          Veja o que nossos clientes dizem sobre nosso trabalho
        </p>

        {loading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Carregando projetos...</p>
          </div>
        ) : testimonials.length > 0 ? (
          <div className="projects-grid">
            {testimonials.map((project) => (
              <div 
                key={project._id} 
                className="project-card"
                onClick={() => openModal(project)}
              >
                {project.photoUrl && (
                  <div className="project-image-wrapper">
                    <img
                      src={project.photoUrl}
                      alt={project.clientName}
                      className="project-image"
                    />
                    <div className="image-overlay">
                      <span className="view-details">Ver detalhes</span>
                    </div>
                  </div>
                )}
                
                <div className="project-content">
                  <div className="project-header">
                    <Quote className="quote-icon" />
                    <h3 className="project-client">{project.clientName}</h3>
                  </div>
                  
                  <p className="project-testimonial">
                    {project.testimonial.length > 150 
                      ? `${project.testimonial.substring(0, 150)}...` 
                      : project.testimonial}
                  </p>

                  <div className="project-footer">
                    <div className="project-rating">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="star-icon filled" />
                      ))}
                    </div>
                    <button className="read-more-btn">
                      Ler mais
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-projects">
            <div className="no-projects-icon">
              <Award size={64} />
            </div>
            <h3>Nenhum projeto disponível no momento</h3>
            <p>Estamos trabalhando em novos cases para compartilhar em breve!</p>
          </div>
        )}
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            
            {selectedProject.photoUrl && (
              <div className="modal-image-wrapper">
                <img
                  src={selectedProject.photoUrl}
                  alt={selectedProject.clientName}
                  className="modal-image"
                />
              </div>
            )}
            
            <div className="modal-body">
              <div className="modal-header">
                <Quote className="modal-quote-icon" />
                <h2 className="modal-title">{selectedProject.clientName}</h2>
              </div>
              
              <div className="modal-rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="modal-star-icon filled" />
                ))}
              </div>

              <p className="modal-testimonial">{selectedProject.testimonial}</p>

              <div className="modal-footer">
                <button className="modal-cta-button" onClick={closeModal}>
                  Solicitar Orçamento Similar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      
    </div>
  );
};

export default NossosProjetos;