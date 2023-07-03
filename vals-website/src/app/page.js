import Nav from "./components/nav";
import Grid from "./components/grid";
import { projects } from "./constant";


export default function Home() {
  return (
    <>
      <Nav />
      
          
      <div className="gap-0 columns-1 md:columns-3">
        
      {
        projects.map((nProject, i) => (
          <Grid img={nProject.img} name={nProject.name} link={`/portfolio/page/${nProject.link}`} key={i} />
        ))
      }
      </div>
    </>
  );
}
7;
