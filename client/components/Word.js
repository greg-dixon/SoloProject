import React from 'react'
import content from '../../contentGenerator';



const Word = (props) => { 
    return (
        <div id='wordDiv'>
            <p id='word'>{content.word}
                <br></br>{content.definition}
                <br></br>{content.quote}
            </p>
        </div>
    )
}

export default Word;
