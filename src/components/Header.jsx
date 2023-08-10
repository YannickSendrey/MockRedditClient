import React from 'react';
import styles from '../css/header.module.css';
import { SearchInput } from '../features/SearchInput/SearchInput';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
    const navigate = useNavigate();
    const goHome = () => {
        let path = '/';
        navigate(path);
    }

    return (
        <>
            <header className={styles.header}>
                <div className={styles.header__div}>
                    <img className={styles.header__img} src="/assets/reddit-logo.svg" alt="Reddit Logo" width="50px" height="50px" />
                    <h1 className={styles.header__h1} onClick={goHome}>Mock Reddit Client</h1>
                </div>
                <SearchInput />
            </header>
            {/* outlet is used in react-router to display the rest of our page below our header */}
            <Outlet />
        </>
    )
}

