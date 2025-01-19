import HTMLFlipBook from 'react-pageflip';
import {pages} from "../constant"

export default function Book(props) {
    

    return (
      <>
            <div className="flex justify-center">
          <HTMLFlipBook width={400}height={600} size="fixed">
             {
                      pages.map((page, i) => (
                        <div className="demoPage"> <img className="galleryImg" src={`/assets/portfolio/125-100 MFS PCD ANNIVERSARY/journal images/new/${page.img}`}  key={i}/> </div>   
                      ))
                    }
              </HTMLFlipBook>
      
            </div>
      </>
    );
  }