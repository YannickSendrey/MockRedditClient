import React from 'react';
import styles from '../css/header.module.css';
import { SearchInput } from '../features/SearchInput/SearchInput';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__div}>
                <img src="src/assets/reddit-logo.svg" alt="Reddit Logo" width="50px" height="50px" />
                <h1 className={styles.header__h1}>Mock Reddit Client</h1>
            </div>
            <SearchInput />
        </header>
    )
    // + search component + maybe light/dark mode button
}

