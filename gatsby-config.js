/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {

    siteMetadata: {
        title: 'BackRads',
        description: 'Lorem ipsum...',
        author: 'John Smith',
    },

    plugins: [

        'gatsby-plugin-sass',
        'gatsby-plugin-styled-components',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',

        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images/`,
            },
        },

    ],

}
