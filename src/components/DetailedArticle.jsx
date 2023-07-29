import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllArticles} from '../features/ArticleBoard/articleBoardSlice';
import { useParams } from 'react-router-dom';
import { VoteRate } from './VoteRate';


export const DetailedArticle = () => {
    const { id } = useParams();
    const articleId = Number(id);
    const articles = useSelector(selectAllArticles);
    const article = articles.find((article) => article.id === articleId);
    const { voteRate, title, contentImg, contentText, author, publishDate, comNumber, comments } = article;

    return (
        // goBack component
        <>
            <h2>{title}</h2>
            <p>Posted by <span>{author}</span> - <span>{publishDate}</span></p>
            <img src={contentImg} alt="" />
            <VoteRate voteRate={voteRate} articleId={articleId} />
            <p>{comNumber}</p>
            <div>
                {/* comments & comRate */}
            </div>
        </>
        //
        
    )
}