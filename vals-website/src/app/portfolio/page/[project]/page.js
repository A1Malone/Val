import { notFound } from 'next/navigation'
import Nav from "../../../components/nav";
import Project from "../../../components/projectView";
import { projects } from "../../../constant";

export default function PortfolioPage({params}) {
    const param = params.project;
    const check = () => {
      const verify = projects.find( e => e.link === param );
      console.log(`verify result:[${verify}]`);
      if (verify) {
        return verify;
      } else {
        return (
          //console.log(`this is wrong you used link ${param}`),
          notFound()
        )

    };
  }
    console.log(`the result: ${JSON.stringify(check())}`)
  return (
    <>


      <Nav />
    <Project name={check().name} img={check().img} description={check().description}/>

    </>
  );
}
