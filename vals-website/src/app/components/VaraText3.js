'use client';
import React, { useEffect } from 'react';
import  Vara  from "vara"



export function VaraTextttt({ text }) {
  useEffect(() => {
    var vara = new Vara(
      "#vara-container3",
      "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Shadows-Into-Light/shadows-into-light.json",
      [
        {
          text: text,
          fontSize: 72,
          strokeWidth: 1.3,
        }
      ]
    )
  }, [])

  return <div id="vara-container3" className="z-[20] w-[40rem]"></div>
}