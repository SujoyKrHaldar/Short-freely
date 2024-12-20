import { productStats } from "../../../utils/constants.js";
import {
  decoratorOne as decorator,
  underlineImgUrl,
  globeImgUrl,
} from "../../../utils/imageUrls.js";

function HomeAboutSection() {
  return (
    <section className="relative bg-white py-8 pt-16 w-full z-10 space-y-8">
      <div className="container w-full h-full text-center">
        <div className="space-y-6">
          <img
            src={decorator}
            draggable={false}
            alt="decorator"
            loading="lazy"
            className="w-8 mx-auto"
          />
          <p className="p-tag">Why choose us</p>
          <h2 className="text-3xl leading-[2.5rem] tablet:text-[2.8rem] tablet:max-w-5xl mx-auto tablet:leading-[3.5rem]">
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
          loading="lazy"
        />

        <div className="flex flex-col tablet:flex-row items-center justify-evenly gap-8 tablet:gap-[1px] tablet:bg-zinc-300 mx-auto w-full laptop:max-w-[1000px]">
          {productStats.map((data, id) => (
            <div
              key={id}
              className="relative w-fit tablet:w-full bg-white z-10"
            >
              <p className="-z-10 text-zinc-100 text-[10rem] laptop:text-[12rem] leading-[9rem] font-black absolute left-0 tablet:left-[15%] -top-[20%]">
                #
              </p>
              <p
                style={{ WebkitTextStroke: "1px black" }}
                className="font-black text-transparent text-[5rem] laptop:text-[6rem] leading-[6rem]"
              >
                {data.no}
              </p>
              <p className="uppercase">{data.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[300px] mx-auto ">
        <img
          src={globeImgUrl}
          alt="glove image"
          draggable={false}
          loading="lazy"
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[15%] mobile:h-[20%] bg-zinc-100 -z-10"></div>
    </section>
  );
}

export default HomeAboutSection;
