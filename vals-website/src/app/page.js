import Nav from "./components/nav";
import Footer from "./components/footer"
import Grid from "./components/grid";
import { projects } from "./constant";


export default function Home() {
  return (
    <>
      <Nav />
      
          
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
