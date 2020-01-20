import React, { useState, useEffect } from "react"

import Tour from './Tour';
import Title from '../Title';

import styles from '../../css/items.module.css';

const ToursList = ({tours}) => {
    
    const setToursList = useState([])[1];
    const [ sortedTours, setSortedTours ] = useState([]);

    useEffect( () => {
        // componentDidMount
        setToursList( tours.edges );
        setSortedTours( tours.edges );

    }, [tours, setToursList, setSortedTours]);

    return(
        <section className={styles.tours}>

            <Title title="Our" subtitle="tours" />

            <div className={styles.center}>
                {sortedTours.map( ({node}) => {
                    return(
                        <Tour key={node.contentful_id} tour={node} />
                    )
                })}
            </div>

        </section>
    )
};

export default ToursList;
