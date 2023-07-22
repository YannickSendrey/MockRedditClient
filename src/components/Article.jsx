import React from 'react';


export const Article = (props) => {
    const { id, title, voteRate, contentImg, contentText, author, publishDate, comNumber } = props;

    const alt = "Image illustrant l'article suivant : " + title;
    
    return (
        <section>
            <h2>{title}</h2>
            <img src={contentImg} alt={alt}/>
            <p>{contentText}</p>
            <div>
                <p>posted by {author}</p>
                <p>{publishDate}</p>
            </div>
        </section>
    )
    // voteRate et coms, on leur passe les props
    // tu récupères les props du stateful component ArticleBoard et tu set les valeurs après
}










