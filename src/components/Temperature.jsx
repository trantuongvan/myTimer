import {Thermometer} from './Thermometer.jsx';
import '../styles/Temperature.css';
import '../styles/Font.css';
const Temperature = ({ isDarkMode }) => {

    return (
        <div id="temperature" className={isDarkMode ? 'dark-mode' : 'light-mode'}>
            <Thermometer className='temIcon' /> <p>28°C</p>
        </div>
    )
}

export default Temperature;