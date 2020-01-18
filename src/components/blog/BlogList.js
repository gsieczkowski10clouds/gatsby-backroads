import React from "react"
import { useStaticQuery } from "gatsby";

import BlogCard from './BlogCard';
import Title from '../../components/Title';

import styles from '../../css/blog.module.css';

const queryPosts = graphql`
query {
    posts: allContentfulPost(sort:{fields:published,order:DESC}) {
        edges {
            node {
        		published(formatString:"MMMM Do, YYYY")
                title
                slug
                id: contentful_id
                image {
                    fluid {
                        ...GatsbyContentfulFluid
                    }
                }
            }
        }
    }
}
`;

const BlogList = () => {

    const { posts:{ edges:posts } } = useStaticQuery(queryPosts);
    console.log( 'POSTS', posts );
    return(
        <section className={styles.blog}>

            <Title title="Our" subtitle="blogs" />

            <div className={styles.center}>
                {posts.map( ({node}) => {
                    return (
                        <BlogCard key={node.id} blog={node} />
                    )
                })}
            </div>

        </section>
    )
};

export default BlogList;
