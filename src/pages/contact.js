import React from "react"
import { graphql } from "gatsby"

import Layout from '../components/Layout';
import StyledHero from "../components/StyledHero"
import Contact from '../components/Contact/Contact';
import SEO from '../components/SEO';

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

            <SEO title="Contact" />

            <StyledHero img={data.heroBackgroud.childImageSharp.fluid} />
            <Contact/>

        </Layout>
    )
};

export default contact;
