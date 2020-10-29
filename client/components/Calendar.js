import React from 'react'

const dayCache = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday',
};

const monthCache = {
    1: 'January',
    2: 'Febuary',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December',
};

const Calendar = () => {
    // const [date, setDate] = useState(new Date())

    const dateCheck = new Date();
    const month = monthCache[dateCheck.getMonth()];
    const date = dateCheck.getDate();
    const day = dayCache[dateCheck.getDay()];
    return (
        <div id='calendarDiv'>
            <img id='calendarImg' src={'https://www.freeiconspng.com/thumbs/calendar-icon-png/blank-calendar-icon-png-30.png'}></img>
            <p id='calendarDay' class = 'calendarText'>{day}</p>
                <p id='calendarDate' class='calendarText'>{month + " " + date}</p>
        </div>
    )
}

export default Calendar;

