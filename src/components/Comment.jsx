import React from "react";
import styles from '../css/detailedArticle.module.css';

export const Comment = (props) => {
    const { content, author } = props;
    

    return (
        <div className={styles.comment__div}>
            <p className={styles.comment__content}>{content}</p>
            <p className={styles.comment__author}>Posted by <em>{author}</em></p>
        </div>
    )
}