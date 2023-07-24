import React from 'react';
import styles from '../../css/header.module.css';

export const SearchInput = () => {

    return (
        <input type="text" placeholder='  Rechercher un sujet...' className={styles.header__input} />
    )
}