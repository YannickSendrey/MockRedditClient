import React from "react";


export const Comment = (props) => {
    const { content, author } = props;

    return (
        <div>
            <p>{content}</p>
            <p>posted by {author}</p>
        </div>
    )
}