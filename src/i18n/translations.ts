export const languages = {
  en: 'English',
  ga: 'Gaeilge',
};

export const defaultLang = 'en';

export const ui = {
  en: {
    // Site
    'site.title': 'Irish Ledger',
    'site.subtitle': '',
    'site.tagline': 'News • Culture • Craic',
    'site.description': 'Your daily dose of Irish news, culture, and craic',

    // Navigation
    'nav.home': 'Home',
    'nav.news': 'News',
    'nav.culture': 'Culture',
    'nav.sport': 'Sport',
    'nav.diaspora': 'Diaspora',
    'nav.gaeilge': 'Gaeilge',
    'nav.opinion': 'Opinion',
    'nav.games': 'Games',

    // Top bar
    'topbar.todaysGames': "Today's Games",
    'topbar.subscribe': 'Subscribe',

    // Sections
    'section.trending': 'Trending',
    'section.opinion': 'Opinion',
    'section.culture': 'Culture',
    'section.games': 'Games',
    'section.moreNews': 'More News',

    // Games
    'games.craicle': 'Craicle',
    'games.craicleDesc': 'Daily word game',
    'games.moreGames': 'More Games',
    'games.comingSoon': 'Coming soon',

    // Footer
    'footer.sections': 'Sections',
    'footer.more': 'More',
    'footer.about': 'About',
    'footer.connect': 'Connect',
    'footer.aboutUs': 'About Us',
    'footer.contact': 'Contact',
    'footer.advertise': 'Advertise',
    'footer.privacy': 'Privacy',
    'footer.newsletter': 'Newsletter',
    'footer.copyright': '© {year} Irish Ledger. All rights reserved.',

    // Actions
    'action.moreOpinion': 'More Opinion →',
    'action.moreCulture': 'More Culture →',
  },
  ga: {
    // Site
    'site.title': 'Irish Ledger',
    'site.subtitle': 'An Mórleabhar Éireannach',
    'site.tagline': 'Nuacht • Cultúr • Craic',
    'site.description': 'Do dhóis laethúil de nuacht, cultúr, agus craic na hÉireann',

    // Navigation
    'nav.home': 'Baile',
    'nav.news': 'Nuacht',
    'nav.culture': 'Cultúr',
    'nav.sport': 'Spórt',
    'nav.diaspora': 'Diaspóra',
    'nav.gaeilge': 'Gaeilge',
    'nav.opinion': 'Tuairim',
    'nav.games': 'Cluichí',

    // Top bar
    'topbar.todaysGames': 'Cluichí an Lae',
    'topbar.subscribe': 'Liostáil',

    // Sections
    'section.trending': 'Ag Treochtáil',
    'section.opinion': 'Tuairim',
    'section.culture': 'Cultúr',
    'section.games': 'Cluichí',
    'section.moreNews': 'Tuilleadh Nuachta',

    // Games
    'games.craicle': 'Craicle',
    'games.craicleDesc': 'Cluiche focal laethúil',
    'games.moreGames': 'Tuilleadh Cluichí',
    'games.comingSoon': 'Ag teacht go luath',

    // Footer
    'footer.sections': 'Rannóga',
    'footer.more': 'Tuilleadh',
    'footer.about': 'Eolas',
    'footer.connect': 'Ceangail',
    'footer.aboutUs': 'Fúinn',
    'footer.contact': 'Teagmháil',
    'footer.advertise': 'Fógraíocht',
    'footer.privacy': 'Príobháideachas',
    'footer.newsletter': 'Nuachtlitir',
    'footer.copyright': '© {year} Iris Éireannach. Gach ceart ar cosaint.',

    // Actions
    'action.moreOpinion': 'Tuilleadh Tuairimí →',
    'action.moreCulture': 'Tuilleadh Cultúir →',
  },
} as const;

export type UIKey = keyof typeof ui.en;

export function getLangFromUrl(url: URL): 'en' | 'ga' {
  const [, lang] = url.pathname.split('/');
  if (lang === 'ga') return 'ga';
  return 'en';
}

export function useTranslations(lang: 'en' | 'ga') {
  return function t(key: UIKey, params?: Record<string, string | number>): string {
    let text = ui[lang][key] || ui.en[key] || key;
    if (params) {
      Object.entries(params).forEach(([k, v]) => {
        text = text.replace(`{${k}}`, String(v));
      });
    }
    return text;
  };
}

export function getLocalePath(lang: 'en' | 'ga', path: string): string {
  if (lang === 'en') return path;
  return `/ga${path}`;
}
