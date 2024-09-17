import { createContext, useState } from 'react'
import './App.css'
import Dialog from './components/Dialog'
import Pomodoro from './components/Pomodoro'


export const FontContext = createContext(null);

function App() {

  const [font, setFont] = useState("Kumbh Sans");
  const [theme, setTheme] = useState("rgba(248, 112, 112, 1)");
 
  return (
    <div className='container' style={{ fontFamily: `${font}, sans-serif` }}>
      <FontContext.Provider value={{ setFont, theme, setTheme }}>
        <Pomodoro />
        <Dialog />
      </FontContext.Provider>
    </div>
  )
}

export default App
