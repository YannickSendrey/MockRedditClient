import React from 'react';
import styles from '../../css/header.module.css';
import { selectAllArticles } from '../ArticleBoard/articleBoardSlice';
import { addInput, selectInputValue } from './searchInputSlice';
import { useSelector, useDispatch } from 'react-redux';
import { SearchResults } from '../../components/SearchResults';


export const SearchInput = () => {

    const dispatch = useDispatch();
    const articles = useSelector(selectAllArticles);
    const value = useSelector(selectInputValue);

    // sanitize data and check if input value match an article title (3 characs mini)
    const filteredArticles = articles.filter((article) => {
        const title = article['title'].toLowerCase();
        const inputValue = value.toLowerCase();
        if (inputValue.length >= 4) {
            // we want to check when user type atlease 4 characters
            return title.includes(inputValue); 
        }
    })

    const handleChange = ({ target }) => {
        dispatch(addInput(target.value));
    }

    const handleClick = () => {
        dispatch(addInput(''));
    }


    return (
        <form className={styles.searchInput__form} >
            <input type="text" placeholder='Search MockReddit' className={styles.searchInput__input} 
            onChange={handleChange} value={value}   />
            <div className={styles.searchInput__searchResults}>
                {filteredArticles.slice(0, 3).map((article) => {
                // We only want to render the 3 first of our filteredArticles array. Design choice 
                        return <SearchResults key={article.id} articleId={article.id} handleClick={handleClick}/>
                })}
            </div>
        </form>
    )
}