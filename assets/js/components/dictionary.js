export const dictionary = {
  translate(word, lang) {
    if (!dictionary[word]) return word;
    return dictionary[word][lang];
  },

  home: ["Home", "Home", "Inicio"],
  sobre: ["Sobre", "About", "Sobre"],
  contato: ["Contato", "Contact", "Contacto"],
  bemVindoAoMeuPortfolio: [
    "Bem-vindo ao meu Portfolio",
    "Welcome to my Portfolio",
    "Bienvenido a mi Portafolio",
  ],
  conhecaMeuTrabalhoEProjetos: [
    "Conheça Meu Trabalho e Projetos",
    "Check out my Work and Projects",
    "Conoce mi Trabajo y Proyectos",
  ],
  esteEhMeuPortfolioOnline: [
    "Este é o meu portfólio online, onde apresento um pouco sobre mim, meus projetos e formas de contato. Aqui, você pode explorar meu trabalho, conhecer minhas habilidades e acessar meus repositórios no GitHub.",
    "This is my online portfolio, where I present a little about myself, my projects, and contact information. Here, you can explore my work, learn about my skills, and access my repositories on GitHub.",
    "Este es mi portafolio en línea, donde presento un poco sobre mí, mis proyectos y formas de contacto. Aquí, puedes explorar mi trabajo, conocer mis habilidades y acceder a mis repositorios en GitHub.",
  ],
  explorar: ["Explorar", "Explore", "Explorar"],
  sobreMim: ["Sobre mim", "About me", "Sobre mí"],
  olamEuSouVinicius: [
    "Olá! Sou Vinicius Rodrigues, Desenvolvedor Full Stack JavaScript. Minha trajetória profissional começou em áreas administrativas, onde desenvolvi habilidades como organização, trabalho em equipe e comunicação. No entanto, meu verdadeiro interesse sempre foi a tecnologia. Atualmente, estou finalizando minha graduação em Análise e Desenvolvimento de Sistemas e me especializando em Back-End com NestJS. Busco aprimorar minhas habilidades e encarar novos desafios no desenvolvimento web.",
    "Hello! I am Vinicius Rodrigues, a Full Stack JavaScript Developer. My professional journey began in administrative areas, where I developed skills such as organization, teamwork, and communication. However, my true interest has always been technology. Currently, I am finishing my degree in Systems Analysis and Development and specializing in Back-End with NestJS. I am looking to improve my skills and take on new challenges in web development.",
    "¡Hola! Soy Vinicius Rodrigues, Desarrollador Full Stack JavaScript. Mi trayectoria profesional comenzó en áreas administrativas, donde desarrollé habilidades como organización, trabajo en equipo y comunicación. Sin embargo, mi verdadero interés siempre fue la tecnología. Actualmente, estoy terminando mi carrera en Análisis y Desarrollo de Sistemas y especializándome en Back-End con NestJS. Busco mejorar mis habilidades y afrontar nuevos desafíos en el desarrollo web.",
  ],
  seguidores: ["Seguidores", "Followers", "Seguidores"],
  repositorios: ["Repositórios", "Repositories", "Repositorios"],
  contateMe: ["Contate-me", "Contact me", "Contáctame"],
  estouSempreAberto: [
    "Estou sempre aberto a novas conexões, oportunidades e colaborações. Se quiser trocar ideias sobre tecnologia, conhecer mais sobre meus projetos ou simplesmente bater um papo, entre em contato comigo pelas redes abaixo!",
    "I am always open to new connections, opportunities, and collaborations. If you want to exchange ideas about technology, learn more about my projects, or simply chat, get in touch with me through the social media links below!",
    "Siempre estoy abierto a nuevas conexiones, oportunidades y colaboraciones. Si quieres intercambiar ideas sobre tecnología, conocer más sobre mis proyectos o simplemente charlar, ¡ponte en contacto conmigo a través de las redes sociales a continuación!",
  ],
  nome: ["Nome", "Name", "Nombre"],
  assunto: ["Assunto", "Subject", "Asunto"],
  mensagem: ["Mensagem", "Message", "Mensaje"],
  enviar: ["Enviar", "Send", "Enviar"],
  feitoPorViniciusRodrigues: [
    "Feito por Vinicius Rodrigues",
    "Made by Vinicius Rodrigues",
    "Hecho por Vinicius Rodrigues",
  ],
};
