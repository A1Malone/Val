"use client"
import Nav from "./components/nav";
import Footer from "./components/footer"
import Grid from "./components/grid";
import { projects } from "./constant";
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import {VaraText} from "./components/VaraText";
import {VaraTextt} from "./components/VaraText1";
import {VaraTexttt} from "./components/VaraText2";
import {VaraTextttt} from "./components/VaraText3";
const mainImg = "/assets/Portfolio_and_Website_Cover.png";


export default function Home() {
  return (
    <>
    <section className="h-screen">
      <div className="flex items-center h-screen w-full absolute">
        <div className="mx-auto">
      <ParallaxProvider>
        <Parallax speed={-15}>
      <h1 className="text-7xl font-bold md:text-9xl lg:text-[18rem] fadeInUp-animation text-hmpgBauk">VAL BUI</h1>
      
      </Parallax>

      </ ParallaxProvider>

        </div>
      </div>
      <div className="flex items-end h-full absolute">
        <div className="mb-10 ml-5 lg:mb-20 lg:ml-40">
          <div className="flex flex-row text-xl">
            <div ><p className="text-hmpgBauk">Graphic Design</p></div>
            <div className="mx-2"> | </div>
            <div ><p className="text-hmpgBauk">Photography</p></div>
            </div>
          </div>
        </div>
        
        <div className="absolute inset-x-0" >
          <Nav/>
        </div>
    </section>
    <section className="h-full lg:h-[30rem] lg:h-[50rem] flex justify-content-center">
    {/*<div className="mx-auto my-auto w-4/5">*/}
     <div className="mx-auto my-auto h-full w-4/5 flex flex-col lg:flex-row items-center">
        
      <p className="text-left text-georgia w-[100%] text-4xl lg:w-[36%] lg:text-4xl">
        Val Bui is a multidisciplinary Graphic Designer & Photographer. Born and raised in New Jersey,
        USA, she is committed to
        exceeding expectations. 
      </p>
      <video
              autoPlay
              muted
              playsInline
              className=" md:w-1/2 lg:ml-64 w-full lg:w-4/12"
            >
              <source
                src={`/assets/writing.mp4`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

      </div>
    </section>
    
    <hr class=" mx-auto w-4/5 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
    <h2 className="uppercase text-bold text-hmpgBauk my-[20%] lg:my-[10%] text-6xl lg:text-8xl text-center">Projects</h2>
      <div className="gap-0 columns-1 md:columns-2">
      {
        projects.map((nProject, i) => (
          <Grid img={nProject.img || nProject.mainImg } name={nProject.truename || nProject.name} filename={nProject.name} link={`/portfolio/page/${nProject.link}`} key={i} />
        ))
      }
      </div>
    <Footer />
    </>
  );
}
7;
