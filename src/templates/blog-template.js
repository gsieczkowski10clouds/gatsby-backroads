import React from "react";

import { graphql } from "gatsby";
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from '../components/Layout';
import SEO from "../components/SEO";

import styles from '../css/single-blog.module.css';

export const queryPost = graphql`
query($slug: String!) {
    post: contentfulPost(slug: { eq: $slug }) {
        title
        published(formatString: "MMMM Do, YYYY")
        text {
            json
        }
    }
}
`;

const BlogTemplate = ({data}) => {
    const { title, published, text:{json} } = data.post;

    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                return (
                    <div>
                        {node.data.target.fields.title ? <h3>{node.data.target.fields.title["en-US"]}</h3> : null}
                        <img width="400" src={node.data.target.fields.file["en-US"].url} alt="image" />
                    </div>
                )
            },

            "embedded-entry-block": (node) => {
                const {title, image, text} = node.data.target.fields;

                return (
                    <div>
                        <h1>{title["en-US"]}</h1>
                        <img width="400" src={image["en-US"].fields.file["en-US"].url} alt="image" />
                        {documentToReactComponents(text["en-US"])}
                    </div>
                )
            }
        }
    };

    return(
        <Layout>

            <SEO title={title} />

            <section className={styles.blog}>

                <div className={styles.center}>

                    <h1>{title}</h1>

                    <h4>published at: {published}</h4>

                    <article className={styles.post}>
                        {documentToReactComponents(json, options)}
                    </article>

                    <AniLink fade to="/blog" className="btn-primary">all posts</AniLink>

                </div>

            </section>

        </Layout>
    )
};

export default BlogTemplate;
