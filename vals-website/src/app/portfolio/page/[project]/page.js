import { notFound } from 'next/navigation'
import Nav from "../../../components/nav";
import Footer from "../../../components/footer"
import Project from "../../../components/projectView";
import { projects } from "../../../constant";

export async function generateMetadata({ params }) {
  // read route params
  const link = params.project
 
  // fetch data  
  const verify = projects.find( e => e.link === link );
  console.log(`verify result:[${verify}]`);
  if (verify) {
    return {
      title: `Val Bui - ${verify.name}`,
      description: 'Striving to create a brand identity through graphic and UX design that leaves a lasting impression for your audience.',
    };
  } else {
    return {
      title: `Val Bui`,
      description: 'Striving to create a brand identity through graphic and UX design that leaves a lasting impression for your audience.',
    };

};
}

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
    <Project name={check().name} imgList={check().imgList} description={check().description}/>
    <Footer />
    </>
  );
}
