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
        I’m a Graphic Designer with over 6 years of experience in the creative design process. 
        I have proven experience within developmental processes and managerial positions. 
        I specialize in custom branding and building strong connections with my clients.
        </p>
        <p className="pt-4 text-xl text-left px-8 mx-auto leading-normal lg:leading-normal  lg:text-3xl "> 
        When I’m not designing, I do freelance photography! Portraits, landscapes, weddings, graduations, you name it! 

        </p>
        <div className="flex flex-col my-[15%] p-8 gap-4 lg:flex-row">
          <div className="flex items-center justify-center">
            <div className="flex flex-col text-start">
              <a
                href="mailto:valbuiofficial@gmail.com"
                className="font-semibold text-xl lg:leading-loose lg:text-xl"
              >
                valbuiofficial@gmail.com
              </a>
              <a
                href="/Resume.pdf"
                target="_blank"
                className="font-semibold text-xl lg:leading-loose lg:text-xl text-center rounded-full bg-transparent  hover:bg-slate-900 hover:text-white border border-black hover:border-transparent py-1 px-2 "
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
