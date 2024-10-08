import React from "react";
import { useContext, useRef } from "react";
import { FontContext } from "../../App";
import "./dialog.css"

export default function Dialog() {
  const { settings, setSettings, handleSettings, theme } = useContext(FontContext);
  const dialogRef = useRef({});

  function handleClick() {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  }

  function close() {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  }

  return (
    <>
      <button className="dialogbtn" onClick={() => handleClick()}> <img src="./dialog.png" /></button>
      <dialog ref={(e) => (dialogRef.current = e)}>
        <div className="dialogContainer">
          <div className="dialogHeader">
            <h1>Ayarlar</h1>
            <div className="closeBtn">
              <button onClick={() => close()}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.5">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.364 2.0502L11.9497 0.635986L6.99999 5.58573L2.05025 0.635986L0.636032 2.0502L5.58578 6.99995L0.636032 11.9497L2.05025 13.3639L6.99999 8.41416L11.9497 13.3639L13.364 11.9497L8.41421 6.99995L13.364 2.0502Z" fill="#1E213F" />
                  </g>
                </svg>
              </button>
            </div>
          </div>
          <hr />
          <div className="settingsContainer">
            <div className="time">
              <h2>ZAMAN ( DAKİKA )</h2>

              <div className="timeinputs">
                <div className="inputCol">
                  <p>pomodoro</p>
                  <input type="number" onChange={(e) => setSettings({ ...settings, pomodoro: e.target.value })} />
                </div>
                <div className="inputCol">
                  <p>short break</p>
                  <input type="number" onChange={(e) => setSettings({ ...settings, shortbreak: e.target.value })} />
                </div>
                <div className="inputCol">
                  <p>long break</p>
                  <input type="number" onChange={(e) => setSettings({ ...settings, longbreak: e.target.value })} />
                </div>
              </div>
            </div>
            <hr />
            <div className="font">
              <h2>FONT</h2>
              <div className="fontcheck">
                <input type="radio" name="font" onClick={() => setSettings({ ...settings, font: "khumb-sans" })} />
                <input type="radio" name="font" onClick={() => setSettings({ ...settings, font: "roboto" })} />
                <input type="radio" name="font" onClick={() => setSettings({ ...settings, font: "space mono" })} />
              </div>
            </div>
            <hr />

            <div className="color">
              <h2>COLOR</h2>
              <div className="colorchoices">
                <input type="radio" name="theme" onClick={() => setSettings({ ...settings, theme: "#F87070" })} />
                <input type="radio" name="theme" onClick={() => setSettings({ ...settings, theme: "#70F3F8" })} />
                <input type="radio" name="theme" onClick={() => setSettings({ ...settings, theme: "#D881F8" })} />
              </div>
            </div>

          </div>

          <button className="apply" onClick={() => { handleSettings(); close() }} style={{ backgroundColor: theme }}>Uygula</button>
        </div>
      </dialog>

    </>
  );
}