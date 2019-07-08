const title = 'Zack | Zeyu';
const description = "Zack's Portfolio";

const favicon = require('assets/images/favicon.png');

export const helmet = {
  title,
  titleTemplate: '%s',
  htmlAttributes: { lang: 'en' },
  meta: [
    { name: 'description', content: description },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, user-scalable=no'
    },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    { name: 'msapplication-navbutton-color', content: '#000' },
    { name: 'msapplication-TileColor', content: '#000' },
    { name: 'theme-color', content: '#000' },

    { property: 'og:title', content: title }
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: favicon }]
};
