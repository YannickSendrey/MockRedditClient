import React from 'react';
import { Article } from '../../components/Article';
import { useSelector } from 'react-redux';
import { selectAllArticles } from './articleBoardSlice';

export const ArticleBoard = () => {
    
    const articles = useSelector(selectAllArticles);

    // custom way to get 3 random articles using Fisher-Yates sorting algorithm
    const idsArray = articles.map((article) => {
        return article.id
    });

    const shuffle = (array) => { 
        for (let i = array.length - 1; i > 0; i--) { 
          const j = Math.floor(Math.random() * (i + 1)); 
          [array[i], array[j]] = [array[j], array[i]]; 
        } 
        return array; 
      }; 

    shuffle(idsArray);
    const ids = idsArray.slice(0, 3);

    const randomArticles = articles.filter((article) => {
        return ids.find(id => id === article.id);
    })
    //


    
    return (
        <>
            {randomArticles.slice(0, 3).map((article) => {
                // render 3 random articles on homePage
                return <Article
                         articleId={article.id}
                         key={article.id}
                 />
            })} 
        </>
    )
}


