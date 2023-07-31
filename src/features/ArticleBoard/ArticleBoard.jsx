import React from 'react';
import { Article } from '../../components/Article';
import { useSelector } from 'react-redux';
import { selectAllArticles } from './articleBoardSlice';

export const ArticleBoard = () => {
    
    const articles = useSelector(selectAllArticles);

    


    return (
        // foreach article -> un article en gros, tu lui passes toutes ses données en prop ? 
        <>
            {articles.map((article) => {
                return <Article
                         articleId={article.id}
                         key={article.id}
                          
                 />
            })} 
        </>
    )
}



/*
[
    {
        id: number,
        title: string,
        voteRate: number, another component
        author: string,
        publishDate: date/number,
        comNumber: number (math.random)
    }
] */