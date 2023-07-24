import React from 'react';
import styles from '../css/article.module.css';

export const VoteRate = (props) => {
    
    
    return (
        <div className={styles.voterate__container}>
            <div>
                <i className={`${styles.voterate__arrow} ${styles.voterate__up}`}></i>
            </div>
            <p className={styles.voterate__number}>{props.voteRate}</p>
            <div>
                <i className={`${styles.voterate__arrow} ${styles.voterate__down}`}></i>
            </div>
        </div>
    )
}