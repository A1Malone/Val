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
      console.log(`verify result:[${JSON.stringify(verify)}] at place ${projects.indexOf(verify)}`);

      
      const next = (value) => {
        const place = projects.indexOf(verify);
        //console.log(place + "test" + JSON.stringify(projects[0].link))
        const right = place + 1;
        const left = place - 1;
        
        if (value == "right") {
          if ((right) > Number(projects.length)) {
            //console.log(JSON.stringify(projects[0].link) + " sadsf")
            
        //console.log(JSON.stringify(projects[0]) + "help" + projects.length)
            return projects[0].link
          } else {
            return projects[right].link
          }
        } 

        if (value == "left") {
          if ((left) < 0) {
            // will need to fix this for the lnegth of the array and not the exact number
            return  projects[projects.length - 1].link
          } else {
            return  projects[left].link
          }
        } 
      }
      console.log(JSON.stringify(next('left')) + " next is now")
      
      if (verify) {
        return <Project name={verify.name} imgList={verify.imgList} description={verify.description} right={verify.right} left={verify.left} />;
      } else {
        return (
          //console.log(`this is wrong you used link ${param}`),
          notFound()
        )

    };
  }
  console.log(projects.length);
  return (
    <>


      <Nav />
      {check()}
   <Footer />
    </>
  );
}
