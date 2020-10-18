module.exports = {
  siteMetadata: {
    title: `AEA Polimi`,
    description: `Politecnico di Milano Automation Engineering Association. A no-profit organization made by students for students aimed at promoting the Automation Engineer through events and opportunities.`,
    author: `@giuliovaccari`,
  },
  pathPrefix: "/aea",
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-brotli',
      options: {
        extensions: ['css', 'html', 'js']
      }
    },
    {
      resolve: 'gatsby-plugin-zopfli',
      options: {
        extensions: ['dae']
      }
    }

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `aea`,
        short_name: `aea`,
        start_url: `/`,
        background_color: `#ef6c00`,
        theme_color: `#ef6c00`,
        // display: `browser`,
        icon: `src/images/aea.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: `gatsby-plugin-gdpr-cookies`,
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    // {
    //   resolve: 'gatsby-plugin-i18n',
    //   options: {        
    //     langKeyDefault: 'it',
    //     useLangKeyLayout: false
    //   }
    // }
  ],
}
