import React from "react"
import { graphql } from "gatsby"

import Layout from '../components/Layout';
import StyledHero from "../components/StyledHero";
import BlogList from '../components/blog/BlogList';

export const queryHeroBackgroud = graphql`
    query{
        heroBackgroud:file(relativePath:{eq:"blogBcg.jpeg"}){
            childImageSharp{
                fluid(maxWidth: 1080, quality: 70){
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`;

const Blog = ({data}) => {
    return(
        <Layout>

            <StyledHero img={data.heroBackgroud.childImageSharp.fluid} />

            <BlogList/>

        </Layout>
    )
};

export default Blog;
