import React from "react"

import Title from '../Title';

import styles from '../../css/about.module.css';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from "gatsby"

const queryAboutImg = graphql`
    {
        aboutImage:file(relativePath:{eq:"defaultBcg.jpeg"}){
            childImageSharp{
                fluid(maxWidth: 600){
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`;

const About = () => {
    const {aboutImage} = useStaticQuery(queryAboutImg);

    return(
        <section className={styles.about}>

            <Title title="About" subtitle="us"/>

            <div className={styles.aboutCenter}>

                <article className={styles.aboutImg}>

                    <div className={styles.imgContainer}>
                        <Img fluid={aboutImage.childImageSharp.fluid} alt="" />
                    </div>

                </article>

                <article className={styles.aboutInfo}>

                    <h4>explore the difference</h4>
                    <p>
                        Lorem ipsum dolor sit amet...
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet...
                    </p>

                    <button type="button" className="btn-primary">read more</button>

                </article>

            </div>

        </section>
    )
};

export default About;
