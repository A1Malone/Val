import Nav from "./components/nav";
import Footer from "./components/footer"
import Grid from "./components/grid";
import { projects } from "./constant";
const mainImg = "/assets/Portfolio_and_Website_Cover.png";


export default function Home() {
  return (
    <>
    <div className="relative lg:absolute" >
      <Nav/>

    </div>
      {/* i removed bg-cover  */}
      <div className="min-h-screen bg-[length:100%_45%] bg-no-repeat bg-center md:bg-[length:100%_100%] lg:bg-contain" style={{backgroundImage: `url(${mainImg})`}}></div>
          
      <div className="gap-0 columns-1 md:columns-2">
        
      {
        projects.map((nProject, i) => (
          <Grid img={nProject.img || nProject.mainImg } name={nProject.name} link={`/portfolio/page/${nProject.link}`} key={i} />
        ))
      }
      </div>
    <Footer />
    </>
  );
}
7;
