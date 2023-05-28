import React from "react";

function Article ({title, date ="January 1, 1970", preview, minutes}) {
    console.log(minutes);
    let emojiText = "";
    if(minutes < 30) {
        for(let i = 0; i < minutes/5; i++) {
            emojiText += "☕️";
        }
    }
    else {
        for(let i = 0; i < minutes/10; i++) {
            emojiText += "🍱";
        }
    }

    emojiText = ` ∙ `+ emojiText + ` ${minutes} min read`

    return (
        <article>
            <h3>{title}</h3>
            <small>{date}{emojiText}</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article