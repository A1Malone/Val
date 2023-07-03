import Nav from "../../../components/nav";
import Project from "../../../components/projectView";
import { projects } from "../../../constant";

export default function PortfolioPage({params}) {
    const param = params.project;
    //const result = projects.find(({ name }) => name === `${param.toUpperCase() || param.toLowerCase() || param}` );
    const check = () => {
      //const link = param.replace(/-/g, ' ').toUpperCase();
      //console.log(`this is link the firs time:[${link}]`);
      const verify = projects.find( e => e.link === param );
      console.log(`this is verify the firs time:[${verify}]`);
      if (verify) {
        const result = verify;
        return result;
      } else {
        return (
          console.log(`this is wrong you used link ${param}`)
        )

    };
  }

  console.log(`you used ${param}`)
  console.log()
    console.log(`the result: ${JSON.stringify(check())}`)
  return (
    <>


      <Nav />
    <Project name={check().name} img={check().img}/>

    </>
  );
}
