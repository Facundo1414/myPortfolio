let info = {
  hero: {
    primerSubtitulo: "PORTFOLIO 2026",
    tituloPrincipal: "FULL STACK DEVELOPER",
    segundoSubitulo:
      "Hola, soy Facundo Allende. Desarrollo soluciones digitales que generan impacto real.",
    btnText: "Ver Proyectos",
  },
  aboutme: {
    title: "Sobre mí",
    mainText:
      ", un apasionado desarrollador web Full Stack con experiencia en proyectos empresariales en producción. Me especializo en TypeScript, Next.js y arquitecturas de microservicios. Mi enfoque en la resolución de problemas me motiva a buscar continuamente nuevas tecnologías y mejores prácticas. Con sólidos conocimientos en desarrollo frontend y backend, estoy listo para transformar ideas en productos digitales de alto impacto. ¡Construyamos algo grandioso juntos!",
    subtitle: "Datos Personales",
    englishL: "Inglés - Avanzado B2-C1",
    spanishL: "Español - Nativo C2",
    educacion: [
      {
        institute: "Digital House",
        degree: "Full Stack Tech Developer",
        period: "AGOSTO 2022 - JULIO 2024",
      },
      {
        institute: "Universidad Nacional De Córdoba",
        degree: "Curso De Inglés",
        period: "MARZO 2021 - JUNIO 2024",
      },
      {
        institute: "UTN",
        degree: "Ingeniería En Sistemas De Información",
        period: "MARZO 2020 - JUNIO 2022",
      },
    ],
  },
  skillsUse: [
    { name: "ts" },
    { name: "nextjs" },
    { name: "react" },
    { name: "nodejs" },
    { name: "tailwind" },
    { name: "postgres" },
    { name: "docker" },
    { name: "git" },
    { name: "github" },
    { name: "vscode" },
    { name: "figma" },
    { name: "postman" },
  ],
  skillsKnown: [
    { name: "java" },
    { name: "spring" },
    { name: "aws" },
    { name: "terraform" },
    { name: "nestjs" },
    { name: "prisma" },
    { name: "mongodb" },
    { name: "redis" },
    { name: "jest" },
    { name: "cypress" },
    { name: "graphql" },
    { name: "threejs" },
    { name: "sass" },
    { name: "materialui" },
    { name: "bash" },
    { name: "linux" },
    { name: "nginx" },
    { name: "vercel" },
  ],

  navItems: [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Sobre mi",
      link: "#aboutme-section",
    },
    {
      name: "Skills",
      link: "#skills-section",
    },
    {
      name: "Proyectos",
      link: "#proyectos-section",
    },
    {
      name: "Contacto",
      link: "#contact-section",
    },
  ],

  proyectos: {
    borvex: {
      title: "BORVEX",
      description: "Software a medida, comercio digital e integraciones para empresas",
      extraDetail:
        "Nueva versión del sitio de BORVEX Software Studio, dedicada a presentar sus servicios de desarrollo de software, comercio digital e integraciones.",
      demo: "https://bovex-dev.vercel.app",
      imageUrl: "/images/proyectos/borvex-preview.png",
      github: null,
      status: "En Producción",
      technologies: ["Next.js", "React", "TypeScript"],
      projectImages: ["/images/proyectos/borvex-preview.png"],
    },
    aceroVeta: {
      title: "Acero & Veta",
      description: "Catálogo de muebles y presupuestos a medida",
      extraDetail:
        "Sitio en producción con catálogo administrable y un flujo para solicitar presupuestos de muebles a medida.",
      demo: "https://acero-veta.vercel.app",
      imageUrl: "/images/proyectos/acero-veta-preview.png",
      github: null,
      status: "En Producción",
      technologies: ["Next.js", "React", "TypeScript"],
      projectImages: ["/images/proyectos/acero-veta-preview.png"],
    },
    marketingEngine: {
      title: "Marketing Engine",
      description: "Motor editorial para generar y revisar contenido de varias marcas",
      extraDetail:
        "Primera fase en desarrollo: permite cargar contexto y fuentes, generar propuestas de texto y aprobarlas, editarlas o rechazarlas. Todavía no publica contenido ni tiene una demo pública.",
      demo: null,
      imageUrl: "/images/proyectos/marketing-engine-preview.png",
      github: null,
      status: "En Desarrollo",
      technologies: ["Next.js", "React", "TypeScript", "Supabase"],
      projectImages: ["/images/proyectos/marketing-engine-preview.png"],
    },
    evoTradingLab: {
      title: "Evo Trading Lab",
      description: "Laboratorio de investigación y validación de estrategias de trading",
      extraDetail:
        "Proyecto en desarrollo para estudiar datos históricos, evaluar estrategias y generar señales explicables. Su alcance inicial no ejecuta operaciones reales y todavía no ofrece una demo pública.",
      demo: null,
      imageUrl: "/images/proyectos/evo-trading-lab-preview.png",
      github: null,
      status: "En Desarrollo",
      technologies: ["Next.js", "NestJS", "Python", "PostgreSQL"],
      projectImages: ["/images/proyectos/evo-trading-lab-preview.png"],
    },
    aqua: {
      title: "AQUA - Sistema de Gestión de Deudas",
      description:
        "Plataforma empresarial para gestión de deudas de clientes de Aguas Cordobesas",
      extraDetail:
        "Sistema completo desarrollado para la empresa Cclip, en producción y uso activo. Incluye verificación automatizada de deudas mediante web scraping, base de datos completa por usuario con gestión de clientes, envío automatizado de comprobantes de pago e intimaciones legales por WhatsApp, y múltiples funcionalidades de administración. Stack: TypeScript, Next.js, Node.js, PostgreSQL, integración con WhatsApp Business API. Arquitectura de microservicios con repositorio principal y worker independiente para mensajería.",
      demo: "https://frontaquav2-production.up.railway.app/landing",
      imageUrl: "/images/proyectos/aguasCba.png",
      github: null,
      status: "En Producción",
      technologies: [
        "TypeScript",
        "Next.js",
        "Node.js",
        "PostgreSQL",
        "WhatsApp API",
        "Web Scraping",
      ],
      projectImages: ["/images/proyectos/aguasCba.png"],
    },
    cbavapes: {
      title: "CbaVapes - E-commerce Completo",
      description:
        "Plataforma de e-commerce con gestión de múltiples canales de venta",
      extraDetail:
        "E-commerce completo con sistema de stock centralizado y controlado para 3 puntos de venta: minorista, mayorista y dropshipping. Integración con Mercado Pago para procesamiento de pagos, sistema de cadetería para delivery, panel de administración completo, gestión de inventario en tiempo real y reportes de ventas. Actualmente en desarrollo para versión 2.0 (Cbavapx) con mejoras de arquitectura y funcionalidades extendidas.",
      demo: "https://cbavapx.vercel.app",
      imageUrl: "/images/proyectos/cbavapx.webp",
      github: "https://github.com/Facundo1414/cbavapes",
      status: "V1 Producción / V2 En Desarrollo",
      technologies: [
        "TypeScript",
        "Next.js",
        "React",
        "Tailwind CSS",
        "Mercado Pago API",
        "PostgreSQL",
      ],
      projectImages: [],
    },
    rentstudio: {
      title: "Rent Studio",
      description: "App para renta de servicios y equipos fotográficos",
      extraDetail:
        "El proyecto se llevó a cabo utilizando la metodología SCRUM a lo largo de 4 sprints, con una duración de 14 días cada uno. La aplicación fue desarrollada principalmente con Spring Boot en Java, ReactJS y Tailwind CSS, además de integrar bibliotecas como MUI. Mi rol en este proyecto fue de Fullstack Developer y Scrum Master. Lideré al equipo, asegurando que cada miembro alcanzara su máximo potencial y que las tareas se organizaran eficientemente dentro del tiempo disponible.",
      demo: null,
      imageUrl: "/images/DH/logoRS.png",
      github: "https://github.com/orgs/1774-ProyectoIntegrador/repositories",
      status: "Completado",
      technologies: ["Java", "Spring Boot", "React", "Tailwind CSS", "MUI"],
      projectImages: [
        "/images/DH/homeRS.png",
        "/images/DH/nuevoProductoRS.png",
        "/images/DH/adminDbRS.png",
        "/images/DH/reservaRS.png",
      ],
    },
    ncwinds: {
      title: "NC Winds",
      description: "Booking de vuelos internacionales",
      extraDetail:
        "El proyecto se llevó a cabo utilizando la metodología SCRUM a lo largo de 4 sprints, con una duración de 7 días cada uno. La aplicación fue desarrollada principalmente con Spring Boot en Java y ReactJS, además de integrar bibliotecas como MUI. Mi rol en este proyecto fue de FrontEnd Developer y Scrum Master. Lideré al equipo, asegurando que cada miembro alcanzara su máximo potencial y que las tareas se organizaran eficientemente dentro del tiempo disponible.",
      demo: "https://ncwindsfrontend.vercel.app",
      imageUrl: "/images/NC/miniatura.png",
      github: null,
      status: "Completado",
      technologies: ["Java", "Spring Boot", "React", "MUI"],
      projectImages: [
        "/images/NC/homeNCW.png",
        "/images/NC/worldNCW.png",
        "/images/NC/loginNCW.png",
        "/images/NC/searchNCW.png",
        "/images/NC/seatsNCW.png",
      ],
    },
    canchasReserva: {
      title: "Sistema de Reservas de Canchas",
      description: "Plataforma de gestión de canchas de fútbol en Córdoba",
      extraDetail:
        "Proyecto enfocado en modernizar la gestión de canchas de fútbol que actualmente operan vía WhatsApp. La plataforma permitirá a clientes y propietarios gestionar reservas de manera eficiente, con calendario interactivo, disponibilidad en tiempo real, sistema de pagos integrado y panel de administración para dueños de canchas. Stack moderno con Next.js, TypeScript y base de datos relacional.",
      demo: null,
      imageUrl: "/images/proyectos/canchaReserva.avif",
      github: null,
      status: "En Desarrollo",
      technologies: [
        "TypeScript",
        "Next.js",
        "React",
        "Tailwind CSS",
        "PostgreSQL",
      ],
      projectImages: ["/images/proyectos/canchaReserva.avif"],
    },
    meetingApp: {
      title: "Meeting App - Plataforma de Reuniones",
      description:
        "Aplicación para gestión y organización de reuniones virtuales",
      extraDetail:
        "Plataforma moderna desarrollada con TypeScript y tecnologías de última generación para facilitar la coordinación de reuniones. Incluye funcionalidades de programación, notificaciones y gestión de participantes. Arquitectura escalable con enfoque en la experiencia de usuario.",
      demo: "https://meeting-app-gamma-eight.vercel.app/landing",
      imageUrl: "/images/proyectos/meetingapp.png",
      github: "https://github.com/Facundo1414/meeting-app",
      status: "En Producción",
      technologies: ["TypeScript", "Next.js", "React", "Tailwind CSS"],
      projectImages: ["/images/proyectos/meetingapp.png"],
    },
    clinicaOdontologica: {
      title: "Sistema de Clínica Odontológica",
      description:
        "Sistema de gestión para clínicas odontológicas con Spring Boot",
      extraDetail:
        "Mini proyecto realizado con Spring Boot en Java. Implementación completa utilizando MAVEN, Spring Boot Security para autenticación, JPA para persistencia de datos, Log4j para logging, MySQL como base de datos, Lombok para reducir boilerplate code, y JUnit para testing. El sistema permite gestionar pacientes, citas, tratamientos y personal de la clínica.",
      demo: null,
      imageUrl: "",
      github: "https://github.com/Facundo1414/spring-clinicaOdontologica",
      status: "Completado",
      technologies: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "JPA",
        "MySQL",
        "JUnit",
      ],
      projectImages: [],
    },
    springEcommerce: {
      title: "E-commerce con Spring Boot",
      description: "Plataforma de comercio electrónico desarrollada con Java",
      extraDetail:
        "Mi primer e-commerce desarrollado con Spring Boot en Java. Proyecto de aprendizaje que incluye funcionalidades básicas de carrito de compras, gestión de productos, autenticación de usuarios y procesamiento de pedidos. Arquitectura MVC con separación clara de responsabilidades.",
      demo: null,
      imageUrl: "",
      github: "https://github.com/Facundo1414/spring-ecommerce",
      status: "Completado",
      technologies: ["Java", "Spring Boot", "JPA", "MySQL", "Thymeleaf"],
      projectImages: [],
    },
  },
};

export default info;
