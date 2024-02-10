"use client";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="w-full">
      <img className="galleryImg" src={`/assets/gallery/_MG_0237.jpg`} />
      <img className="galleryImg" src={`/assets/gallery/3.jpg`} />
      <img className="galleryImg" src={`/assets/gallery/4.jpg`} />
      <img className="galleryImg" src={`/assets/gallery/9.jpg`} />
      </div>
      <Footer />
    </>
  );
}
