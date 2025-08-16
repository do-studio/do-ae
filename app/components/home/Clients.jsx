import Image from "next/image";
import { DemoLogo } from "../../../public";
import React from "react";
import Marquee from "react-fast-marquee";
import {ScrollText} from '../../components'

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
      <Marquee gradient gradientColor="#000" gradientWidth={100}>
        {ClientsMarquee.map((client, index) => (
          <Image
            key={index}
            src={client.logoimage}
            className="object-cover w-32 md:w-52"
            alt={`Client logo ${index + 1}`}
            
          />
        ))}
      </Marquee>
 {/* <ScrollText/> */}
    </div>
  );
};

export default Clients;
