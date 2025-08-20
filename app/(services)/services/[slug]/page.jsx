import { serviceData } from "../../../components/services/data";

import {
  Banner,
  About,
  Clients,
  Service,
  Ourworks
} from "../../../components/services";
import { GetinTouch,Testimonials} from "../../../components";

export async function generateStaticParams() {
  return serviceData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const service = serviceData.find((s) => s.slug === slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: `${service.title} | Services`,
    description: service.desc,
  };
}

export default function ServicePage({ params }) {
  const { slug } = params;
  const service = serviceData.find((s) => s.slug === slug);

  if (!service) {
    return <div className="p-6 text-center">Service Not Found</div>;
  }

  return (
    <div className="bg-white">
      <div className="w-11/12 mx-auto py-10 space-y-5">
        <Banner service={service} />
        {/*  */}
        <About service={service} />
        {/*  */}
        <Clients service={service} />
        {/*  */}
        <Service service={service} />
        {/*  */}
        <Ourworks service={service} />
        {/*  */}
        <Testimonials />
      </div>
      {/*  */}
      <div className="bg-black rounded-[2rem] overflow-hidden">
        <GetinTouch />
      </div>
    </div>
  );
}
