import { Link2 } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userProfileImgs } from "../../../utils/constants.js";
import {
  linkSharingImgUrl as imageUrl,
  arrowImgUrl,
  browserWindowImgUrl,
} from "../../../utils/imageUrls.js";

function HomeLandingSection() {
  const [url, setUrl] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!url) return null;
    navigate(`/dashboard/create?longurl=${url}`);
  };

  return (
    <section className="relative z-20 w-full tablet:h-full pt-[12rem] tablet:pt-[10rem] pb-0 mobile:pb-8 flex flex-col items-center justify-center">
      <div className="container w-full h-full flex items-center justify-center">
        <div className="text-center">
          <p className="p-tag">Simplify Your Links</p>
          <h1 className="text-[2.8rem] leading-[2.8rem] small-mobile:text-[3.4rem] small-mobile:leading-[3.5rem] tablet:text-[4rem] laptop:text-[4.5rem] laptop:leading-[4rem] desktop:text-[4.8rem] desktop:leading-[4.6rem] max-w-4xl mt-2 mb-6 font-bold">
            Transform Long Urls, into Tiny Links Instantly!
          </h1>
          <p className="p-main max-w-2xl mx-auto">
            Shorten long URLs, track performance, & manage all your links in one
            place. Your go to solution for smarter sharing. Paste your long link
            below.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col laptop:flex-row items-stretch justify-center mt-8 border-2 border-black w-full laptop:w-fit mx-auto overflow-hidden bg-white"
          >
            <div className="block laptop:flex items-center">
              <div className="hidden laptop:block border-r-2 border-black p-4 h-full bg-zinc-100">
                <Link2 size={24} />
              </div>
              <input
                name="longUrl"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                type="url"
                className="py-4 laptop:py-3 px-5 outline-none w-full laptop:w-[350px] h-full bg-white text-center laptop:text-left"
                placeholder="https://www.example.com/long-url"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-4 laptop:py-3 text-white bg-zinc-800 w-full text-center"
            >
              <p>
                Generate Link -{" "}
                <span className=" italic font-light">Its free</span>
              </p>
            </button>
          </form>

          <div className="relative flex items-center justify-center gap-2 mt-6">
            <div className="flex -space-x-5 rtl:space-x-reverse">
              {userProfileImgs.map((img) => (
                <img
                  key={img.url}
                  className="w-10 h-10 border-4 shadow-md border-white rounded-full"
                  src={img.url}
                  alt="Demo users"
                  draggable={false}
                  loading="lazy"
                />
              ))}
            </div>
            <p className="text-left text-sm mobile:text-base">
              1K+ people already using it.
            </p>
            <div className="relative -top-2 w-16 opacity-35">
              <img src={arrowImgUrl} alt="arrow" draggable={false} />
            </div>
          </div>
        </div>
      </div>

      <div className="relative tablet:mt-16 w-full flex items-center p-10 laptop:p-16">
        <img
          src={imageUrl}
          draggable={false}
          loading="lazy"
          alt="hero image"
          className="w-full tablet:max-w-sm h-auto mx-auto"
        />
        <img
          src={browserWindowImgUrl}
          alt="window border"
          className="hidden tablet:block absolute top-0 translate-x-1/2 right-1/2 w-[80%] tablet:max-w-2xl opacity-80"
          draggable={false}
          loading="lazy"
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1/6 mobile:h-1/4 bg-white -z-10"></div>
    </section>
  );
}

export default HomeLandingSection;
