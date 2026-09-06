import { Thermometer } from 'lucide-react';
import '../styles/Temperature.css';
import '../styles/Font.css';
const Temperature = () => {

    return (
        <div id="temperature"> 
            <Thermometer className='temIcon' /> <p>28°C</p>
        </div>
    )
}

export default Temperature;