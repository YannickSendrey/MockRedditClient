import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { incrementCommentVoteRate, decrementCommentVoteRate } from "../features/ArticleBoard/articleBoardSlice";
import styles from '../css/DetailedArticle.module.css';

export const CommentVoteRate = (props) => {
    const { articleId, commentId, voteRate } = props;
    const [lastVote, setLastVote] = useState(null);  // component state to be sure our user can only upvote/downvote once per comment
    const dispatch = useDispatch();

    const handleIncrement = ({ target }) => {
        if (lastVote === null) {
            dispatch(incrementCommentVoteRate({ articleId, commentId }));
            setLastVote('increment');
            target.style.border = 'solid green';
            target.style.borderWidth = '0 3px 3px 0';
        } else if (lastVote === 'decrement') {
            dispatch(incrementCommentVoteRate({ articleId, commentId }));
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
            dispatch(decrementCommentVoteRate({ articleId, commentId }));
            setLastVote('decrement')
            target.style.border = 'solid red';
            target.style.borderWidth = '0 3px 3px 0';
        } else if (lastVote === 'increment') {
            dispatch(decrementCommentVoteRate({ articleId, commentId }));
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
                <i className={`${styles.voterate__arrow} ${styles.voterate__up}`} onClick={handleIncrement}></i>
            </div>

            <p className={styles.voterate__number}>{voteRate}</p>
            
            <div>
                <i className={`${styles.voterate__arrow} ${styles.voterate__down}`} onClick={handleDecrement}></i>
            </div>
        </div>
      )

}