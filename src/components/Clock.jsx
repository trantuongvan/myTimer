import { useState } from 'react';
import '../styles/Clock.css';
import '../styles/Font.css';

const Clock = () => {
    const [time, setTime] = useState(new Date());

    setInterval(() => {
        setTime(new Date());
    }, 1000);

    const hour = String(time.getHours()).padStart(2, '0');
    const minute = String(time.getMinutes()).padStart(2, '0');
    const second = String(time.getSeconds()).padStart(2, '0');

    return (
        <div id="clock">
            <span className="digit">{hour[0]}</span>
            <span className="digit">{hour[1]}</span>

            <span className="colon">:</span>

            <span className="digit">{minute[0]}</span>
            <span className="digit">{minute[1]}</span>

            <span className="colon">:</span>

            <span className="digit">{second[0]}</span>
            <span className="digit">{second[1]}</span>
        </div>
    );
}

export default Clock;