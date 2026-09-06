// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './styles/App.css'
import Clock from './components/Clock.jsx'
import DateComponent from './components/DateComponent.jsx'
import Temperature from './components/Temperature.jsx'
import Icon from './components/Icon.jsx'
// import Parent from './Parent.jsx'

function App() {
  // const [count, setCount] = useState(0)

  // return (
  //    <div>
  //     <p style={{ color: count % 2 === 0 ? "red" : "blue" }}>
  //       {count}
  //     </p>
  //     <button onClick={() => setCount(count + 1)}>
  //       Increase
  //     </button>
  //   </div>
  // )

  return (
    <div id="app">
      <div>
        <Icon />
      </div>
      <Clock />
      <div id="date-temperature">
        <DateComponent />
        <Temperature />
      </div>
    </div>
  )
}

export default App
