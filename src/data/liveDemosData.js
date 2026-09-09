export const liveDemosSectionHeadline = {
    EN: 'Some demos',
    ES: 'Algunas demos',
};

export const demoReadyClosing = {
    EN: 'When the demo finishes loading, you can press View demo to open it.',
    ES: 'Cuando termine de cargar la demo, podés presionar View demo para verla.',
};

export const liveDemosData = [
    {
        id: 'myhero',
        name: {
            EN: 'My Hero Academia',
            ES: 'My Hero Academia',
        },
        summary: {
            EN: [
                'This project is a promotional landing for My Hero Academia: The Strongest Hero. The goal was to present the game, showcase characters and media, and drive downloads.',
                'I built it as a static site with HTML, CSS, and JavaScript, fully responsive, with a design that demands a lot of visual detail. I used Swiper, Owl Carousel, Bootstrap 4, and jQuery for navigation, animations, and interaction.',
                'In short: marketing front-end for a game, focused on UI, responsive layout, and a carefully crafted look, with no backend.',
            ],
            ES: [
                'Este proyecto es una landing promocional para My Hero Academia: The Strongest Hero. El objetivo era presentar el juego, mostrar personajes y media, y llevar a la descarga.',
                'Lo armé como sitio estático en HTML, CSS y JavaScript, full responsive, con un diseño que pide bastante detalle visual. Usé Swiper, Owl Carousel, Bootstrap 4 y jQuery para la navegación, las animaciones y la interacción.',
                'En resumen: front-end de marketing para un juego, con foco en UI, responsive y un look muy cuidado, sin backend.',
            ],
        },
        techStack: [
            'HTML5',
            'CSS3',
            'JavaScript',
            'jQuery 3.6',
            'Bootstrap 4',
            'Swiper',
            'Owl Carousel',
        ],
        featuredImageUrl: `${process.env.PUBLIC_URL}/assets/live-projects/myhero/images/MHATSH_logo_dark_final.png`,
        demoUrl: `${process.env.PUBLIC_URL}/assets/live-projects/myhero/index.html`,
        cardTooltip: {
            EN: 'Promotional landing for a videogame · HTML5 + JS + CSS3 🥷',
            ES: 'Landing promocional para videogame · HTML5 + JS + CSS3 🥷',
        },
    },
    {
        id: 'olympics-game-jam',
        name: {
            EN: 'Olympics Games Jam',
            ES: 'Olympics Games Jam',
        },
        summary: {
            EN: [
                'Product-page prototype for Olympic Games Jam: Beijing 2022, a play-to-earn party game with an official license from the International Olympic Committee.',
                'I worked with React.js and was responsible for developing the user interface.',
            ],
            ES: [
                'Prototipo de página de producto para Olympic Games Jam: Beijing 2022, un party game play-to-earn con licencia oficial del Comité Olímpico Internacional.',
                'Trabajé con React Js, y fui responsable del desarrollo de la interfaz de usuario.',
            ],
        },
        techStack: [
            'React',
            'JavaScript',
            'CSS3',
            'BEM',
            'Figma',
            'HTML 5',
        ],
        featuredImageUrl: `${process.env.PUBLIC_URL}/assets/live-projects/olympics-game-jam/assets/images/olympic-jam-game-logo.png`,
        demoUrl: `${process.env.PUBLIC_URL}/assets/live-projects/olympics-game-jam/index.html`,
        cardTooltip: {
            EN: 'Promotional landing for a videogame · ReactJS ⛷️',
            ES: 'Landing promocional para videogame · ReactJS ⛷️',
        },
    },
    {
        id: 'box-opening',
        name: {
            EN: 'Unboxing WOW Experience',
            ES: 'Unboxing WOW Experience',
        },
        summary: {
            EN: [
                'The International Olympic Committee developed a collectible NFT platform based on digital pins from Olympic Games throughout history.',
                'At this stage of the project, several different box types had already sold out. None of them could be opened yet: when you open a box with NFTs, the blockchain is written in real time.',
                'The project needed a set of interactions that reflected the process of opening an NFT box.',
                'I created this prototype to propose a box-opening flow that was later refined and shipped to production.',
                'The prototype orchestrates timing, video, imagery, and mouse events to simulate a box opening with a 3D feel—keeping each step of the flow in sync so the reveal feels continuous and believable.',
            ],
            ES: [
                'El Comité Olímpico Internacional desarrolló una plataforma de NFT coleccionables basados en pins digitales de los Juegos Olímpicos de todos los tiempos.',
                'En este punto del proyecto ya se habían vendido hasta agotar varios tipos de cajas diferentes. Ninguna podía abrirse todavía: cuando abrís una caja con NFTs, la blockchain se escribe en tiempo real.',
                'El proyecto requería una serie de interacciones que reflejaran el proceso de abrir una caja con NFTs.',
                'Para ello creé este prototipo, proponiendo un flujo de apertura de cajas que luego fue refinado y puesto en producción.',
                'El prototipo orquesta tiempos, videos, imágenes y eventos del mouse para simular una apertura con sensación 3D: cada paso del flujo queda sincronizado para que el reveal se sienta continuo y creíble.',
            ],
        },
        techStack: [
            'HTML5',
            'CSS3',
            'JavaScript',
            'Materialize CSS',
            'Video',
            'Interaction Design',
            'UX',
            'Animation',
            'UX Design',
        ],
        featuredImageUrl: `${process.env.PUBLIC_URL}/assets/live-projects/box-opening/assets/images/featured-pin.png`,
        demoUrl: `${process.env.PUBLIC_URL}/assets/live-projects/box-opening/index.html`,
        cardTooltip: {
            EN: 'NFT pins unboxing · HTML + JS + CSS3 + media sync 🏅',
            ES: 'NFT pins unboxing · HTML + JS + CSS3 + media sync 🏅',
        },
    },
    {
        id: 'alphaverse',
        name: {
            EN: 'Alphaverse',
            ES: 'Alphaverse',
        },
        summary: {
            EN: [
                'This project is a promotional landing for AlphaVerse, a metaverse that connects multiple universes. The goal was to present the hub, showcase features, roadmap, partners, and pre-sales, and drive registration.',
                'I built it with Angular 15, TypeScript, and SCSS, fully responsive, with a design that demands a lot of visual detail. I used ngx-owl-carousel-o, Animate.css, Angular Animations, RxJS, and jQuery for carousels, animations, and interaction.',
                'In short: marketing front-end for a metaverse, focused on UI, responsive layout, and a carefully crafted look, with no backend.',
            ],
            ES: [
                'Este proyecto es una landing promocional para AlphaVerse, un metaverso que conecta varios universos. El objetivo era presentar el hub, mostrar features, roadmap, partners y preventas, y llevar al registro.',
                'Lo armé en Angular 15, TypeScript y SCSS, full responsive, con un diseño que pide bastante detalle visual. Usé ngx-owl-carousel-o, Animate.css, Angular Animations, RxJS y jQuery para los carruseles, las animaciones y la interacción.',
                'En resumen: front-end de marketing para un metaverso, con foco en UI, responsive y un look muy cuidado, sin backend.',
            ],
        },
        techStack: [
            'Angular 15',
            'TypeScript',
            'SCSS',
            'RxJS',
            'ngx-owl-carousel-o',
            'Animate.css',
            'jQuery',
        ],
        featuredImageUrl: `${process.env.PUBLIC_URL}/assets/live-projects/alphaverse/assets/logos/logo.svg`,
        demoUrl: `${process.env.PUBLIC_URL}/assets/live-projects/alphaverse/index.html`,
        cardTooltip: {
            EN: 'Promotional landing for a videogame · Angular 15 🌌',
            ES: 'Landing promocional para videogame · Angular 15 🌌',
        },
    },
    {
        id: 'ftcc',
        name: {
            EN: 'Food Truck Coin Club',
            ES: 'Food Truck Coin Club',
        },
        summary: {
            EN: [
                'Product-page prototype for Food Truck Coin Club — an NFT membership collection of unique food trucks and lands, packaged as a standalone Angular build.',
            ],
            ES: [
                'Prototipo de página de producto para Food Truck Coin Club: colección NFT de food trucks y lands con membresía, empaquetado como build Angular independiente.',
            ],
        },
        techStack: [
            'Angular',
            'TypeScript',
            'HTML5',
            'CSS3',
        ],
        featuredImageUrl: `${process.env.PUBLIC_URL}/assets/live-projects/ftcc/assets/logos/food-truck-logo-big.png`,
        demoUrl: `${process.env.PUBLIC_URL}/assets/live-projects/ftcc/index.html`,
        cardTooltip: {
            EN: 'Promotional landing for a videogame · Angular 15 🌭',
            ES: 'Landing promocional para videogame · Angular 15 🌭',
        },
    },
    {
        id: 'daas-website',
        name: {
            EN: 'DAAS Website',
            ES: 'Sitio DAAS',
        },
        summary: {
            EN: [
                'Corporate site prototype for a software consulting brand — hero, services, and content sections showcasing scalable solutions and best practices.',
                'Just an other Landing Page, with a simple and clean design based on Bahaus styles.',
            ],
            ES: [
                'Prototipo de sitio corporativo para una marca de consultoría de software: hero, servicios y secciones de contenido sobre soluciones escalables y buenas prácticas.',
                'Otra landing page más, con un diseño simple y limpio basado en estilos Bauhaus.',
            ],
        },
        techStack: [
            'HTML5',
            'CSS3',
            'JavaScript',
        ],
        featuredImageUrl: `${process.env.PUBLIC_URL}/assets/live-projects/daas-website/assets/images/hero-section-featured-image.avif`,
        demoUrl: `${process.env.PUBLIC_URL}/assets/live-projects/daas-website/index.html`,
        cardTooltip: {
            EN: 'Just another landing one-page with Bahaus style 🎨',
            ES: 'Solo otra landing one page estilo Bauhaus 🎨',
        },
    },
];
