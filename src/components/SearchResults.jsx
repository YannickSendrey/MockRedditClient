import React from 'react';
import styles from '../css/header.module.css';
import { useSelector } from 'react-redux';
import { selectAllArticles } from '../features/ArticleBoard/articleBoardSlice';
import { Link } from 'react-router-dom';

export const SearchResults = (props) => {
    const { articleId, handleClick } = props;
    const articles = useSelector(selectAllArticles);
    const article = articles.find((article) => article.id === articleId);
    const { id, title, contentImg } = article;

    return (
            <Link to={'/' + id} onClick={handleClick} className={styles.searchResults__link}>{title}</Link>
    )
}
