import React from "react"

import { graphql } from "gatsby";
import Img from 'gatsby-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import Day from '../components/Tours/Day';
import SEO from "../components/SEO";

import styles from '../css/template.module.css';
import { FaMoneyBillWave, FaMap } from 'react-icons/fa';

export const queryTour = graphql`
query($slug: String!) {
    tour: contentfulTour(slug: { eq: $slug }) {
        name
        price
        country
        days
        start(formatString: "dddd MMMM Do, YYYY")
        description {
            description
        }
        journey {
            day
            info
        }
        images {
            fluid {
                ...GatsbyContentfulFluid
            }
        }
    }
}
`;

const tourTemplate = ({data}) => {
    const { name, price, country, days, start, description:{description}, journey, images } = data.tour;
    const [mainImage, ...tourImages] = images;

    return(
        <Layout>

            <SEO title={name} />

            <StyledHero img={mainImage.fluid} />

            <section className={styles.template}>

                <div className={styles.center}>

                    <div className={styles.images}>
                        {tourImages.map( (item, index) => {
                            return (
                                <Img key={index} fluid={item.fluid} alt="single tour" className={styles.image} />
                            )
                        })}
                    </div>

                    <h2>{name}</h2>

                    <div className={styles.info}>

                        <p>
                            <FaMoneyBillWave className={styles.icon}/>
                            starting from ${price}
                        </p>

                        <p>
                            <FaMap className={styles.icon} />
                            {country}
                        </p>

                    </div>

                    <h4>starts on : {start}</h4>

                    <h4>duration : {days}</h4>

                    <p className={styles.desc}>{description}</p>

                    <h2>daily schedule</h2>
                    <div className={styles.journey}>
                        {journey.map( (item, index) => {
                            return (
                                <Day key={index} day={item.day} info={item.info} />
                            )
                        })}
                    </div>

                    <AniLink fade to="/tours" className="btn-primary">back to tours</AniLink>

                </div>

            </section>

        </Layout>
    )
};

export default tourTemplate;
