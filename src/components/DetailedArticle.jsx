import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllArticles} from '../features/ArticleBoard/articleBoardSlice';
export const DetailedArticle = ( { articleId } ) => {
    const articles = useSelector(selectAllArticles);
    const article = articles.find((article) => article.id === articleId);
    const { voteRate, id, title, contentImg, contentText, author, publishDate, comNumber, comments } = article;
    return (
        // goBack component
        <>
            <h2>{title}</h2>
            <p>Posted by <span>{author}</span> - <span>{publishDate}</span></p>
            <img src={contentImg} alt="" />
            <voteRate voteRate={voteRate} articleId={id} />
            <p>{comNumber}</p>
            <div>
                {/* comments & comRate */}
            </div>
        </>
        //
        
    )
}