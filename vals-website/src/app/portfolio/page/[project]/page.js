import Nav from "../../../components/nav";
import Project from "../../../components/projectView";
import { projects } from "../../../constant";

export default function PortfolioPage({params}) {
    const param = params.project;
    const result = projects.find(({ name }) => name === String(param.toUpperCase()) || String(param.toLowerCase()) );
    /*const check = () => {
      if (projects.find(({ name }) => name === String(param.toUpperCase()) || String(param.toLowerCase()) )) {
        const result = projects.find(({ name }) => name === String(param.toUpperCase()) || String(param.toLowerCase()) );
        return result;
      } else {
        return result.name = "wrong";
      }

    };*/
    console.log(result)
    console.log(String(param))
  return (
    <>


      <Nav />
      <Project name={result.name} img={result.img} />
    </>
  );
}
