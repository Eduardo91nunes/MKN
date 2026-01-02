import React, { useState } from 'react';
import { Leaf, Droplets, FileText, Map, BarChart3, ChevronDown } from 'lucide-react';
import './Servicos.css';

const ServicesPage = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const services = [
    {
      id: 1,
      icon: Droplets,
      title: "Outorga",
      summary: "Regularização do uso de recursos hídricos, garantindo o uso responsável e sustentável da água.",
      colorClass: "color-emerald-teal",
      fullDescription: "A outorga de direito de uso de recursos hídricos é uma autorização expedida pelo poder público que permite ao usuário utilizar água de corpos hídricos (rios, lagos, aquíferos) para diversas finalidades.",
      included: [
        "Análise técnica do local",
        "Elaboração de estudos hidrológicos",
        "Preparo e protocolo da documentação",
        "Acompanhamento do processo junto aos órgãos competentes",
        "Renovação de outorgas existentes"
      ],
      benefits: [
        "Conformidade legal com a legislação ambiental",
        "Segurança jurídica para sua operação",
        "Uso sustentável dos recursos hídricos",
        "Evita multas e sanções ambientais"
      ],
      process: [
        "1. Diagnóstico e visita técnica",
        "2. Elaboração de estudos e projetos",
        "3. Protocolo junto ao órgão competente",
        "4. Acompanhamento da análise",
        "5. Emissão da outorga"
      ]
    },
    {
      id: 2,
      icon: BarChart3,
      title: "PGRS - Plano de Gerenciamento de Resíduos Sólidos",
      summary: "Desenvolvimento e implementação de planos para a correta gestão dos resíduos gerados pela sua empresa.",
      colorClass: "color-green-emerald",
      fullDescription: "O PGRS é um documento técnico que identifica a tipologia e quantidade de geração de resíduos, indicando as formas ambientalmente corretas para manejo, acondicionamento, transporte, transbordo, tratamento e destinação final.",
      included: [
        "Diagnóstico completo dos resíduos gerados",
        "Caracterização e classificação dos resíduos",
        "Elaboração do plano de gerenciamento",
        "Definição de procedimentos operacionais",
        "Treinamento da equipe"
      ],
      benefits: [
        "Redução de custos com gestão de resíduos",
        "Conformidade com a Política Nacional de Resíduos Sólidos",
        "Melhoria da imagem corporativa",
        "Contribuição para sustentabilidade ambiental"
      ],
      process: [
        "1. Levantamento de dados e diagnóstico",
        "2. Caracterização dos resíduos",
        "3. Elaboração do PGRS",
        "4. Implementação dos procedimentos",
        "5. Capacitação e monitoramento"
      ]
    },
    {
      id: 3,
      icon: FileText,
      title: "Licenciamento Ambiental",
      summary: "Assessoria completa para obtenção de licenças ambientais, assegurando conformidade com a legislação.",
      colorClass: "color-teal-cyan",
      fullDescription: "O licenciamento ambiental é um procedimento administrativo que autoriza a localização, instalação, ampliação e operação de empreendimentos e atividades utilizadoras de recursos ambientais.",
      included: [
        "Análise de viabilidade ambiental",
        "Elaboração de estudos ambientais necessários",
        "Preparo de documentação técnica",
        "Protocolo e acompanhamento do processo",
        "Suporte para atendimento de condicionantes"
      ],
      benefits: [
        "Operação legal do seu empreendimento",
        "Prevenção de multas e embargos",
        "Acesso a financiamentos e incentivos",
        "Diferencial competitivo no mercado"
      ],
      process: [
        "1. Análise da atividade e enquadramento",
        "2. Elaboração dos estudos ambientais",
        "3. Protocolo da solicitação",
        "4. Atendimento às solicitações do órgão",
        "5. Emissão da licença ambiental"
      ]
    },
    {
      id: 4,
      icon: Map,
      title: "CAR - Cadastro Ambiental Rural",
      summary: "Cadastro de propriedades rurais no CAR, promovendo a regularização ambiental e preservação dos recursos naturais.",
      colorClass: "color-lime-green",
      fullDescription: "O CAR é um registro público eletrônico obrigatório para todos os imóveis rurais, que integra informações ambientais das propriedades e posses rurais, formando base de dados para controle, monitoramento e planejamento ambiental.",
      included: [
        "Levantamento topográfico e georreferenciamento",
        "Análise documental da propriedade",
        "Cadastro no sistema SICAR",
        "Delimitação de áreas de preservação",
        "Elaboração de PRAD quando necessário"
      ],
      benefits: [
        "Regularização ambiental da propriedade",
        "Acesso a crédito rural e programas governamentais",
        "Planejamento do uso sustentável da terra",
        "Valorização do imóvel rural"
      ],
      process: [
        "1. Coleta de documentação",
        "2. Levantamento em campo",
        "3. Processamento de dados geográficos",
        "4. Cadastro no SICAR",
        "5. Validação e recibo de inscrição"
      ]
    },
    {
      id: 5,
      icon: Leaf,
      title: "Gerenciamento Ambiental",
      summary: "Monitoramento e gestão de impactos ambientais, desenvolvendo estratégias para minimizar efeitos negativos.",
      colorClass: "color-green-dark",
      fullDescription: "Serviço completo de gestão ambiental que engloba planejamento, implementação e monitoramento de ações para garantir a conformidade ambiental e promover a melhoria contínua do desempenho ambiental da empresa.",
      included: [
        "Diagnóstico ambiental completo",
        "Elaboração de programas ambientais",
        "Monitoramento de indicadores",
        "Auditorias ambientais periódicas",
        "Consultoria para certificações"
      ],
      benefits: [
        "Redução de riscos ambientais",
        "Economia com otimização de processos",
        "Preparação para certificações ISO 14001",
        "Melhoria da gestão ambiental corporativa"
      ],
      process: [
        "1. Diagnóstico inicial da situação",
        "2. Definição de objetivos e metas",
        "3. Implementação de programas",
        "4. Monitoramento contínuo",
        "5. Relatórios e melhorias"
      ]
    }
  ];

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="services-page">
      {/* Header Section */}
      <div className="services-page-header">
        <div className="header-badge">
          <Leaf className="header-icon" />
          <span>Soluções Ambientais</span>
        </div>
        <h1 className="page-title">
          Nossos <span className="title-gradient">Serviços</span>
        </h1>
        <p className="page-subtitle">
          Conheça em detalhes todas as soluções que oferecemos para sua empresa estar em conformidade ambiental
        </p>
      </div>

      <div className="services-list">
        {services.map((service) => {
          const Icon = service.icon;
          const isExpanded = expandedCard === service.id;

          return (
            <div
              key={service.id}
              className={`service-card-expandable ${isExpanded ? 'expanded' : ''} ${service.colorClass}`}
            >

              <div className="card-header" onClick={() => toggleCard(service.id)}>
                <div className="card-header-left">
                  <div className={`card-icon-expandable ${service.colorClass}`}>
                    <Icon className="icon" />
                  </div>
                  <div className="card-header-text">
                    <h3 className="card-title-expandable">{service.title}</h3>
                    <p className="card-summary">{service.summary}</p>
                  </div>
                </div>
                <ChevronDown className={`expand-icon ${isExpanded ? 'rotated' : ''}`} />
              </div>


              <div className={`card-content ${isExpanded ? 'visible' : ''}`}>
                <div className="content-section">
                  <h4>Descrição Completa</h4>
                  <p>{service.fullDescription}</p>
                </div>

                <div className="content-section">
                  <h4>O que está incluído</h4>
                  <ul className="content-list">
                    {service.included.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="content-section">
                  <h4>Benefícios</h4>
                  <ul className="content-list benefits-list">
                    {service.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>

                <div className="content-section">
                  <h4>Processo</h4>
                  <div className="process-steps">
                    {service.process.map((step, index) => (
                      <div key={index} className="process-step">
                        {step}
                      </div>
                    ))}
                  </div>
                </div>


                <a
                  href="https://wa.me/5538999285300"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-service-button"
                >
                  Solicitar Orçamento deste Serviço
                </a>

              </div>
            </div>
          );
        })}
      </div>


      <div className="services-bottom-cta">
        <h2>Não encontrou o que procura?</h2>
        <p>Entre em contato conosco para soluções personalizadas</p>
        <a
          href="https://wa.me/5538999285300"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-contact-button"
        >
          Falar com Especialista
        </a>
       
      </div>
    </div>
  );
};

export default ServicesPage;