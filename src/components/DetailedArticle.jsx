import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllArticles} from '../features/ArticleBoard/articleBoardSlice';
import { useParams } from 'react-router-dom';
import { ArticleVoteRate } from './ArticleVoteRate';
import { HomeButton } from './HomeButton';
import { CommentVoteRate } from './CommentVoteRate';
import { Comment } from './Comment';
import styles from '../css/DetailedArticle.module.css';


export const DetailedArticle = () => {
    const { id } = useParams();
    const articleId = Number(id);
    const articles = useSelector(selectAllArticles);
    const article = articles.find((article) => article.id === articleId);
    const { voteRate, title, contentImg, contentText, author, publishDate, comNumber, comments } = article;


    return (
        <section className={styles.detailedArticle__section}>  
            <HomeButton />
            <div className={styles.detailedArticle__section__article}>
                <div className={styles.detailedArticle__content}>
                    <h2 className={styles.detailedArticle__h2}>{title}</h2>
                    <p className={styles.detailedArticle__moreInfos}>Posted by <span className={styles.detailedArticle__moreInfos__author}>{author}</span> - <span className={styles.detailedArticle__moreInfos__date}>{publishDate}</span></p>
                    <img className={styles.detailedArticle__contentImg} src={contentImg} alt="" />
                    <p className={styles.detailedArticle__contentText}>{contentText}</p>
                </div>
                <ArticleVoteRate voteRate={voteRate} articleId={articleId} />
            </div>
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
        </section>
        //
        
    )
}