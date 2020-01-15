import React from "react"

import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SimpleHero from '../components/SimpleHero';
import Banner from '../components/Banner';
import About from '../components/home/About';
import Services from '../components/home/Services';

const Index = () => {
    return(
        <Layout>

            <SimpleHero>
                <Banner title="continue exploring" info="Lorem ipsum dolor sit amet...">
                    <Link to="/tours" className="btn-white">explore tours</Link>
                </Banner>
            </SimpleHero>

            <About/>

            <Services/>

        </Layout>
    )
};

export default Index;
