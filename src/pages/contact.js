import React from "react"
import { graphql } from "gatsby"

import Layout from '../components/Layout';
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner"

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

const Contact = ({data}) => {
    return(
        <Layout>


            <StyledHero img={data.heroBackgroud.childImageSharp.fluid}>
                <Banner title="continue exploring" info="Lorem ipsum dolor sit amet..."></Banner>
            </StyledHero>


        </Layout>
    )
};

export default Contact;
