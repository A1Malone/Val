'use client';
import React, { useEffect } from 'react';
import  Vara  from "vara"



export function VaraTextt({ text }) {
  useEffect(() => {
    var vara = new Vara(
      "#vara-container1",
      "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Parisienne/Parisienne.json",
      [
        {
          text: text,
          fontSize: 72,
          strokeWidth: 1.3,
        }
      ]
    )
  }, [])

  return <div id="vara-container1" ></div>
}