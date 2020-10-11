module.exports = {
  siteMetadata: {
    title: `Automation Engineering Association`,
    description: `Associazione Ingegneri dell'Automazione del Politecnico di Milano.`,
    author: `@giuliovaccari`,
  },
  pathPrefix: "/aea",
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        extensions: ['css', 'html', 'js', 'dae']
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `aea`,
        short_name: `aea`,
        start_url: `/`,
        background_color: `#ef6c00`,
        theme_color: `#ef6c00`,
        // display: `browser`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: `gatsby-plugin-gdpr-cookies`,
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
