import React, { useState } from "react"

import styles from '../../css/day.module.css';
import { FaAngleDown } from 'react-icons/fa';

const Day = ({day, info}) => {

    const [showInfo, setShowInfo] = useState(false);

    const toggleInfo = () => {
        setShowInfo( (oldShowInfo) => !oldShowInfo);
    };

    return(
        <article className={styles.day}>
            <h4>
                {day}
                <button className={styles.btn} onClick={toggleInfo}>
                    <FaAngleDown/>
                </button>
            </h4>
            {showInfo && <p>{info}</p>}
        </article>
    )
};

export default Day;
