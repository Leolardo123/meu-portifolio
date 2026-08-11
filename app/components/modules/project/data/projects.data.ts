export interface ProjectParticipatedDTO {
  name: string;
  categories: string[];
  techs: string[];
  description: string;
  role: string;
  contribution: string[];
}

export const projectParticipatedList: ProjectParticipatedDTO[] = [
  {
    name: "YUSE",
    categories: ["Transporte", "Delivery"],
    techs: ["Strapi", "Node.js", "PostgreSQL"],
    description:
      "Plataforma de corridas e entregas, com uma funcionalidade secundária de rede social para seus usuários.",
    role: "Desenvolvedor Backend",
    contribution: [
      'Entrega do fluxo principal de corridas com passageiros',
      'Correção das interações entre perfis dos usuários',
      'Implementação de interceptors com Axios para monitoramento e contabilização de chamadas a serviços externos na dashboard.',
      'Refatoração/correção do fluxo das regras de cancelamento',
      'Implementação de provedores de pagamentos funcionando em paralelo, EfíPay e Pagar.me',
      'Implementação de cronjobs paginados para processamento de envios em massa de e-mails e execução de regras baseadas em tempo nas corridas.',
    ]
  },
  {
    name: "Estuda",
    categories: ["Educação", "Concursos"],
    techs: ["Strapi", "Node.js", "PostgreSQL"],
    description:
      "Plataforma de cursos para concurseiros, que implementa regras de estudo elaboradas com ciclos, espaçamento de tarefas, entre outros.",
    role: "Desenvolvedor Backend",
    contribution: [
      'Correção de bugs críticos com usuários mal configurados ao acessar abas de conteúdo, questões, etc.',
      'Refatoração do cálculo do calendário de estudos, corrigindo inconsistências nas regras de espaçamento e reduzindo problemas de performance.',
      'Refatoração do processamento assíncrono de conteúdos gerados por IA, dividindo a operação em etapas para reduzir perdas durante retentativas e diminuir o tempo de processamento.',
      'Correção dos cálculos da dashboard do usuário administrador',
      'Implementação de filas de processamento e travas em processos chave, como cadastro do aluno em editais, e processamentos pesados',
    ]
  },
  {
    name: "Motorfind",
    categories: ["E-commerce"],
    techs: ["Strapi", "Node.js", "PostgreSQL"],
    description: "Plataforma de e-commerce voltada para o segmento automotivo.",
    role: "Desenvolvedor Backend",
    contribution: [
      'Refatoração das listagens dos produtos, categorias, de forma a unificar e simplificar o código e integração pelo FrontEnd',
      'Correção de bugs no fluxo de negociação de produtos direto com as lojas',
      'Implementação da integração com a Envia.com para cálculo e solicitação de fretes.',
      'Refatoração do fluxo de pagamentos e correção das regras de split para distribuição de valores entre lojas parceiras e a motorfind.'
    ]
  },
  {
    name: "Cronoprovas",
    categories: ["Eventos"],
    techs: [".NET", "PostgreSQL"],
    description:
      "Sistema para gerenciamento de eventos de corridas de cavalos.",
    role: "Desenvolvedor Fullstack",
    contribution: [
      'Correção das regras aplicadas na progressão de uma etapa da prova para a próxima',
      'Implementação de testes E2E pontuais com Cypress para validação das regras críticas do fluxo de provas.',
      'Implementação de provedor de pagamentos Pagar.me para pagamento de convites',
      'Adaptação das exportações e importações de competidores'
    ]
  },
  {
    name: "Kaliga",
    categories: ["Mobilidade", "Geolocalização"],
    techs: ["Strapi", "Node.js", "PostgreSQL"],
    description:
      "Plataforma",
    role: "Desenvolvedor Backend",
    contribution: [
      'Implementação de consultas geoespaciais com PostGIS e LineString/LineBuffer para identificar radares localizados ao longo das rotas dos usuários.',
      'Utilização do QGIS para análise geoespacial e cadastro de municípios utilizados nas regras de alertas por região.',
      'Implementação de chat baseado em proximidade utilizando Firebase e consultas geoespaciais.'
    ]
  },
];
