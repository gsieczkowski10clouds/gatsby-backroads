import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PropTypes from 'prop-types';

import Img from 'gatsby-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import styles from '../../css/tour.module.css';
import { FaMap } from 'react-icons/fa';

const queryDefaultImg = graphql`
query {
    defaultImg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
        childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid_tracedSVG
            }
        }
    }
}
`;

const Tour = ({tour}) => {
    const { name, price, country, days, slug, images } = tour;

    const { defaultImg } = useStaticQuery(queryDefaultImg);
    const mainImage = (images && images.length > 0) ? images[0].fluid : defaultImg.childImageSharp.fluid;


    return(
        <article className={styles.tour}>

            <div className={styles.imgContainer}>
                <Img fluid={mainImage} className={styles.img} alt="single tour" />
                <AniLink fade className={styles.link} to={`/tours/${slug}`}>details</AniLink>
            </div>

            <div className={styles.footer}>

                <h3>{name}</h3>

                <div className={styles.info}>

                    <h4 className={styles.country}><FaMap className={styles.icon} /> {country || 'default country'}</h4>

                    <div className={styles.details}>
                        {!!days ? <h6>{days} days</h6> : ''}
                        <h6>from ${price}</h6>
                    </div>

                </div>

            </div>

        </article>
    )
};

Tour.propTypes = {
    tour:PropTypes.shape({
        slug:PropTypes.string.isRequired,
        name:PropTypes.string.isRequired,
        country:PropTypes.string.isRequired,
        price:PropTypes.number.isRequired,
        days:PropTypes.number.isRequired,
        images:PropTypes.arrayOf(PropTypes.object).isRequired,
    })
}

export default Tour;
