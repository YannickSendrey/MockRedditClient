import React from 'react';
import styles from '../../css/header.module.css';
import { selectAllArticles } from '../ArticleBoard/articleBoardSlice';
import { addInput, selectInputValue } from './searchInputSlice';
import { useSelector, useDispatch } from 'react-redux';


export const SearchInput = () => {

    const dispatch = useDispatch();
    const articles = useSelector(selectAllArticles);
    const value = useSelector(selectInputValue);



    const handleChange = ({ target }) => {
        dispatch(addInput(target.value));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(articles);
        const filteredArticles = articles.filter((article) => {
            article.title.includes(value); // to do, doesnt work atm
        })
        console.log(filteredArticles);
    }

    return (
        <form className={styles.header__form} onSubmit={handleSubmit}>
            <input type="text" placeholder='Search MockReddit' className={styles.header__input} 
        onChange={handleChange} value={value}   />
            <button type='submit' className={styles.header__button}>
                <i className={styles.arrow}></i>
            </button>
        </form>
        
    )
}