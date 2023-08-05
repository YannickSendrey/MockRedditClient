import React from 'react';
import { ArticleVoteRate } from './ArticleVoteRate';
import styles from '../css/article.module.css'
import { useSelector } from 'react-redux';
import { selectAllArticles} from '../features/ArticleBoard/articleBoardSlice';
import { useNavigate } from 'react-router-dom';


export const Article = ( { articleId }) => {
    const articles = useSelector(selectAllArticles);
    const article = articles.find((article) => article.id === articleId);
    const { voteRate, id, title, contentImg, contentText, author, publishDate, comNumber } = article;

    const alt = "Image illustrant l'article suivant : " + title;
    const navigate = useNavigate();
    const goToArticle = () =>{ 
        let path = '/' + id; 
        navigate(path);
      }

    return (
        <section className={styles.article__section}>
            <ArticleVoteRate voteRate={voteRate} articleId={id} />
            <div className={styles.article__content}>
                <h2 onClick={goToArticle} className={styles.article__h2}>{title}</h2>
                <div className={styles.article__contentImgWrapper}>
                    <img onClick={goToArticle} className={styles.article__contentImg} src={contentImg} alt={alt} />
                </div>
                <p className={styles.article__contentText}>{contentText}</p>
                <div className={styles.article__moreInfos}>
                    <p className={styles.article__moreInfos__author}>posted by <span className={styles.article__moreInfos__author_name}>{author}</span></p>
                    <p>-</p>
                    <p className={styles.article__moreInfos__date}>{publishDate}</p>
                    <p>-</p>
                    <p>{comNumber} comments</p>
                </div>
            </div>
            
        </section>
    )
    // voteRate et coms, on leur passe les props
    // tu récupères les props du stateful component ArticleBoard et tu set les valeurs après
}










