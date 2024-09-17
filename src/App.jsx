import { createContext, useEffect, useState } from 'react'
import './App.css'
import Dialog from './components/Dialog'
import Pomodoro from './components/Pomodoro'


export const FontContext = createContext(null);

function App() {
  const [settings, setSettings] = useState([]);


  const [font, setFont] = useState("Kumbh Sans");
  const [theme, setTheme] = useState("rgba(248, 112, 112, 1)");

  useEffect(() => {
    console.log(settings);

  }, [settings]);

  return (
    <div className='container' style={{ fontFamily: `${settings.font}, sans-serif` }}>
      <FontContext.Provider value={{ settings, setSettings }}>
        <Pomodoro />
        <Dialog />
      </FontContext.Provider>
    </div>
  )
}

export default App
