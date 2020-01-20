const path = require('path');

exports.createPages = async( {graphql, actions} ) => {

    const { createPage } = actions;

    const { data } = await graphql(`
        query {
            tours: allContentfulTour {
                edges {
                    node {
                        slug
                    }
                }
            }
            posts: allContentfulPost {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `);

    const tourTemplate = path.resolve('./src/templates/tour-template.js');
    data.tours.edges.forEach( ({node}) => {
        createPage({
            path: `/tours/${node.slug}`,
            component: tourTemplate,
            context: {
                slug: node.slug,
            }
        })
    });

    const blogTemplate = path.resolve('./src/templates/blog-template.js');
    data.posts.edges.forEach( ({node}) => {
       createPage({
           path: `/blog/${node.slug}`,
           component: blogTemplate,
           context: {
               slug: node.slug,
           }
       })
    });

    const blogListTemplate = path.resolve('./src/templates/blog-list-template.js');
    const posts = data.posts.edges;
    const postsPerPage = 5;
    const postsMaxPage = Math.ceil(posts.length/postsPerPage);
    Array.from({length:postsMaxPage}).forEach( (_, index) => {
        createPage({
            path: index === 0 ? `/blogs` : `/blogs/${index+1}`,
            component: blogListTemplate,
            context: {
                limit: postsPerPage,
                skip: index * postsPerPage,
                maxPage: postsMaxPage,
                currentPage: index + 1,
            }
        })
    });

}