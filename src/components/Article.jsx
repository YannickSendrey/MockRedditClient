import React from 'react';
import { VoteRate } from './VoteRate';
import styles from '../css/article.module.css'


export const Article = (props) => {
    const { id, title, voteRate, contentImg, contentText, author, publishDate, comNumber } = props;

    const alt = "Image illustrant l'article suivant : " + title;
    
    return (
        <section className={styles.article__section}>
            <VoteRate voteRate={voteRate} />
            <div className={styles.article__content}>
                <h2 className={styles.article__h2}>{title}</h2>
                <img className={styles.article__contentImg} src={contentImg} alt={alt}/>
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










