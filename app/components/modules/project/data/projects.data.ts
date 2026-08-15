export interface ProjectParticipatedDTO {
  name: string;
  categories: string[];
  technologies: string[];
  description: string;
  role: string;
  contribution: string[];
}

export const projectParticipatedList: ProjectParticipatedDTO[] = [
  {
    name: "Bora",
    categories: ["Eventos"],
    technologies: ["Strapi", "Node.js", "PostgreSQL"],
    description:
      "Plataforma para gerência e venda de eventos.",
    role: "Desenvolvedor Backend",
    contribution: [
      'Implementação de anúncios cadastrados pelo administrador, usando calculo de intercalagem paginada (cada x eventos, 1 anuncio)',
      'Criação de script para gerar a base das repositories do sistema automaticamente, agilizando o processo de desenvolvimento'
    ]
  },
  {
    name: "Estuda",
    categories: ["Educação", "Concursos"],
    technologies: ["Strapi", "Node.js", "PostgreSQL"],
    description:
      "Plataforma de cursos para concurseiros, que implementa regras de estudo elaboradas com ciclos, espaçamento de tarefas, entre outros.",
    role: "Desenvolvedor Backend",
    contribution: [
      'Correção de bugs e erros críticos com usuários ao acessar abas de conteúdo, questões, etc.',
      'Refatoração do cálculo do calendário de estudos, corrigindo inconsistências nas regras de espaçamento e reduzindo problemas de performance.',
      'Refatoração do processamento assíncrono de conteúdos gerados por IA, dividindo a operação em etapas para reduzir perdas durante retentativas e diminuir o tempo de processamento.',
      'Correção dos cálculos da dashboard do usuário administrador',
      'Implementação de filas de processamento e travas em processos chave, como cadastro do aluno em editais, e processamentos pesados',
    ]
  },
  {
    name: "YUSE",
    categories: ["Transporte", "Delivery"],
    technologies: ["Strapi", "Node.js", "PostgreSQL"],
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
    name: "Motorfind",
    categories: ["E-commerce"],
    technologies: ["Strapi", "Node.js", "PostgreSQL"],
    description: "Plataforma de e-commerce voltada para o segmento automotivo.",
    role: "Desenvolvedor Backend",
    contribution: [
      'Refatoração das listagens dos produtos, categorias, de forma a unificar e evitar redundâncias',
      'Correção de bugs no fluxo de negociação de produtos direto com as lojas',
      'Implementação da integração com a Envia.com para cálculo e solicitação de fretes.',
      'Refatoração do fluxo de pagamentos e correção das regras de split para distribuição de valores entre lojas parceiras e a motorfind.'
    ]
  },
  {
    name: "Prestadio",
    categories: ["Freelance","Serviços"],
    technologies: ["Nest.js", "Node.js", "MongoDB"],
    description: "Plataforma para intermediar e facilitar que clientes possam contratar serviços de prestadores.",
    role: "Desenvolvedor Backend",
    contribution: [
      'Script para transfêrencia da base de imagens e documentos do sistema antigo Google Cloud para AWS S3',
      'Adaptação do fluxo de pagamentos para inclusão de novos subitens dos detalhes dos serviços',
      'Troca da integração de pagamentos com mercado pago, pela stripe',
      'Correção de bugs no fluxo de propostas de serviço entre prestadores e clientes'
    ]
  },
  {
    name: "Giraffe VoIP",
    categories: ["Comunicação", "Atendimento", "Chatbot"],
    technologies: ["Strapi", "Node.js", "PostgreSQL"],
    description:
      "Sistema para gerenciamento de leads e suporte a empresas terceiras via whatsapp com evolutionAPI.",
    role: "Desenvolvedor Backend",
    contribution: [
      "Implementação do cadastro de contatos",
      "Implementação dos níveis de acesso das funcionalidades por tela por usuário",
      "Desenvolvimento da dashboard do administrador"
    ]
  },
  {
    name: "Saudeprime",
    categories: ["Saude", "Planos"],
    technologies: ["Strapi", "Node.js", "PostgreSQL"],
    description: 
      "Plataforma de gerenciamento de clientes e planos de saude, proposta para substuir a antiga",
    role: "Desevolvedor Backend",
    contribution: [
      "Correções pontuais nos campos e status das rotas de consulta da CPFL, usando SOAP com protocolo FTP"
    ]
  },
  {
    name: "Saudeprime Prestador",
    categories: ["Saude", "Planos"],
    technologies: ["Strapi", "Node.js", "PostgreSQL"],
    description: 
      "Plataforma de gerenciamento de clientes e planos de saude, proposta para substuir a original após migração dos planos",
    role: "Desevolvedor Backend",
    contribution: [
      "Implementação de todos os cadastros: Clientes, Planos, Telas (controle de acesso), Cobranças",
      "Integração com Pagar.me",
      "Desenvolvimento de fluxo próprio de recorrência, com regras específicas baseadas no tipo e atraso das cobranças",
    ]
  },
  {
    name: "FaleMais VoIP",
    categories: ["Comunicação", "Atendimento", "Chatbot"],
    technologies: ["Firebase", "Redis"],
    description:
      "Sistema para gerenciamento de leads a chamados via whatsapp com Meta Cloud API e 360Dialog.",
    role: "Desenvolvedor Backend",
    contribution: [
      'Implementação dos cadastros das regras internas do sistema, para gerenciamento automatico dos canais,status e fluxo dos chats',
      'Implementação da arvore de decisão do fluxo de chat automatizado (palavra-chave -> etapa)',
      'Implementação de cache redis globalmente, temporizado de acordo com a necessidade do endpoint, para minimizar custo de leituras do firebase'
    ]
  },
  {
    name: "Cronoprovas",
    categories: ["Eventos"],
    technologies: [".NET", "PostgreSQL"],
    description:
      "Sistema para gerenciamento de eventos de corridas de cavalos.",
    role: "Desenvolvedor Fullstack",
    contribution: [
      'Correção das regras aplicadas na progressão de uma etapa da prova para a próxima',
      'Implementação de testes E2E pontuais com Cypress para validação das regras críticas do fluxo de provas.',
      'Implementação de provedor de pagamentos Pagar.me para pagamento de bilhetes',
    ]
  },
  {
    name: "Kaliga",
    categories: ["Mobilidade", "Geolocalização"],
    technologies: ["Strapi", "Node.js", "PostgreSQL", "PostGIS", "Firebase"],
    description:
      "Plataforma de mobilidade automotiva que fornece alertas em rota, avisos de rodízio de veículos por região e chat por proximidade.",
    role: "Desenvolvedor Backend",
    contribution: [
      'Implementação de consultas geoespaciais com PostGIS (LineString e LineBuffer) para identificação de radares ao longo das rotas dos usuários.',
      'Utilização do QGIS para análise geoespacial e cadastro de municípios aplicados nas regras de alertas regionais.',
      'Desenvolvimento de chat por proximidade integrado ao Firebase com validação geoespacial.'
    ]
  },
  {
    name: "Cerrado Das Águas",
    categories: ["Gestão Ambiental"],
    technologies: ["Node.js", "TypeOrm", "PostgreSQL", "ReactJs"],
    description: "Ferramenta para gestão de cadastros de glebas, com cadastro de questionários e calculo de insumos/ferramentas/maquinário, entre outros",
    role: "Desenvolvedor Backend",
    contribution: [
      'Correção do tratamento dos campos do cadastro de propriedades',
      'Implementação dos detalhes e consequentes cálculos dos terrenos/glebas',
      'Desenvolvimento da primeira versão da tela de cálculos das propriedades',
      'Exportação de PDFs relacionados a cada tela do cadastro de insumos/ferramentas, etc.'
    ]
  },
  {
    name: "Clickpetroleo",
    categories: ["Vagas de Emprego","Notícias"],
    technologies: ["Node.js", "TypeOrm", "PostgreSQL", "Redis"],
    description: "Plataforma de notícias e divulgação de vagas, integrada com wordpress em paralelo",
    role: "Desenvolvedor Backend",
    contribution: [
      'Desenvolvimento dos cadastros dos usuários, vagas e notícias',
      'Integração de links de anúncios Google Ads e adMob, inserindo banners no conteúdo das noticias na listagem, por configuração do administrador',
      'Integração com API do wordpress para replicação dos conteúdos das notícias'
    ]
  },
  {
    name: "Booat",
    categories: ["Mobilidade", "Geolocalização"],
    technologies: ["Node.js", "TypeOrm", "PostgreSQL", "PostGIS", "Redis"],
    description: "Plataforma auxiliar de donos de barcos, ",
    role: "Desenvolvedor Backend",
    contribution: [
      'Adição de login por código via whatsapp para os usuários finais',
      'Adição de campos nos cadastros de estabelecimentos e alertas',
      'Integração de informações do Google Places API nos estabelecimentos',
      'Otimização dos endpoints de filtragem por distância, substituindo calculo javascript por queries PostGIS'
    ]
  },
  {
    name: "Vagoo",
    categories: ["Transporte", "Delivery"],
    technologies: ["Node.js", "TypeOrm", "PostgreSQL", "Redis"],
    description: "Sistema de solicitação de transporte de cargas",
    role: "Desenvolvedor Backend",
    contribution: [
      'Alterações no cadastro dos veículos',
      'Implementação de socket.io para acompanhamento da busca por veículos por parte do usuário embarcador',
      'Correção e otimização da query de busca de motoristas, sendo esse meu primeiro contato com postGIS'
    ]
  },
];
