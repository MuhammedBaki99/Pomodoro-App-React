import { createContext, useEffect, useState } from 'react'
import './App.css'
import Dialog from './components/Dialog'
import Pomodoro from './components/Pomodoro'


export const FontContext = createContext(null);

function App() {
  const [settings, setSettings] = useState([]);
  const [font, setFont] = useState("Kumbh Sans");
  const [theme, setTheme] = useState("rgba(248, 112, 112, 1)");
  const [pomodoro, setPomodoro] = useState(0);
  const [longbreak, setLongbreak] = useState(0);
  const [shortbreak, setShortbreak] = useState(0);

  useEffect(() => {
    console.log(settings);

  }, [settings]);

  function handleSettings() {
    setFont(settings.font);
    setTheme(settings.theme);
    setPomodoro(settings.pomodoro);
    setLongbreak(settings.shortbreak);
    setShortbreak(settings.longbreak);
  }


  return (
    <div className='container' style={{ fontFamily: `${font}, sans-serif` }}>
      <FontContext.Provider value={{ settings, setSettings, handleSettings, theme, pomodoro, longbreak, shortbreak }}>
        <Pomodoro />
        <Dialog />
      </FontContext.Provider>
    </div>
  )
}

export default App
