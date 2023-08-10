import React, { useState } from 'react';
import styles from '../css/article.module.css';
import { useDispatch } from 'react-redux';
import { incrementArticleVoteRate, decrementArticleVoteRate } from '../features/ArticleBoard/articleBoardSlice';

export const ArticleVoteRate = (props) => {
    const { voteRate, articleId } = props;
    const [lastVote, setLastVote] = useState(null); // component state to be sure our user can only upvote/downvote once per article
    const dispatch = useDispatch();
    
    const handleIncrement = ({ target }) => {
        if (lastVote === null) {
            dispatch(incrementArticleVoteRate({ articleId }));
            setLastVote('increment');
            target.style.border = 'solid green';
            target.style.borderWidth = '0 3px 3px 0';
        } else if (lastVote === 'decrement') {
            dispatch(incrementArticleVoteRate({ articleId }));
            setLastVote(null);
            target.style.border = 'solid white';
            target.style.borderWidth = '0 3px 3px 0';

            // select the downRate <i> to change its bg-color back to white
            const parentDiv = target.closest(`.${styles.voterate__container}`);
            const downArrow = parentDiv.querySelector(`.${styles.voterate__arrow}:not(.${styles.voterate__up})`);
            downArrow.style.border = 'solid white';
            downArrow.style.borderWidth = '0 3px 3px 0';
        }
       
      };
    
      const handleDecrement = ({ target }) => {
        if (lastVote === null) {
            dispatch(decrementArticleVoteRate({ articleId }));
            setLastVote('decrement')
            target.style.border = 'solid red';
            target.style.borderWidth = '0 3px 3px 0';
        } else if (lastVote === 'increment') {
            dispatch(decrementArticleVoteRate({ articleId }));
            setLastVote(null)
            target.style.border = 'solid white';
            target.style.borderWidth = '0 3px 3px 0';

            // same as before with upRate <i>
            const parentDiv = target.closest(`.${styles.voterate__container}`);
            const upArrow = parentDiv.querySelector(`.${styles.voterate__arrow}:not(.${styles.voterate__down})`);
            upArrow.style.border = 'solid white';
            upArrow.style.borderWidth = '0 3px 3px 0';
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