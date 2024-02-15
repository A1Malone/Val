"use client";
import Nav from "../components/nav";
import Footer from "../components/footer";
import {gallery} from "../constant"

export default function Home() {
  return (
    <>
      <Nav />
      <div className="w-full">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          
        {
          gallery.map((nPhotos, i) => (
            <img className="galleryImg" src={`/assets/gallery/${nPhotos.img}`} key={i} />    
          ))
        }

        </div>
      </div>
      <Footer />
    </>
  );
}
