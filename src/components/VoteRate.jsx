import React, { useState } from 'react';
import styles from '../css/article.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { incrementVoteRate, decrementVoteRate, selectAllArticles } from '../features/ArticleBoard/articleBoardSlice';

export const VoteRate = (props) => {
    const { voteRate, articleId } = props;
    const [lastVote, setLastVote] = useState(null); // we want our user to be able to upVote/downVote only once per article
    const dispatch = useDispatch();
    
    const handleIncrement = () => {
        if (lastVote !== 'increment') {
            dispatch(incrementVoteRate({ articleId }));
            setLastVote('increment');
        }
       
      };
    
      const handleDecrement = () => {
        if (lastVote !== 'decrement') {
            dispatch(decrementVoteRate({ articleId }));
            setLastVote('decrement')
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