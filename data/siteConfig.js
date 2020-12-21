module.exports = {
  siteTitle: 'Currículo, Elton!',
  siteDescription: `Currículo de Elton Fernando Doehnert`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Elton Fernando Doehnert',
  twitterUsername: '_franciscodf',
  githubUsername: 'Doehnert',
  authorAvatar: '/images/avatar.jpeg',
  authorDescription: `Desenvolvedor Web Full-Stack com conhecimentos em <strong>Python-Django, PHP e React</strong>, mestrado na área de engenharia computacional.
    Atualmente atuando em desenvolvimento frontend com <strong>Javascript e React</strong>`,

  skills: [
    {
      name: 'HTML',
      level: 100,
    },
    {
      name: 'CSS',
      level: 100,
    },
    {
      name: 'Javascript',
      level: 100,
    },
    {
      name: 'Django',
      level: 60,
    },
    {
      name: 'React',
      level: 80,
    },
    {
      name: 'Git',
      level: 80,
    },
    {
      name: 'PHP',
      level: 60,
    },
    {
      name: 'Python',
      level: 70,
    },
    {
      name: 'Pandas',
      level: 50,
    },
    /* more skills here */
  ],
  jobs: [
    /* more jobs here */
    {
      company: 'Vexpro',
      begin: {
        month: 'out',
        year: '2019',
      },
      duration: null,
      occupation: 'Desenvolvedor PHP',
      description: 'Criação de módulos para framework de e-commerce Magento',
    },
    {
      company: 'UFPR',
      begin: {
        month: 'mar',
        year: '2018',
      },
      duration: null,
      occupation: 'Mestrando PPGMNE',
      description: 'Pesquisas na área de mecânica computacional',
    },
  ],
  portifolio: [
    {
      image: '/images/404.jpeg',
      description: 'Em desenvolvimento',
      url: '#',
    },
    /* more portifolio items here */
  ],
  social: {
    // twitter: 'https://twitter.com/_franciscodf',
    linkedin: 'www.linkedin.com/in/elton-doehnert-44093927',
    github: 'https://github.com/Doehnert',
    email: 'eltonfd@gmail.com',
  },
  siteUrl: 'https://santosfrancisco.github.io/gatsbystarter-cv',
  pathPrefix: '/curriculo', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: 'UA-42331715-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  fontColor: '#000000cc',
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Portifolio',
      url: '/portifolio',
    },
  ],
}
