import { useState } from 'react';
import '../styles/AnalogClock.css';

const AnalogClock = () => {
    const [time, setTime] = useState(new Date());

    setInterval(() => {
        setTime(new Date());
    }, 1000);

    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();

    const hourDegrees = (hour % 12) * 30 + minute * 0.5;
    const minuteDegrees = minute * 6;
    const secondDegrees = second * 6;

    return (
        <div id="analog-clock">
            <div className="hand hour" style={{ transform: `rotate(${hourDegrees}deg)` }}></div>
            <div className="hand minute" style={{ transform: `rotate(${minuteDegrees}deg)` }}></div>
            <div className="hand second" style={{ transform: `rotate(${secondDegrees}deg)` }}></div>
            <div className="center"></div>
            <div className="number number12">12</div>
            <div className="number number3">3</div>
            <div className="number number6">6</div>
            <div className="number number9">9</div>
        </div>
    );
}

export default AnalogClock;