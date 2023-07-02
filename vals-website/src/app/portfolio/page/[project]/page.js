import Nav from "../../../components/nav";
import Project from "../../../components/projectView";

const projects = [
    {
      img: "1.jpg",
      name: "Val Bui",
    },
    {
      img: "2.jpg",
      name: "lOADING SCREENS",
    },
    {
      img: "3.jpg",
      name: "lOADING SCREENS IN ACTION",
    },
    {
      img: "4.jpg",
      name: "THE METHOD OF SMAPLING",
    },
    {
      img: "5.jpg",
      name: "SAMPLING IS A METHOD",
    },
    {
      img: "6.jpg",
      name: "WAVES",
    },
    {
      img: "7.jpg",
      name: "STEDMAN GALLERY THESIS SHOW",
    },
    {
      img: "8.jpg",
      name: "VMPA SENIOR THESIS SHOW",
    },
    {
      img: "9.jpg",
      name: "PHILLY FACES",
    },
    {
      img: "10.jpg",
      name: "LIVE LAUGH DIE",
    },
    {
      img: "11.jpg",
      name: "GHOSTED",
    },
    {
      img: "12.jpg",
      name: "THE SCIENCE OF SLEEP",
    },
    {
      img: "13.jpg",
      name: "CULTURE CONNECT",
    },
    {
      img: "14.jpg",
      name: "THE PREVIEW",
    },
    {
      img: "15.jpg",
      name: "IDK THE NAME BUT IT LOOKS COOL..... ITS A PREVIEW ANYWAYS... HAVE FUN! :)",
    },
  ];

export default function PortfolioPage({params}) {
    const param = params.project;
    const result = projects.find(({ name }) => name === param.toUpperCase() );
    console.log(result)
    console.log(String(param))
  return (
    <>


      <Nav />
      <Project name={result.name} img={result.img} />
    </>
  );
}
