/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Rishabh Rastogi | Portfolio",
    description: "This is WebDev Portfolio Site",
    siteUrl: "https://rishabhrastogi.netlify.app",
    siteLanguage: 'en_US',
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    `gatsby-remark-images`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'RishabhRastogi',
        short_name: 'RishabhRastogi',
        start_url: '/',
        background_color: '#1b2229',
        theme_color: '#161c21',
        display: 'minimal-ui',
        icon: 'src/images/favicons/favicon.ico',
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [{
            family: `Poppins`,
            variants: [`300`, `400`, `500`, `700`],
          },
          {
            family: `Open Sans`,
          },
        ],
      },
    }
  ],
};