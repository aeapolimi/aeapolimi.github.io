module.exports = {
  siteMetadata: {
    title: `AEA Polimi`,
    description: `Politecnico di Milano Automation Engineering Association. A no-profit organization made by students for students aimed at promoting the Automation Engineer through events and opportunities.`,
    author: `@giuliovaccari`,
  },
  pathPrefix: "/aea",
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-theme-material-ui`,
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
      resolve: '@deanc/gatsby-source-firestorer',
      options: {
        config: {
          apiKey: "AIzaSyCN3qF77x39c9RtTO5_s4QMV3lQ589RdZU",
          authDomain: "aeapolimiweb.firebaseapp.com",
          databaseURL: "https://aeapolimiweb.firebaseio.com",
          projectId: "aeapolimiweb",
          storageBucket: "aeapolimiweb.appspot.com",
          messagingSenderId: "252147138104",
          appId: "1:252147138104:web:cc2a953476b0b77f65b0cd",
          measurementId: "G-0D5Z9JD5XH"
        },
        types: [
          {
            type: 'News',
            collection: 'news',
          },
        ],
      },
    },
    'gatsby-plugin-loadable-components-ssr',
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
      // options: {
      //   appendScript: require.resolve(`./sw-range-request-handler.js`),
      // },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // Directory with the strings JSON
        path: `${__dirname}/src/intl`,
        // Supported languages
        languages: [`it`, `en`],
        // Default site language
        defaultLanguage: `en`,
        // Redirects to `/en` in the route `/`
        redirect: true,
      },
    },
  ],
}
