import React from "react"

import { useStaticQuery, graphql } from "gatsby";
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import Tour from '../Tours/Tour';
import Title from '../Title';

import styles from '../../css/items.module.css';

const queryTours = graphql`
query {
    featuredTours: allContentfulTour(filter:{featured:{eq:true}}) {
        edges {
            node {
                name
                price
                slug
                country
                contentful_id
                days
                images {
                    fluid {
                        ...GatsbyContentfulFluid_tracedSVG
                    }
                }
            }
        }
    }
}
`;

const FeaturedTours = () => {
    const { featuredTours: { edges:toursList } } = useStaticQuery(queryTours);

    return(
        <section className={styles.tours}>

            <Title title="Featured" subtitle="tours" />

            <div className={styles.center}>
                {toursList.map( ({node}) => {
                    return(
                        <Tour key={node.contentful_id} tour={node} />
                    )
                })}
            </div>

            <AniLink fade to="/tours" className="btn-primary">all tours</AniLink>

        </section>
    )
};

export default FeaturedTours;
