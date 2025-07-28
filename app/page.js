import Image from "next/image";
import { About, Banner,Clients,Ourworks } from "./components";

export default function Home() {
  return (
    <>
    <Banner/>
    <Clients/>
    <About/>
    <Ourworks/>
    </>
  );
}
