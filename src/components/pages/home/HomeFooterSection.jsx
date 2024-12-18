import { Link } from "react-router-dom";
import {
  decoratorThree as decorator,
  communicationOne as imageUrl,
} from "../../../utils/imageUrls";

function HomeFooterSection() {
  return (
    <section className="pt-16 pb-8 relative z-10 w-full">
      <div className="container w-full h-full">
        <div className=" px-20 py-4 pt-2 bg-zinc-800 text-white flex items-center justify-around  gap-4">
          <div className="space-y-8">
            <div className="space-y-4">
              <img
                draggable={false}
                src={decorator}
                alt="decorator"
                className="relative -left-8 w-12 -rotate-12 invert"
              />

              <p className="uppercase tracking-[0.5rem] text-zinc-300">
                Why are you waiting for
              </p>

              <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl max-w-lg ">
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
            <img src={imageUrl} alt="footer cta image" draggable={false} />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white -z-10 border-t border-zinc-300"></div>
    </section>
  );
}

export default HomeFooterSection;
