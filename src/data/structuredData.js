import { entityProfile } from './entityProfile.js';
import { faqItems } from './faqContent.js';
import { featuredProjectsData } from './projectsData.js';

const getLocalizedField = (field, lang) => {
  if (field == null) {
    return '';
  }

  const localized = field[lang];

  return localized == null ? field.EN : localized;
};

const buildFaqEntities = (lang) => {
  return faqItems.map((item) => ({
    '@type': 'Question',
    name: getLocalizedField(item.question, lang),
    acceptedAnswer: {
      '@type': 'Answer',
      text: getLocalizedField(item.answer, lang),
    },
  }));
};

const buildFeaturedProjectList = (lang) => {
  const listItems = featuredProjectsData.map((project, index) => {
    const description = project.projectShortDescription == null
      ? ''
      : getLocalizedField(project.projectShortDescription, lang);

    return {
      '@type': 'ListItem',
      position: index + 1,
      name: project.projectName,
      description: description,
      url: entityProfile.canonicalSite.replace(/\/$/, '') + '/projects',
    };
  });

  return {
    '@type': 'ItemList',
    '@id': entityProfile.canonicalSite + '#featured-projects',
    name: lang === 'ES' ? 'Proyectos destacados del portfolio' : 'Featured portfolio projects',
    itemListElement: listItems,
  };
};

export const buildStructuredData = (lang) => {
  const schemaLang = lang === 'ES' ? 'ES' : 'EN';
  const siteUrl = entityProfile.canonicalSite;
  const siteUrlBase = siteUrl.replace(/\/$/, '');
  const personId = siteUrl + '#person';
  const websiteId = siteUrl + '#website';
  const profileId = siteUrl + '#profile';

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': personId,
        name: entityProfile.fullName,
        alternateName: entityProfile.alternateName,
        jobTitle: getLocalizedField(entityProfile.jobTitle, schemaLang),
        description: getLocalizedField(entityProfile.descriptionLong, schemaLang),
        url: siteUrl,
        sameAs: entityProfile.sameAs,
        knowsAbout: entityProfile.primarySkills,
        workLocation: {
          '@type': 'Place',
          name: getLocalizedField(entityProfile.location, schemaLang),
        },
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: siteUrl,
        name: getLocalizedField(entityProfile.fullName, schemaLang) + ' — ' + getLocalizedField(entityProfile.jobTitle, schemaLang),
        description: getLocalizedField(entityProfile.descriptionShort, schemaLang),
        inLanguage: ['en', 'es'],
        author: {
          '@id': personId,
        },
      },
      {
        '@type': 'ProfilePage',
        '@id': profileId,
        url: siteUrl,
        mainEntity: {
          '@id': personId,
        },
      },
      {
        '@type': 'FAQPage',
        '@id': siteUrlBase + '/faq#faq',
        url: siteUrlBase + '/faq',
        mainEntity: buildFaqEntities(schemaLang),
      },
      buildFeaturedProjectList(schemaLang),
    ],
  };
};

export const getStructuredDataJsonString = (lang) => {
  return JSON.stringify(buildStructuredData(lang), null, 2);
};
