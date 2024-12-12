import { Link } from "react-router-dom";
import {
  decoratorThree as decorator,
  communicationOne as imageUrl,
} from "../../../utils/imageUrls";

function HomeFooterSection() {
  return (
    <section className="pt-16 pb-8 relative z-10 w-full">
      <div className="container w-full h-full">
        <div className=" px-20 bg-zinc-800 text-white flex items-center justify-around  gap-4">
          <div className="space-y-8">
            <div className="space-y-4">
              <img
                src={decorator}
                className="relative -left-8 w-12 -rotate-12 invert"
              />

              <p className="uppercase tracking-[0.5rem] text-zinc-300">
                Why are you waiting for
              </p>
              <h2 className="text-[2.8rem] font-bold max-w-lg leading-[3.5rem]">
                Ready to simplify Your Links, Amplify Your Reach
              </h2>

              <p className="text-zinc-300">
                More than a link shortener. Sign Up Today and Start Shortening!
              </p>
            </div>

            <Link
              className="bg-white text-black font-bold px-6 py-3 block w-fit"
              to="/signup"
            >
              Get Started -{" "}
              <span className=" italic font-normal">Its free</span>
            </Link>
          </div>

          <div className="w-[500px]">
            <img src={imageUrl} alt="hero image" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white -z-10 border-t border-zinc-300"></div>
    </section>
  );
}

export default HomeFooterSection;
