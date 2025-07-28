import Image from "next/image";
import { DemoLogo } from "../../../public";
import React from "react";
import Marquee from "react-fast-marquee";

const ClientsMarquee = [
  { logoimage: DemoLogo },
  { logoimage: DemoLogo },
  { logoimage: DemoLogo },
  { logoimage: DemoLogo },
  { logoimage: DemoLogo },
  { logoimage: DemoLogo },
  { logoimage: DemoLogo },
  { logoimage: DemoLogo },
  { logoimage: DemoLogo },
  { logoimage: DemoLogo },
];

const Clients = () => {
  return (
    <div>
      <Marquee gradient gradientColor="#000">
        {ClientsMarquee.map((client, index) => (
          <Image
            key={index}
            src={client.logoimage}
            className="object-cover "
            alt={`Client logo ${index + 1}`}
            
          />
        ))}
      </Marquee>
    </div>
  );
};

export default Clients;
