const PAGE_META = {
  '/': {
    EN: {
      title: 'Simón Ibalo — UX/UI Engineer',
      description:
        'UX/UI Engineer with 9+ years building web interfaces and 5 years with React. Projects, track record, and recommendations.',
    },
    ES: {
      title: 'Simón Ibalo — Ingeniero UX/UI',
      description:
        'Ingeniero UX/UI con más de 9 años en interfaces web y 5 con React. Proyectos, trayectoria y recomendaciones de colegas.',
    },
  },
  '/projects': {
    EN: {
      title: 'Projects — Simón Ibalo',
      description:
        'Featured product stories, live demos, and case studies from UX/UI and front-end work with React.',
    },
    ES: {
      title: 'Proyectos — Simón Ibalo',
      description:
        'Historias de producto, demos en vivo y casos de estudio de trabajo UX/UI y front-end con React.',
    },
  },
  '/track-record': {
    EN: {
      title: 'Track Record — Simón Ibalo',
      description:
        'Professional experience across companies, roles, and the skills gained in each position.',
    },
    ES: {
      title: 'Trayectoria — Simón Ibalo',
      description:
        'Experiencia profesional en distintas empresas, roles y aprendizajes en cada etapa.',
    },
  },
  '/testimonial': {
    EN: {
      title: 'Recommendations — Simón Ibalo',
      description:
        'What colleagues say about working with Simón Ibalo on product, UX, and engineering teams.',
    },
    ES: {
      title: 'Recomendaciones — Simón Ibalo',
      description:
        'Lo que dicen colegas sobre trabajar con Simón Ibalo en equipos de producto, UX e ingeniería.',
    },
  },
};

export const getPageMeta = (pathname, siteLang) => {
  const lang = siteLang === 'ES' ? 'ES' : 'EN';
  const routeMeta = PAGE_META[pathname];

  if (routeMeta == null) {
    return PAGE_META['/'][lang];
  }

  return routeMeta[lang] == null ? routeMeta.EN : routeMeta[lang];
};
