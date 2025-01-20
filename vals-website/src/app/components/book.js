"use client"
import HTMLFlipBook from 'react-pageflip';
import {pages} from "../constant"

export default function Book(props) {
    

    return (
      <>
            <div className="w-full mb-[96px]">
          <HTMLFlipBook width={700} height={500} sixe="stretch" autoSize="true">
             {
                      pages.map((page, i) => (
                        <div className="demoPage"> <img className="lg:w-full w-1/2 h-full" src={`/assets/portfolio/125-100 MFS PCD ANNIVERSARY/journal images/new/${page.img}`}  key={i}/> </div>   
                      ))
                    }
              </HTMLFlipBook>

              <p className='mt-2'>please swipe to the next page.</p>
      
            </div>
      </>
    );
  }