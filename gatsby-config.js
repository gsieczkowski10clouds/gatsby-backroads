/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {

    siteMetadata: {
        title: 'BackRads',
        description: 'Lorem ipsum...',
        author: 'John Smith',
    },

    plugins: [

        'gatsby-plugin-playground',

        'gatsby-plugin-sass',
        'gatsby-plugin-styled-components',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        'gatsby-plugin-transition-link',

        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images/`,
            },
        },

        {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: 'aa6lmvvj10ja',
                accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
            },
        },

    ],

}
