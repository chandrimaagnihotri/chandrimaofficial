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
            resolve: "gatsby-plugin-google-analytics",
            options: {
                // The property ID; the tracking code won't be generated without it
                trackingId: "UA-157798277-1",
                // Defines where to place the tracking script - `true` in the head and `false` in the body
                head: true,
            },
        },
    ],
};
