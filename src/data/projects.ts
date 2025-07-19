import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'MedTriagem - Sistema de Triagem (versão nova)',
    description: 'Aplicação web full-stack desenvolvida para automatizar triagens médicas com base em sintomas, priorizar agendamentos por gravidade e manter histórico clínico dos pacientes. Projeto visa reduzir o tempo de espera e melhorar a eficiência no atendimento.',
    image: './imagens/login01.PNG',
    tags: ['React', 'Node.js', 'Prisma ORM', 'PostgreSQL', 'Tailwind CSS'],
    repoUrl: 'https://github.com/valdeircesario/MedTriagem',
    demoImages: [
      './imagens/cadastro.PNG',
      './imagens/admin01.PNG',
      './imagens/admin03.PNG',
      './imagens/user01.PNG'
    ],
    features: [
      'Sistema de triagem automatizada baseado em sintomas',
      'Priorização inteligente de agendamentos por gravidade',
      'Histórico clínico completo dos pacientes',
      'Interface responsiva e intuitiva',
      'Relatórios de atendimento em tempo real'
    ]
  },
  {
    id: 2,
    title: 'Sistema de Triagem de Pacientes',
    description: 'Aplicação full-stack para priorização de atendimentos em unidades de saúde, com cadastro, classificação e agendamento inteligente. Reduziu o tempo de espera e melhorou a gestão médica.',
    image: './imagens/home.png',
    tags: ['Angular', 'Quarkus', 'Java', 'PostgreSQL', 'Docker'],
    repoUrl: 'https://github.com/valdeircesario/Sistema-de-triagem',
    demoImages: [
      './imagens/cadastrar.png',
      './imagens/admin.png',
      './imagens/user.png'
    ],
    features: [
      'Classificação automática de prioridade médica',
      'Sistema de agendamento inteligente',
      'Dashboard para gestão de filas',
      'Integração com sistemas hospitalares',
      'Notificações em tempo real'
    ]
  },
  {
    id: 3,
    title: 'Portfólio Pessoal (React)',
    description: 'Portfólio responsivo criado com React, utilizando componentes reutilizáveis para organizar e apresentar projetos de forma escalável e profissional.',
    image: './imagens/001.png',
    tags: ['React', 'HTML', 'CSS'],
    repoUrl: 'https://github.com/valdeircesario/Portfolio-VS',
    demoUrl: 'https://portfoliovcs.netlify.app/',
    demoImages: [
      './imagens/002.png',
      './imagens/003.png',
      './imagens/004.png',
      './imagens/005.png'
    ],
    features: [
      'Design responsivo e moderno',
      'Componentes React reutilizáveis',
      'Animações suaves e interativas',
      'SEO otimizado',
      'Performance otimizada'
    ]
  },
  {
    id: 4,
    title: 'E-commerce Azalleia (Moda Feminina)',
    description: 'Loja virtual com catálogo interativo, busca de produtos e integração com WhatsApp para pedidos. Foco em experiência de usuário e design responsivo.',
    image: './imagens/azzaleia01.png',
    tags: ['React', 'JavaScript', 'CSS'],
    repoUrl: 'https://github.com/valdeircesario/Azalleia_Moda_Feminina',
    demoImages: [
      './imagens/azzaleia02.png',
      './imagens/azzaleia03.png',
      './imagens/azzaleia04.png',
      './imagens/azzaleia05.png'
    ],
    features: [
      'Catálogo de produtos interativo',
      'Sistema de busca avançada',
      'Integração com WhatsApp Business',
      'Carrinho de compras funcional',
      'Design responsivo para mobile'
    ]
  },
  {
    id: 5,
    title: 'AppComparaTudo',
    description: 'Aplicativo Java que permite comparar objetos com base em critérios definidos. Explora conceitos de lógica de programação, banco de dados e interação com usuário.',
    image: './imagens/Captura de Tela (85).png',
    tags: ['Java', 'SQL', 'PostgreSQL'],
    repoUrl: 'https://github.com/valdeircesario/AppComparaTudo',
    demoImages: [
      './imagens/Captura de Tela (86).png',
      './imagens/Captura de Tela (84).png',
      './imagens/Captura de Tela (85).png'
    ],
    features: [
      'Algoritmos de comparação personalizáveis',
      'Interface gráfica intuitiva',
      'Persistência de dados em PostgreSQL',
      'Relatórios de comparação detalhados',
      'Arquitetura MVC bem estruturada'
    ]
  },
  {
    id: 6,
    title: 'Portfólio HTML/CSS (Versão Básica)',
    description: 'Página pessoal criada com HTML e CSS puro, apresentando trajetória acadêmica, habilidades e projetos de forma simples e objetiva.',
    image: './imagens/portifolio01.png',
    tags: ['HTML', 'CSS'],
    repoUrl: 'https://github.com/valdeircesario/MeuPortfolio-html',
    demoImages: [
      './imagens/portifolio02.png',
      './imagens/portifolio03.png',
      './imagens/portfolio04.png'
    ],
    features: [
      'HTML semântico e acessível',
      'CSS puro com animações',
      'Layout responsivo',
      'Formulário de contato funcional',
      'Otimização para SEO'
    ]
  }
];