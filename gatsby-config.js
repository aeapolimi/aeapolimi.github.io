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
        icon: `src/images/aea_maskable.png`, // This path is relative to the root of the site.
        icon_options: {
          // For all the options available, please see the additional resources below.
          purpose: `any maskable`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          '/*': [
            'X-Frame-Options: SAMEORIGIN',
            // Range per stream su Safari
            'Accept-Ranges: bytes'
          ],
          "/static/*": [
            "cache-control: public",
            "cache-control: max-age=31536000",
            "cache-control: immutable"
          ],
        },
        mergeSecurityHeaders: false,
      },
    },
    // {
    //   resolve: `gatsby-plugin-gdpr-cookies`,
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // Script per evitare casini safari mp4, vedi
    // https://dev.to/glukmann/how-to-get-videos-to-work-in-safari-with-gatsby-and-service-workers-4edc
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        appendScript: require.resolve(`./sw-range-request-handler.js`),
      },
    },    
    // {
    //   resolve: 'gatsby-plugin-i18n',
    //   options: {        
    //     langKeyDefault: 'it',
    //     useLangKeyLayout: false
    //   }
    // }
  ],
}
