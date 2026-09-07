import './styles/App.css'
import Clock from './components/Clock.jsx'
import DateComponent from './components/DateComponent.jsx'
import Temperature from './components/Temperature.jsx'
import Icon from './components/Icon.jsx'
import AnalogClock from './components/AnalogClock.jsx'
import { useState } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };


  return (
    <div id="app" className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <div id="container">
        <div>
          <Icon isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </div>
        <Clock isDarkMode={isDarkMode} />
        <div id="date-temperature">
          <DateComponent isDarkMode={isDarkMode} />
          <Temperature isDarkMode={isDarkMode} />
        </div>
        <AnalogClock isDarkMode={isDarkMode} />
      </div>
    </div>
  )
}

export default App
