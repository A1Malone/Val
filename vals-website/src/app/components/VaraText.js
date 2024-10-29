'use client';
import  Vara  from "vara"


export default function VaraText(props) {
  var vara = Vara(
    "#vara-container",
    "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
    [
      {
        text: props.text,
        fontSize: 40,
        strokeWidth: 0.7,
      },
    ]
  ) 
  vara()
  return (
    <>
    <div id="vara-container" className="z-[20]">props.text</div>
  
    </>
  );
}