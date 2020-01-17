import React from "react"
import { graphql } from "gatsby"

import Layout from '../components/Layout';
import StyledHero from "../components/StyledHero"

export const queryHeroBackgroud = graphql`
    query{
        heroBackgroud:file(relativePath:{eq:"defaultBcg.jpeg"}){
            childImageSharp{
                fluid(maxWidth: 1080, quality: 70){
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`;

const tours = ({data}) => {
    return(
        <Layout>

            <StyledHero img={data.heroBackgroud.childImageSharp.fluid} />

        </Layout>
    )
};

export default tours;
