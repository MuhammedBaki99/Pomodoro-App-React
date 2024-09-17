import "./pomodoro.css"
import { useContext } from "react";
import { FontContext } from "../../App";

export default function Pomodoro() {
  const { theme } = useContext(FontContext);

  return (
    <div className="pomodoroContainer">
      <h1>pomodoro</h1>
      <div className="buttonList">
        <button style={{ backgroundColor: theme }}>pomodoro</button>
        <button>short break</button>
        <button>long break</button>
      </div>
      <div className="pomodoro">
        <div className="timeCount" style={{ backgroundColor: theme }}>
          <div className="timeText">
            <h1>17:59</h1>
            <button>PAUSE</button>
          </div>
        </div>
      </div>
    </div>
  )
}