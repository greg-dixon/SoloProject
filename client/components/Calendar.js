import React from 'react'
import content from '../../contentGenerator';

const Photo = () => {
    return (
        <div id='calendarDiv'>
            <img id='calendarImg' src={'https://www.freeiconspng.com/thumbs/calendar-icon-png/blank-calendar-icon-png-30.png'}></img>
            <p id='calendarDay' class = 'calendarText'>{content.day}</p>
                <p id='calendarDate' class='calendarText'>{content.month + " " + content.date}</p>
        </div>
    )
}

export default Photo;

