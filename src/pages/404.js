import React from "react"

import { Link } from 'gatsby';

import Layout from "../components/Layout"
import Banner from '../components/Banner';

import style from '../css/error.module.css';

const Error404 = () => {
    return(
        <Layout>

            <head className={style.error}>
                <Banner title="oops it's dead end">
                    <Link to="/" className="btn-white">back to home page</Link>
                </Banner>
            </head>

        </Layout>
    )
};

export default Error404;
