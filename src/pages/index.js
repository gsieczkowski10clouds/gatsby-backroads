import React from "react"

import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import Banner from '../components/Banner';
import About from '../components/home/About';
import Services from '../components/home/Services';

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


const Index = ({data}) => {
    return(
        <Layout>

            <StyledHero home="true" img={data.heroBackgroud.childImageSharp.fluid}>
                <Banner title="continue exploring" info="Lorem ipsum dolor sit amet...">
                    <Link to="/tours" className="btn-white">explore tours</Link>
                </Banner>
            </StyledHero>

            <About/>

            <Services/>

        </Layout>
    )
};

export default Index;
