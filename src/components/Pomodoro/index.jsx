import "./pomodoro.css"
import { useContext } from "react";
import React, { useEffect, useState } from "react";
import { FontContext } from "../../App";

export default function Pomodoro() {
  const { theme, pomodoro, longbreak, shortbreak } = useContext(FontContext);

  const [time, setTime] = useState(pomodoro * 60);
  const [toggle, setToggle] = useState("pomodoro");

  useEffect(() => {
    let timer = setInterval(() => {
      setTime((time) => {
        if (time === 0) {
          clearInterval(timer);
          return 0;
        } else return time - 1;
      });
    }, 1000);
  }, [pomodoro]);

  return (
    <div className="pomodoroContainer">

      <h1>pomodoro</h1>

      <div className="buttonList">
        <button onClick={() => { setTime(pomodoro * 60); setToggle("pomodoro") }}
          style={{ backgroundColor: `${toggle === "pomodoro" ? theme : ""}`, color: `${toggle === "pomodoro" ? "rgba(30, 33, 63, 1)" : "rgba(215, 224, 255, .4)"}` }}>pomodoro</button>
        <button onClick={() => { setTime(shortbreak * 60); setToggle("shortbreak") }}
          style={{ backgroundColor: `${toggle === "shortbreak" ? theme : ""}`, color: `${toggle === "shortbreak" ? "rgba(30, 33, 63, 1)" : "rgba(215, 224, 255, .4)"}` }}>short break</button>
        <button onClick={() => { setTime(longbreak * 60); setToggle("longbreak") }}
          style={{ backgroundColor: `${toggle === "longbreak" ? theme : ""}`, color: `${toggle === "longbreak" ? "rgba(30, 33, 63, 1)" : "rgba(215, 224, 255, .4)"}` }}>long break</button>
      </div>

      <div className="pomodoro">
        <div className="timeCount" style={{ backgroundColor: theme }}>
          <div className="timeText">
            <h1> {`${Math.floor(time / 60)}`}:
              {`${time % 60}`}</h1>
            <button>PAUSE</button>
          </div>
        </div>
      </div>

    </div>
  )
}