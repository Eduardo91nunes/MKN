import React, { useState, useEffect, useRef } from 'react';
import { Leaf, Heart, Target, Users, Award, Calendar, Play } from 'lucide-react';
import './Sobre.css';

const AboutPage = () => {
  const [expandedTimeline, setExpandedTimeline] = useState(null);
  const [visibleItems, setVisibleItems] = useState([]);
  const timelineRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = timelineRefs.current.indexOf(entry.target);
            if (index !== -1) {
              setVisibleItems((prev) => {
                if (!prev.includes(index)) {
                  return [...prev, index];
                }
                return prev;
              });
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    timelineRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const timelineData = [
    {
      id: 1,
      year: "2018",
      title: "O Início do Sonho",
      summary: "Como nasceu a visão de transformar a gestão ambiental no Brasil",
      icon: Calendar,
      fullStory: "Tudo começou com um sonho compartilhado por três amigas formadas em engenharia ambiental em 2018. Unidas pelo desejo de transformar conhecimento técnico em soluções reais para o meio ambiente, elas visualizaram a oportunidade de criar algo novo, sólido e com propósito. Movidas pela paixão pela sustentabilidade e pelo compromisso com a responsabilidade ambiental, decidiram unir forças para construir uma consultoria capaz de gerar impacto positivo, oferecendo serviços sérios, qualificados e voltados para resultados concretos.",
      highlights: [
        "Primeira reunião de planejamento",
        "Definição dos valores da empresa",
        "Registro oficial da MKN Consultoria"
      ]
    },
    {
      id: 2,
      year: "2023",
      title: "Primeiro Grande Projeto",
      summary: "O desafio que consolidou nossa expertise e credibilidade",
      icon: Award,
      fullStory: "Em 2023, Marília, Karina e Nicole decidiram transformar esse sonho em realidade, dando os primeiros passos para a criação da empresa. Infelizmente, um momento de tristeza marcou esse início: Nicole faleceu em um acidente de carro. Mesmo diante dessa perda, Marília e Karina escolheram honrar a amizade e o sonho que haviam construído juntas, seguindo com a MKN Consultoria Ambiental.",
      highlights: [
        "Licenciamento completo aprovado em tempo recorde",
        "Implementação de sistema de gestão de resíduos",
        "Reconhecimento do órgão ambiental pela qualidade técnica"
      ]
    },
    {
      id: 3,
      year: "2019",
      title: "Expansão da Equipe",
      summary: "Crescimento estruturado para atender mais clientes com qualidade",
      icon: Users,
      fullStory: "Com o aumento da demanda, percebemos que era hora de expandir. Contratamos profissionais especializados em diferentes áreas ambientais, sempre mantendo nosso padrão de excelência. Cada novo membro foi escolhido não apenas pela competência técnica, mas também pelo alinhamento com nossos valores de sustentabilidade e compromisso com o cliente. Foi um período de muito aprendizado em gestão de equipe e processos.",
      highlights: [
        "Contratação de 5 novos consultores especializados",
        "Criação de processos internos otimizados",
        "Investimento em treinamentos e capacitação"
      ]
    },
    {
      id: 4,
      year: "2021",
      title: "Pandemia e Adaptação",
      summary: "Como transformamos desafios em oportunidades de inovação",
      icon: Target,
      fullStory: "A pandemia nos forçou a repensar completamente nossa forma de trabalhar. Rapidamente implementamos trabalho remoto, videoconferências para vistorias preliminares e documentação digital. O que parecia um obstáculo se tornou uma vantagem: conseguimos atender clientes em todo o país sem limitações geográficas. Nossa capacidade de adaptação e inovação nos destacou ainda mais no mercado.",
      highlights: [
        "Digitalização completa dos processos",
        "Expansão do atendimento para todo o Brasil",
        "Manutenção de 100% dos contratos ativos"
      ]
    },
    {
      id: 5,
      year: "2024",
      title: "Hoje e o Futuro",
      summary: "Consolidados como referência em consultoria ambiental",
      icon: Leaf,
      fullStory: "Hoje somos referência em consultoria ambiental, com dezenas de projetos bem-sucedidos e clientes satisfeitos. Continuamos fiéis aos nossos valores iniciais: excelência técnica, compromisso com a sustentabilidade e respeito ao cliente. Nosso foco agora é expandir ainda mais nossa atuação, sempre mantendo a qualidade que nos trouxe até aqui. O futuro é promissor e estamos preparadas para os próximos desafios.",
      highlights: [
        "Mais de 100 projetos concluídos com sucesso",
        "Equipe de 15 profissionais especializados",
        "Certificações e reconhecimentos do setor"
      ]
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Nossa Missão",
      description: "Fornecer soluções ambientais de excelência que promovam o desenvolvimento sustentável e a conformidade legal das empresas, com compromisso, ética e respeito ao meio ambiente."
    },
    {
      icon: Target,
      title: "Nossa Visão",
      description: "Ser referência nacional em consultoria ambiental, reconhecida pela qualidade técnica, inovação e pelo impacto positivo que geramos na preservação ambiental."
    },
    {
      icon: Award,
      title: "Nossos Valores",
      description: "Excelência, Sustentabilidade, Ética, Comprometimento, Inovação e Respeito - pilares que guiam cada projeto e decisão da nossa empresa."
    }
  ];

  const toggleTimeline = (id) => {
    setExpandedTimeline(expandedTimeline === id ? null : id);
  };

  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="hero-badge">
          <Leaf className="hero-badge-icon" />
          <span>Nossa História</span>
        </div>
        <h1 className="about-title">
          Uma Jornada de <span className="title-gradient">Compromisso</span> e <span className="title-gradient">Sustentabilidade</span>
        </h1>
        <p className="about-subtitle">
          Conheça a trajetória de duas profissionais apaixonadas que transformaram
          um sonho em uma das consultorias ambientais mais respeitadas do mercado
        </p>
      </div>

      <div className="timeline-section">
        <h2 className="section-title">Nossa Trajetória</h2>
        <p className="section-subtitle">
          Cada marco representa um passo importante na nossa história
        </p>

        <div className="timeline">
          <div className="timeline-line"></div>

          {timelineData.map((item, index) => {
            const Icon = item.icon;
            const isExpanded = expandedTimeline === item.id;
            const isVisible = visibleItems.includes(index);

            return (
              <div
                key={item.id}
                ref={(el) => (timelineRefs.current[index] = el)}
                className={`timeline-item ${isVisible ? 'visible' : ''} ${isExpanded ? 'expanded' : ''}`}
              >
                <div className="timeline-marker">
                  <div className="marker-dot">
                    <Icon className="marker-icon" />
                  </div>
                  <span className="timeline-year">{item.year}</span>
                </div>

                <div className="timeline-content">
                  <div className="timeline-card" onClick={() => toggleTimeline(item.id)}>
                    <div className="timeline-header">
                      <h3 className="timeline-title">{item.title}</h3>
                      <p className="timeline-summary">{item.summary}</p>
                    </div>

                    <div className={`timeline-details ${isExpanded ? 'visible' : ''}`}>
                      <p className="timeline-story">{item.fullStory}</p>

                      <div className="timeline-highlights">
                        <h4>Destaques:</h4>
                        <ul>
                          {item.highlights.map((highlight, idx) => (
                            <li key={idx}>{highlight}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <button className="timeline-toggle">
                      {isExpanded ? 'Ver menos' : 'Ver mais sobre este período'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="values-section">
        <h2 className="section-title">Nossos Valores</h2>
        <p className="section-subtitle">
          Os princípios que guiam cada decisão e projeto
        </p>

        <div className="values-grid">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="value-card">
                <div className="value-icon-wrapper">
                  <Icon className="value-icon" />
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="video-section">
        <h2 className="section-title">Conheça Nossa História</h2>
        <p className="section-subtitle">
          Ouça das próprias fundadoras a jornada que construímos juntas
        </p>

        <div className="video-container">
          <div className="video-placeholder video-embed">
            <iframe
              src="https://player.vimeo.com/video/1148372820"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Vídeo Institucional MKN"
            ></iframe>
          </div>
        </div>
      </div>


    </div>
  );
};

export default AboutPage;
