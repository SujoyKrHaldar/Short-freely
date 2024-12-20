/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { productFeatures } from "../../../utils/constants";
import { decoratorTwo as decorator } from "../../../utils/imageUrls";

function HomeFeatureSection() {
  return (
    <section className="py-16 mobile:py-24">
      <div className="container space-y-8 laptop:space-y-16">
        <div className="max-w-3xl mx-auto text-center space-y-4 pb-8 laptop:pb-0">
          <img
            loading="lazy"
            src={decorator}
            draggable={false}
            alt="decorator"
            className="w-10 mx-auto"
          />
          <p className="p-tag">Our Platform</p>
          <h2 className=" h2-bold">
            Ready to simplify Your Links & Empowering Your Links with Advanced
            Features
          </h2>
          <p className="max-w-xl mx-auto p-main">
            All the products you need to build brand connections, manage links &
            QRs, connect with audiences everywhere, in a single unified
            platform.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-1 desktop:grid-cols-4 mobile:grid-cols-2">
          {productFeatures.map((data, id) => (
            <FeatureCard key={id} data={data} />
          ))}
        </div>

        <div className="flex flex-col w-full mobile:flex-row items-center gap-2 justify-center">
          <Link className="cta-primary-black" to="/dashboard/create">
            Get Started - <span className=" italic font-normal">Its free</span>
          </Link>
          <Link className="cta-secondary-white" to="#">
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
    <div className="p-6 pb-10 large-screen:py-10 w-full h-full bg-white border border-zinc-300 laptop:border-white laptop:hover:border-zinc-400 duration-150 text-center laptop:hover:scale-105 cursor-auto z-10 laptop:hover:z-30 laptop:hover:odd:rotate-2 laptop:hover:even:-rotate-2 laptop:hover:shadow-xl laptop:[&:nth-child(3)]:scale-105 laptop:[&:nth-child(3)]:border-zinc-400 laptop:[&:nth-child(3)]:z-20 laptop:[&:nth-child(3)]:-rotate-2 laptop:[&:nth-child(3)]:shadow-lg laptop:hover:[&:nth-child(3)]:shadow-xl">
      <img
        loading="lazy"
        src={data.imgUrl}
        alt={data.title}
        draggable={false}
        className="w-[70%] mobile:w-[80%] mx-auto"
      />
      <h3 className="h3-bold my-4">{data.title}</h3>
      <p className=" text-sm mobile:text-base">{data.description}</p>
    </div>
  );
};
