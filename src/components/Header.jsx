import React from 'react';
import styles from '../css/header.module.css';
import { SearchInput } from '../features/SearchInput/SearchInput';
import { Outlet } from 'react-router-dom';

export const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.header__div}>
                    <img className={styles.header__img} src="src/assets/reddit-logo.svg" alt="Reddit Logo" width="50px" height="50px" />
                    <h1 className={styles.header__h1}>Mock Reddit Client</h1>
                </div>
                <SearchInput />
            </header>
            <Outlet />
        </>
    )
    // + search component + maybe light/dark mode button
}

