import { useState } from 'react';
import '../styles/DateComponent.css';
import '../styles/Font.css';

const DateComponent = ({ isDarkMode }) => {
    const [date, setDate] = useState(new Date());

    setInterval(() => {
        setDate(new Date());
    }, 1000);

    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const day = days[date.getDay()];

    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const month = months[date.getMonth()];

    const dayOfMonth = String(date.getDate()).padStart(2, '0');

    return (
        <div id="date" className={isDarkMode ? 'dark-mode' : 'light-mode'}>
            {day} {month} {dayOfMonth}
        </div>
    );
}

export default DateComponent;