import React from "react";

import { graphql } from "gatsby";
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import Layout from '../components/Layout';
import BlogCard from '../components/blog/BlogCard';
import Title from '../components/Title';
import StyledHero from "../components/StyledHero";
import SEO from '../components/SEO';

import styles from '../css/blog.module.css';

export const queryPost = graphql`
query ($skip: Int!, $limit: Int!) {
    pagedPosts: allContentfulPost(
        sort: { fields: published, order: DESC }
        limit: $limit
        skip: $skip
    ) {
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
    },
    heroBackgroud:file(relativePath:{eq:"blogBcg.jpeg"}){
        childImageSharp{
            fluid(maxWidth: 1080, quality: 70){
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
}
`;

const BlogListTemplate = (props) => {
    const { data, pageContext: {maxPage, currentPage} } = props;

    const isFirst = currentPage === 1;
    const isLast = currentPage === maxPage;

    const nextPage = `/blogs/${currentPage+1}`;
    const prevPage = (currentPage - 1) === 1 ? `/blogs` : `/blogs/${currentPage-1}`;

    return(
        <Layout>

            <SEO title="Blogs" />

            <StyledHero img={data.heroBackgroud.childImageSharp.fluid} />

            <section className={styles.blog}>

                <Title title="Latest" subtitle="posts" />

                <div className={styles.center}>
                    {data.pagedPosts.edges.map( ({node}) => {
                        return (
                            <BlogCard key={node.id} blog={node} />
                        )
                    })}
                </div>

                <section className={styles.links}>

                    {!isFirst && <AniLink fade to={prevPage} className={styles.link}>Prev</AniLink>}

                    {Array.from({length: maxPage}, (_, index) => {
                        return (
                            <AniLink key={index} fade to={`/blogs${index===0 ? '' : "/"+(index+1)}`} className={(index+1)===currentPage ? `${styles.link} ${styles.active}` : styles.link}>{index+1}</AniLink>
                        )
                    })}

                    {!isLast && <AniLink fade to={nextPage} className={styles.link}>Next</AniLink>}

                </section>

            </section>

        </Layout>
    )
};

export default BlogListTemplate;
