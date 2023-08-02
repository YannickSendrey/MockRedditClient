import React from "react";
import { useNavigate } from "react-router-dom";
import styles from '../css/DetailedArticle.module.css';

export const HomeButton = () => {
    const navigate = useNavigate();
    const goHome = () => {
        let path = '/';
        navigate(path);
    }
    
    return (
        <div onClick={goHome} className={styles.homeButton__div}>
            <p className={styles.homeButton__text}>Home</p>
        </div>
    )
}