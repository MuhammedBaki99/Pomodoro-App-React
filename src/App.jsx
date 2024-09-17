import { createContext, useState } from 'react'
import './App.css'
import Dialog from './components/Dialog'
import Pomodoro from './components/Pomodoro'

const FontContext = createContext(null);

function App() {

  const [font, setFont] = useState("Kumbh Sans")

  return (
    <div className='container' style={{ fontFamily: `${font}, sans-serif` }}>
      <FontContext.Provider value={{ font, setFont }}>
        <Pomodoro />
        <Dialog />
      </FontContext.Provider>
    </div>
  )
}


export default App
