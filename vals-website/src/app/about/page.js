"use client";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Contact from "../components/contact";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="text-center w-full lg:w-1/2 mx-auto pt-20">
        <img className="w-60 pb-5 mx-auto" src="/assets/_MG_0075.png" />
        <p className="font-bold leading-loose pb-3 text-4xl">
          Hi! I'm Val Bui.
        </p>
        <p className="text-xl text-left px-8 mx-auto leading-normal lg:leading-normal  lg:text-3xl">
          Graphic Designer with over 6 years of experience in the creative
          design process. Proven experience within developmental processes and
          managerial positions. Specializing in custom branding and building
          strong connections. My passion for design and my dedication to
          excellence leaves a lasting impression with clients.
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
                href="/Resume.pdf"
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
