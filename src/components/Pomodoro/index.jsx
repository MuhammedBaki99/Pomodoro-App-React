import "./pomodoro.css"
import { useContext } from "react";
import React, { useEffect, useState } from "react";
import { FontContext } from "../../App";

export default function Pomodoro() {
  const { theme, pomodoro, longbreak, shortbreak } = useContext(FontContext);

  const [time, setTime] = useState(pomodoro * 60);
  const [toggle, setToggle] = useState("pomodoro");
  const [isStarted, setIsStarted] = useState(true);

  useEffect(() => {
    let timer;

    if (isStarted) {
      timer = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 0) {
            clearInterval(timer);
            return 0;
          } else return prevTime - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);

  }, [isStarted, time]);

  return (
    <div className="pomodoroContainer">

      <h1>pomodoro</h1>

      <div className="buttonList">
        <button onClick={() => { setTime(pomodoro * 60); setToggle("pomodoro"); setIsStarted(true); }}
          style={{ backgroundColor: `${toggle === "pomodoro" ? theme : ""}`, color: `${toggle === "pomodoro" ? "rgba(30, 33, 63, 1)" : "rgba(215, 224, 255, .4)"}` }}>pomodoro</button>
        <button onClick={() => { setTime(shortbreak * 60); setToggle("shortbreak"); setIsStarted(true); }}
          style={{ backgroundColor: `${toggle === "shortbreak" ? theme : ""}`, color: `${toggle === "shortbreak" ? "rgba(30, 33, 63, 1)" : "rgba(215, 224, 255, .4)"}` }}>short break</button>
        <button onClick={() => { setTime(longbreak * 60); setToggle("longbreak"); setIsStarted(true); }}
          style={{ backgroundColor: `${toggle === "longbreak" ? theme : ""}`, color: `${toggle === "longbreak" ? "rgba(30, 33, 63, 1)" : "rgba(215, 224, 255, .4)"}` }}>long break</button>
      </div>

      <div className="pomodoro">
        <div className="timeCount" style={{
          backgroundColor: theme,
        }}>
          <div className="timeText">
            <h1> {`${Math.floor(time / 60)}`}:
              {`${time % 60}`}</h1>
            <button onClick={() => setIsStarted(!isStarted)}>
              {isStarted ? "PAUSE" : "RESUME"}
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}
