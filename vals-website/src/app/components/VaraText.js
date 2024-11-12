'use client';
import React, { useEffect } from 'react';
import  Vara  from "vara"



export function VaraText({ text }) {
  useEffect(() => {
    var vara = new Vara(
      "#vara-container",
      "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Pacifico/PacificoSLO.json",
      [
        {
          text: text,
          fontSize: 60,
          strokeWidth: 1.3,
        }
      ]
    )
  }, [])

  return <div id="vara-container" className="z-[20] w-[40rem]"></div>
}