import React from "react"

import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from "gatsby";

const queryMeta = graphql`
query {
    site {
        siteMetadata {
            siteTitle: title
            siteDescription: description
            author
            siteUrl
            image
            twitterUserName
        }
    }
}
`;

const SEO = ({title, description}) => {

    const { site } = useStaticQuery(queryMeta);
    const { siteTitle, siteDescription, siteUrl, image, twitterUserName } = site.siteMetadata;

    console.log( site );

    return(
        <Helmet htmlAttributes={{lang: 'en'}} title={`${title} | ${siteTitle}`}>
            <meta name="description" content={description || siteDescription} />
            <meta name="image" content={image} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={twitterUserName} />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={siteDescription} />
            <meta name="twitter:image" content={`${siteUrl}${image}`} />

            <meta name="og:url" content={siteUrl} />
            <meta name="og:type" content="website" />
            <meta name="og:title" content={siteTitle} />
            <meta name="og:description" content={siteDescription} />
            <meta name="og:image" content={`${siteUrl}${image}`} />
            <meta name="og:image:width" content="400" />
            <meta name="og:image:height" content="300" />
        </Helmet>
    )
};

export default SEO;