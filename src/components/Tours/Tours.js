import React from "react"

import { useStaticQuery, graphql } from "gatsby";

import ToursList from './ToursList';

const queryTours = graphql`
query {
    tours: allContentfulTour {
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

const Tours = () => {
    const {tours} = useStaticQuery(queryTours);

    return(
        <ToursList tours={tours} />
    )
};

export default Tours;
