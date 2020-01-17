import React from "react"
import { graphql } from "gatsby"

import Layout from '../components/Layout';
import Banner from "../components/Banner"
import StyledHero from "../components/StyledHero"

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

            <StyledHero img={data.heroBackgroud.childImageSharp.fluid}>
                <Banner title="continue exploring" info="Lorem ipsum dolor sit amet..."></Banner>
            </StyledHero>

        </Layout>
    )
};

export default Blog;
