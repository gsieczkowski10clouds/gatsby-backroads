import React from "react"

import { graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import Banner from '../components/Banner';
import About from '../components/home/About';
import Services from '../components/home/Services';
import FeaturedTours from '../components/home/FeaturedTours';
import SEO from '../components/SEO';

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


const index = ({data}) => {
    return(
        <Layout>

            <SEO title="Home" description="Lorem..." />

            <StyledHero home="true" img={data.heroBackgroud.childImageSharp.fluid}>
                <Banner title="continue exploring" info="Lorem ipsum dolor sit amet...">
                    <AniLink fade to="/tours" className="btn-white">explore tours</AniLink>
                </Banner>
            </StyledHero>

            <About/>

            <Services/>

            <FeaturedTours/>

        </Layout>
    )
};

export default index;
