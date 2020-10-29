import React from 'react'
import content from '../../contentGenerator';

const Photo = (props) => {
    return (
       <div id='moiraDiv'><img id='moiraImg' src={content.photoLink}></img></div>
    )
}

export default Photo;