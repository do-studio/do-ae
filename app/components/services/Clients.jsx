import React from "react";
import { DemoLogo } from "../../../public";
import Image from "next/image";

const ClientsPhotos = [
  { logoimage: DemoLogo },
  { logoimage: DemoLogo },
  { logoimage: DemoLogo },
  { logoimage: DemoLogo },
];
const Clients = () => {
  return (
    <>
      <section className="bg-black rounded-3xl p-3 xl:p-5">
        <div className="flex flex-col gap-y-5 md:flex-row justify-between items-center">
          <div className="flex flex-wrap justify-center gap-1">
            {ClientsPhotos?.map((cl, i) => (
              <Image
                key={i}
                src={cl.logoimage}
                className="object-cover w-40 md:w-44"
                alt={`Client logo}`}
              />
            ))}
          </div>
          <p className="text-2xl text-center xl:text-left xl:text-4xl font-medium">OUR CLIENTS AROUND<br/> THE WORLD!</p>
        </div>
      </section>
    </>
  );
};

export default Clients;
