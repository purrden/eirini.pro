// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import {useEffect} from "react";

function App() {

  useEffect(() => {
    // baseFrequency Control
    (function() {
      const bFControl = document.getElementById("bFControl") as HTMLInputElement;
      const bFSVG = document.querySelector("#bFControl ~ svg") as SVGElement;
      const effect = bFSVG?.querySelector("feTurbulence");
      const val = document.querySelector("#value");

      bFControl?.addEventListener("change", updatebFSVG);
      bFControl?.addEventListener("input", updatebFSVG);

      function updatebFSVG() {
        let v = bFControl.value;

        if (!val) {
          console.log();
          return
        }

        val.innerText = v;

        effect?.setAttribute("baseFrequency", v);
      }
    })();
  }, [])

  return (
      <div className="wrapper">
        <label htmlFor="bFControl">baseFrequency</label>
        <input type="range" min="0.01" max="1" value="0.05" step="0.01" id="bFControl"/> <span id="value">0.05</span>


        <svg width="250" height="250">

          <filter id='noise' x='0%' y='0%' width='100%' height='100%'>
            <feTurbulence baseFrequency="0.05"/>
          </filter>

          <rect x="0" y="0" width="100%" height="100%" filter="url(#noise)" fill="none"/>

        </svg>
      </div>
)
}

export default App
