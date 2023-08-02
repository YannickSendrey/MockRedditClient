import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { incrementCommentVoteRate, decrementCommentVoteRate } from "../features/ArticleBoard/articleBoardSlice";
import styles from '../css/DetailedArticle.module.css';

export const CommentVoteRate = (props) => {
    const { articleId, commentId, voteRate } = props;
    const [lastVote, setLastVote] = useState(null); // we want our user to be able to upVote/downVote only once per article
    const dispatch = useDispatch();

    const handleIncrement = () => {
        if (lastVote === null) {
            dispatch(incrementCommentVoteRate({ articleId, commentId }));
            setLastVote('increment');
        } else if (lastVote === 'decrement') {
            dispatch(incrementCommentVoteRate({ articleId, commentId }));
            setLastVote(null);
        }
       
      };
    
      const handleDecrement = () => {
        if (lastVote === null) {
            dispatch(decrementCommentVoteRate({ articleId, commentId }));
            setLastVote('decrement')
        } else if (lastVote === 'increment') {
            dispatch(decrementCommentVoteRate({ articleId, commentId }));
            setLastVote(null)
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