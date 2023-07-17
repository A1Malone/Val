import Nav from "../../components/nav";
import Grid from "../../components/grid"
import { projects } from "../../constant";

export default function CategoryPage({params}) {
  return (
    <>
    <Nav />
    <div className="gap-0 columns-1 md:columns-3">
    <Grid img={projects[2].mainImg} name={projects[2].name} link={`/portfolio/page/${projects[2].link}`} />
    <Grid img={projects[3].mainImg} name={projects[3].name} link={`/portfolio/page/${projects[3].link}`} />
    </div>
    <p>*this is an example*</p>
    </>
  );
}
