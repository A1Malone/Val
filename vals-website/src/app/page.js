import Nav from "./components/nav";
import Footer from "./components/footer"
import Grid from "./components/grid";
import { projects } from "./constant";
const mainImg = "/assets/Portfolio_and_Website_Cover.png";


export default function Home() {
  return (
    <>
    <Nav/>
    {/*<div className="absolute inset-x-0" >
      <Nav/>

    </div>*/}
    <section className="h-screen">
      <div className="flex items-center h-screen w-screen absolute">
      <h1 className="text-7xl font-bold mx-auto lg:text-9xl fadeInUp-animation">VAL BUI</h1>
      </div>
      <div className="flex items-end h-screen absolute">
        <div className="mb-10 ml-5 lg:mb-20 lg:ml-40">
          <div className="flex flex-row">
            <div className="fadeInUp-animation-slow"><p className="fadeInUp-animation">Graphic Design</p></div>
            <div className="mx-2"> | </div>
            <div className="fadeInUp-animation-slow"><p className="fadeInUp-animation">Graphic Design</p></div>
            </div>
          </div>
        </div>
    </section>
    <section>

    </section>
      {/* i removed bg-cover  */}
      <div className="min-h-screen bg-[length:100%_50%] bg-no-repeat bg-center md:bg-[length:100%_100%] lg:bg-contain" style={{backgroundImage: `url(${mainImg})`}}></div>
          
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
