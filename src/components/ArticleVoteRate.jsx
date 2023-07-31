import React, { useState } from 'react';
import styles from '../css/article.module.css';
import { useDispatch } from 'react-redux';
import { incrementArticleVoteRate, decrementArticleVoteRate } from '../features/ArticleBoard/articleBoardSlice';

export const ArticleVoteRate = (props) => {
    const { voteRate, articleId } = props;
    const [lastVote, setLastVote] = useState(null); // we want our user to be able to upVote/downVote only once per article
    const dispatch = useDispatch();
    
    const handleIncrement = () => {
        if (lastVote === null) {
            dispatch(incrementArticleVoteRate({ articleId }));
            setLastVote('increment');
        } else if (lastVote === 'decrement') {
            dispatch(incrementArticleVoteRate({ articleId }));
            setLastVote(null);
        }
       
      };
    
      const handleDecrement = () => {
        if (lastVote === null) {
            dispatch(decrementArticleVoteRate({ articleId }));
            setLastVote('decrement')
        } else if (lastVote === 'increment') {
            dispatch(decrementArticleVoteRate({ articleId }));
            setLastVote(null)
        }
        
      };





    return (
        <div className={styles.voterate__container}>
            <div>
                <i onClick={handleIncrement} className={`${styles.voterate__arrow} ${styles.voterate__up}`}></i>
            </div>
            <p className={styles.voterate__number}>{voteRate}</p>
            <div>
                <i onClick={handleDecrement}  className={`${styles.voterate__arrow} ${styles.voterate__down}`}></i>
            </div>
        </div>
    )
}