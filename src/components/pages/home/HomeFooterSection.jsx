import { Link } from "react-router-dom";
import {
  decoratorThree as decorator,
  communicationOne as imageUrl,
} from "../../../utils/imageUrls";

function HomeFooterSection() {
  return (
    <section className="py-8 relative z-10 w-full bg-zinc-800 laptop:bg-transparent">
      <div className="container w-full h-full">
        <div className="pt-4 mobile:py-8 laptop:p-8 laptop:bg-zinc-800 text-white flex flex-col laptop:flex-row items-center justify-center gap-4">
          <div className="space-y-8 w-full laptop:max-w-lg text-center laptop:text-left laptop:p-12">
            <div className="space-y-4">
              <img
                loading="lazy"
                draggable={false}
                src={decorator}
                alt="decorator"
                className="relative w-12 mx-auto -rotate-12 invert laptop:hidden"
              />

              <p className="p-tag text-zinc-300">Why waiting</p>

              <h2 className="h2-bold mx-auto max-w-lg">
                Ready to simplify Your Links, Amplify Your Reach
              </h2>

              <p className="p-main text-zinc-300 mx-auto laptop:mx-0 max-w-xs">
                More than a link shortener. Sign Up Today and Start Shortening!
              </p>
            </div>

            <Link
              className="cta-secondary-white font-bold block mx-auto laptop:mx-0"
              to="/signup"
            >
              Get Started -{" "}
              <span className=" italic font-normal">Its free</span>
            </Link>
          </div>

          <div className="w-1/3 hidden laptop:block">
            <img
              src={imageUrl}
              alt="footer cta image"
              draggable={false}
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="hidden laptop:block absolute bottom-0 left-0 w-full h-1/2 bg-white -z-10 border-t border-zinc-300"></div>
    </section>
  );
}

export default HomeFooterSection;
