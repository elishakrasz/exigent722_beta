module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     // The property ID; the tracking code won't be generated without it
    //     trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
    //     // Defines where to place the tracking script - `true` in the head and `false` in the body
    //     head: false,
    //     // Setting this parameter is optional
    //     anonymize: true,
    //     // Setting this parameter is also optional
    //     respectDNT: true,
    //     // Avoids sending pageview hits from custom paths
    //     exclude: ["/preview/**", "/do-not-track/me/too/"],
    //     // Delays sending pageview hits on route update (in milliseconds)
    //     pageTransitionDelay: 0,
    //     // Enables Google Optimize using your container Id
    //     optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
    //     // Enables Google Optimize Experiment ID
    //     experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
    //     // Set Variation ID. 0 for original 1,2,3....
    //     variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
    //     // Defers execution of google analytics script after page load
    //     defer: false,
    //     // Any additional optional fields
    //     sampleRate: 5,
    //     siteSpeedSampleRate: 10,
    //     cookieDomain: "example.com",
    //     // defaults to false
    //     enableWebVitalsTracking: true,
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-modal-routing`,
    //   options: {
    //     // See http://reactcommunity.org/react-modal/#usage
    //     modalProps: {
    //       style: {
    //         overlay: {
    //           backgroundColor: `rgba(0, 0, 0, 0.5)`,
    //         },
    //         content: {
    //           position: `absolute`,
    //           border: `none`,
    //           background: `none`,
    //           padding: 0,
    //           top: 0,
    //           bottom: 0,
    //           right: 0,
    //           left: 0,
    //           overflow: `auto`,
    //           WebkitOverflowScrolling: `touch`,
    //         },
    //       },
    //     },
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Mate`,
          `BenchNine:wght@300;400`,
          `Julius+Sans+One`,
          `Dosis`,
          `Raleway`,
          `Montserrat`
          // `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    }
  ]
};
