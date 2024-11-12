'use client';
import React, { useEffect } from 'react';
import  Vara  from "vara"



export function VaraTexttt({ text }) {
  useEffect(() => {
    var vara = new Vara(
      "#vara-container2",
      "https://cdn.jsdelivr.net/npm/vara@1.4.0/fonts/Satisfy/SatisfySL.json",
      [
        {
          text: text,
          fontSize: 72,
          strokeWidth: 1.3,
          color:"green"
        }
      ]
    )
  }, [])

  return <div id="vara-container2" ></div>
}