import { productStats } from "../../../utils/constants.js";
import {
  decoratorOne as decorator,
  underlineImgUrl,
  globeImgUrl,
} from "../../../utils/imageUrls.js";

function HomeAboutSection() {
  return (
    <section className="relative bg-white pt-16 pb-8 w-full z-10 space-y-8">
      <div className="container w-full h-full text-center">
        <div className="space-y-6">
          <img
            src={decorator}
            draggable={false}
            alt="decorator"
            className="w-8 mx-auto"
          />
          <p className="uppercase tracking-[0.5rem]">Why choose us</p>
          <h2 className="text-[2.8rem] max-w-5xl mx-auto leading-[3.5rem]">
            We’re not just another URL shortener. Our platform is built with a
            focus on reliability, user experience, and detailed analytics. Join
            thousands of users who trust us to simplify and amplify their
            digital presence.
          </h2>
        </div>

        <img
          src={underlineImgUrl}
          alt="underline"
          className="mx-auto h-[100px]"
          draggable={false}
        />

        <div className="flex items-center justify-evenly gap-[1px] bg-zinc-300 mx-auto max-w-[1000px]">
          {productStats.map((data, id) => (
            <div key={id} className="relative w-full bg-white z-10">
              <p className="-z-10 text-zinc-100 text-[12rem] leading-[9rem] font-black absolute left-[15%] -top-[20%]">
                #
              </p>
              <p
                style={{ WebkitTextStroke: "1px black" }}
                className="font-black text-transparent text-[6rem] leading-[6rem]"
              >
                {data.no}
              </p>
              <p className="uppercase">{data.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[300px] mx-auto ">
        <img src={globeImgUrl} alt="glove image" draggable={false} />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[15%] bg-zinc-100 -z-10"></div>
    </section>
  );
}

export default HomeAboutSection;
