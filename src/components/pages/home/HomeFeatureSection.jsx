/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { productFeatures } from "../../../utils/constants";
import { decoratorTwo as decorator } from "../../../utils/imageUrls";

function HomeFeatureSection() {
  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="container space-y-16">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <img
            src={decorator}
            draggable={false}
            alt="decorator"
            className="w-10 mx-auto"
          />
          <p className="uppercase tracking-[0.5rem]">Our Platform</p>
          <h2 className="text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
            Ready to simplify Your Links & Empowering Your Links with Advanced
            Features
          </h2>
          <p className="max-w-lg mx-auto mt-4">
            All the products you need to build brand connections, manage links &
            QRs, connect with audiences everywhere, in a single unified
            platform.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-1 px-4 sm:px-0 xl:grid-cols-4 sm:grid-cols-2">
          {productFeatures.map((data, id) => (
            <FeatureCard key={id} data={data} />
          ))}
        </div>

        <div className="flex items-center gap-2 justify-center">
          <Link
            className="bg-black text-white px-6 py-3 border border-black"
            to="/dashboard/create"
          >
            Get Started - <span className=" italic font-normal">Its free</span>
          </Link>
          <Link
            className="bg-white border border-black px-6 py-3 cursor-pointer"
            to="#"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeFeatureSection;

const FeatureCard = ({ data }) => {
  return (
    <div className="p-6 py-10 w-full h-full bg-white border border-white hover:border-zinc-400 duration-150 text-center hover:scale-105 cursor-auto z-10 hover:z-30 hover:odd:rotate-2 hover:even:-rotate-2 hover:shadow-xl [&:nth-child(3)]:scale-105 [&:nth-child(3)]:border-zinc-400 [&:nth-child(3)]:z-20 [&:nth-child(3)]:-rotate-2 [&:nth-child(3)]:shadow-lg hover:[&:nth-child(3)]:shadow-xl">
      <img
        src={data.imgUrl}
        alt={data.title}
        draggable={false}
        className="w-[80%] mx-auto"
      />
      <h3 className="text-2xl font-bold my-4">{data.title}</h3>
      <p>{data.description}</p>
    </div>
  );
};
