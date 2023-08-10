import React, { useState, useEffect } from 'react';
import { Article } from '../../components/Article';
import { useSelector } from 'react-redux';
import { selectAllArticles } from './articleBoardSlice';

export const ArticleBoard = () => {
    
    const articles = useSelector(selectAllArticles);

    // custom way to get 3 random articles using Fisher-Yates sorting algorithm, only on the first render
     const [randomArticles, setRandomArticles] = useState([]);

     const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

     useEffect(() => {
         const idsArray = articles.map((article) => article.id);
         const shuffledIds = shuffle(idsArray);
         const selectedIds = shuffledIds.slice(0, 3);
         const selectedArticles = articles.filter((article) => selectedIds.includes(article.id));
         setRandomArticles(selectedArticles);
     }, []);
 


    
    return (
        <>
            {randomArticles.map((article) => {
                return <Article
                         articleId={article.id}
                         key={article.id}
                 />
            })} 
        </>
    )
}


