import React from "react"

import AniLink from 'gatsby-plugin-transition-link/AniLink';

import Layout from "../components/Layout"
import Banner from '../components/Banner';

import style from '../css/error.module.css';

const Error404 = () => {
    return(
        <Layout>

            <head className={style.error}>
                <Banner title="oops it's dead end">
                    <AniLink fade to="/" className="btn-white">back to home page</AniLink>
                </Banner>
            </head>

        </Layout>
    )
};

export default Error404;
