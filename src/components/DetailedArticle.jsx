import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllArticles} from '../features/ArticleBoard/articleBoardSlice';
import { useParams } from 'react-router-dom';
import { ArticleVoteRate } from './ArticleVoteRate';
import { HomeButton } from './HomeButton';
import { CommentVoteRate } from './CommentVoteRate';
import { Comment } from './Comment';


export const DetailedArticle = () => {
    const { id } = useParams();
    const articleId = Number(id);
    const articles = useSelector(selectAllArticles);
    const article = articles.find((article) => article.id === articleId);
    const { voteRate, title, contentImg, contentText, author, publishDate, comNumber, comments } = article;


    return (
        // goBack component
        <>  
            <HomeButton />
            <h2>{title}</h2>
            <p>Posted by <span>{author}</span> - <span>{publishDate}</span></p>
            <img src={contentImg} alt="" />
            <ArticleVoteRate voteRate={voteRate} articleId={articleId} />
            <p>{contentText}</p>
            <div>
                <p>{comNumber} comments on this article : </p>
                <div>{comments.map((comment) => {
                    return <div key={comment.id}>
                                <Comment content={comment.content} author={comment.author}  />
                                <CommentVoteRate articleId={articleId} commentId={comment.id} voteRate={comment.voteRate}  />
                            </div>
                    })}
                </div>
            </div>
            
        </>
        //
        
    )
}