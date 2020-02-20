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
        "gatsby-transformer-json",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "src/images",
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "runway",
                path: "src/images/runway/",
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "data",
                path: "src/data/",
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
        {
            resolve: "gatsby-source-instagram",
            options: {
                username: "chandrimaofficial",
            },
        },
    ],
};
