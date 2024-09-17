import "./pomodoro.css"

export default function Pomodoro() {
 
  return (
    <div className="pomodoroContainer">
      <h1>pomodoro</h1>
      <div className="buttonList">
        <button>pomodoro</button>
        <button>short break</button>
        <button>long break</button>
      </div>
      <div className="pomodoro">
        <div className="timeCount">
          <div className="timeText">
            <h1>17:59</h1>
            <button>PAUSE</button>
          </div>
        </div>
      </div>
    </div>
  )
}