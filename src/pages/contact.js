import React from "react"
import { graphql } from "gatsby"

import Layout from '../components/Layout';
import StyledHero from "../components/StyledHero"
import Contact from '../components/Contact/Contact';

export const queryHeroBackgroud = graphql`
    query{
        heroBackgroud:file(relativePath:{eq:"connectBcg.jpeg"}){
            childImageSharp{
                fluid(maxWidth: 1080, quality: 70){
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`;

const contact = ({data}) => {
    return(
        <Layout>

            <StyledHero img={data.heroBackgroud.childImageSharp.fluid} />
            <Contact/>

        </Layout>
    )
};

export default contact;
