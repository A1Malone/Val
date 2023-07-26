"use client";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Contact from "../components/contact"

export default function Home() {
  return (
    <>
      <Nav />
      <div className="text-center w-full lg:w-1/2 mx-auto pt-20">
        <img className="w-60 pb-5 mx-auto" src="/assets/_MG_0075.png" />
        <p className="font-bold leading-loose pb-3 text-4xl">Hi! I'm Val Bui.</p>
        <p className="text-xl leading-loose break-all px-8 mx-auto lg:w-[85%] lg:break-all lg:leading-loose lg:text-3xl">
          Based in New Jersey, USA, I am an independent branding artist and
          photographer. With over 6 years of designing, I've been able to work
          with clients around the world.
        </p>
        <div className="flex flex-col my-[15%] p-8 gap-4 lg:flex-row">
        <div className="flex items-center justify-center">
          <div className="flex flex-col">
          <a
            href="mailto:valbuiofficial@gmail.com"
            className="font-semibold text-xl lg:leading-loose lg:text-3xl"
          >
            valbuiofficial@gmail.com
          </a>
          <a
            href="/assets/Resume.pdf"
            target="_blank"
            className="font-semibold text-xl lg:leading-loose lg:text-3xl"
          >
            View My Resume{" "}
          </a>
          </div>
        </div>
          <div className="w-full">
            <div className="isolate py-6">
              <Contact />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
