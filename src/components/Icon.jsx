import { Bell, Moon, Sun } from 'lucide-react';
import '../styles/Icon.css';
const Icon = ({ isDarkMode, toggleDarkMode }) => {
    return (
        <div id="icon" className={isDarkMode ? 'dark-mode' : 'light-mode'}>
            <Bell className="icon" />
            <button id="icon-mode" onClick={toggleDarkMode}>
                {isDarkMode ? <Moon className="icon" /> : <Sun className="icon" />}
            </button>
        </div>
    );
};
export default Icon;