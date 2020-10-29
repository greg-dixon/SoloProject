import React from 'react'
import content from '../../contentGenerator';



const Photo = (props) => {
    console.log(content)
    return (
        <div id='wordDiv'>
            <p id='word'>{content.word}
                <br></br>{content.definition}
                <br></br>{content.quote}
            </p>
        </div>
    )
}

export default Photo;
