import React from 'react';
import styles from '../../css/header.module.css';
import { selectAllArticles } from '../ArticleBoard/articleBoardSlice';
import { addInput, selectInputValue } from './searchInputSlice';
import { useSelector, useDispatch } from 'react-redux';


export const SearchInput = () => {

    const dispatch = useDispatch();
    const articles = useSelector(selectAllArticles);
    const value = useSelector(selectInputValue);

    // sanitize data and check if input value match an article title
    const filteredArticles = articles.filter((article) => {
        const title = article['title'].toLowerCase();
        const inputValue = value.toLowerCase();
        if (inputValue.length >= 3) {
            return title.includes(inputValue); 
        }
    })

    console.log(filteredArticles);



    const handleChange = ({ target }) => {
        dispatch(addInput(target.value));
    }

    const handleSubmit = (event) => {
        event.preventDefault();






        // fonctionnement voulu : quand on clique sur button submit ona ffiche dropdown sans reload page

        /* dans un select display none
        if (value.length >= 4 {
            filteredArticles.map((article) => {
                select.style.display = block
                return <OptionComponent />
        })
        })
         */
    }

    return (
        <form className={styles.header__form} onSubmit={handleSubmit}>
            <div className={styles.header__container}>
                <input type="text" placeholder='Search MockReddit' className={styles.header__input} 
            onChange={handleChange} value={value}   />
                <button type='submit' className={styles.header__button}>
                    <i className={styles.arrow}></i>
                </button>
            </div>
            <div>
                {filteredArticles.map((article) => {
                    return <a href="" key={article.id}>{article.title}</a>
                })}
            </div>
        </form>
    )
}