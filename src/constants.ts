export const URL_SITE = 'https://mrtnmrls.com';

export const RSS = {
    title: 'Martin Morales',
    description: 'A small collection of thoughts, experiences and other things',
    site: URL_SITE,
    copyright: 'Copyright 2024, Martin Morales',
    managingEditor: 'isthemartin@gmail.com (Martin Morales)',
    webMaster: 'isthemartin@gmail.com (Martin Morales)',
    generator: 'Netlify + Astro',
    docs: 'https://www.rssboard.org/rss-specification',
    ttl:1440,
    language: '<language>en-us</language>'
};

export const esLinks = [
    { route: "/es", menu: "Inicio" },
    { route: "/es/now", menu: "Ahora" },
    { route: "/es/about", menu: "Sobre mí" },
    { route: "/", menu: "English" },
];

export const enLinks = [
    { route: "/", menu: "Home" },
    { route: "/now", menu: "Now" },
    { route: "/about", menu: "About me" },
    { route: "/es", menu: "Español" },
];

export const englishNavLinks = [
    { route: "/now", menu: "Now" },
    { route: "/posts", menu: "Posts"},
    { route: "/about", menu: "About me" },
    { route: "/uses", menu: "Uses"},
    { route: "/rss.xml", menu: "Subscribe"},
    { route: "/es", menu: "Español" }
];

export const spanishNavLinks = [
    { route: "/es/now", menu: "Ahora" },
    { route: "/es/posts", menu: "Posts"},
    { route: "/es/about", menu: "Acerca" },
    { route: "/es/uses", menu: "Usos"},
    { route: "/rss.xml", menu: "Subscribirse"},
    { route: "/", menu: "English" }
];

export const socialLinks = [
    { platform: "instagram", username: "isthemartin" },
    { platform: "github", username: "IsTheMartin" },
    { platform: "goodreads", username: "isthemartin" },
];