import Nav from "./components/nav";
import Footer from "./components/footer"
import Grid from "./components/grid";
import { projects } from "./constant";
const mainImg = "/assets/Portfolio_and_Website_Cover.png";


export default function Home() {
  return (
    <>
    <section className="h-screen">
      <div className="flex items-center h-screen w-full absolute">
      <h1 className="text-7xl font-bold mx-auto lg:text-[11rem] fadeInUp-animation text-hmpgBauk">VAL BUI</h1>
      </div>
      <div className="flex items-end h-screen absolute">
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
    <section className="h-[30rem] lg:h-[50rem] flex justify-content-center">
      <div className="mx-auto my-auto w-4/5">
        
      <p className="text-left text-georgia w-[100%] text-4xl lg:w-[36%] lg:text-4xl">
        Val Bui is a multidisciplinary Graphic Designer & Photographer. Born and raised in New Jersey,
        USA, she is committed to
        exceeding expectations. 
      </p>
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
