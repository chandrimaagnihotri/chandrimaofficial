let path = require("path")

module.exports = {
    siteMetadata: {
        title: "Chandrima Agnihotri",
        description:
            "Luxury ready to wear for women | Modern elegance and craftsmanship | Made in India",
        author: "Chandrima Agnihotri",
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-netlify",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-plugin-emotion",
        // {
        //   resolve: `gatsby-plugin-prefetch-google-fonts`,
        //   options: {
        //     fonts: [
        //       {
        //         family: `Montserrat`,
        //         variants: [`300`, `400`, `500`, `600`, `700`],
        //       },
        //     ],
        //   },
        // },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: path.join(__dirname, "src", "images"),
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                // The property ID; the tracking code won't be generated without it
                trackingId: "UA-157798277-1",
                // Defines where to place the tracking script - `true` in the head and `false` in the body
                head: true,
                // Setting this parameter is optional
                anonymize: true,
                // Setting this parameter is also optional
                respectDNT: true,
                // Avoids sending pageview hits from custom paths
                exclude: ["/preview/**", "/do-not-track/me/too/"],
                // Delays sending pageview hits on route update (in milliseconds)
                pageTransitionDelay: 0,
                // Enables Google Optimize using your container Id
                // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
                // Enables Google Optimize Experiment ID
                // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
                // Set Variation ID. 0 for original 1,2,3....
                // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
                // Any additional optional fields
                sampleRate: 5,
                siteSpeedSampleRate: 10,
                cookieDomain: "auto",
            },
        },
    ],
};
