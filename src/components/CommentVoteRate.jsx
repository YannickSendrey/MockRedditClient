import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { incrementCommentVoteRate, decrementCommentVoteRate } from "../features/ArticleBoard/articleBoardSlice";

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
        <div>
            <div>
                <i>o_o</i>
            </div>
            <p>{voteRate}</p>
            <div>
                <i>u_u</i>
            </div>
        </div>
      )

}