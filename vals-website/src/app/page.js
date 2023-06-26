import Image from "next/image";

import Example from "./components/nav";
import Grid from "./components/grid";

export default function Home() {
  return (
    <>
      <Example />
      <Grid />
      <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
    </>
  );
}
7;
