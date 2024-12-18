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
    <section className="relative z-20 w-full h-full pt-[10rem] pb-2 flex flex-col items-center justify-center">
      <div className="text-center">
        <p className="uppercase tracking-[0.5rem]">Simplify Your Links</p>

        <h1 className="text-[4.8rem] leading-[5.3rem] max-w-5xl mt-2 mb-6 font-bold">
          Transform Long Urls, into Tiny Links Instantly!
        </h1>

        <p className="text-lg max-w-2xl mx-auto">
          Shorten long URLs, track performance, & manage all your links in one
          place. Your go to solution for smarter sharing. Paste your long link
          below.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-center w-full mt-8"
        >
          <div className="border-2 border-black flex items-center">
            <div className="border-r-2 border-black p-4 py-3">
              <Link2 className="" size={24} />
            </div>
            <input
              name="longUrl"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              autoFocus={true}
              type="url"
              className="py-3 px-5 outline-none w-[350px] h-full bg-white"
              placeholder="https://www.example.com/long-url"
            />
          </div>
          <button
            type="submit"
            className="bg-black border-2 border-black text-white px-6 py-3"
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
              />
            ))}
          </div>
          <p>1K+ people already using it.</p>
          <div className="relative -top-2 w-16 opacity-35">
            <img src={arrowImgUrl} alt="arrow" draggable={false} />
          </div>
        </div>
      </div>

      <div className="relative mt-8 w-full flex items-center p-16">
        <img
          src={imageUrl}
          draggable={false}
          alt="hero image"
          className="max-w-sm h-auto mx-auto"
        />
        <img
          src={browserWindowImgUrl}
          alt="window border"
          className="absolute top-0 translate-x-1/2 right-1/2 max-w-2xl"
          draggable={false}
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1/4 bg-white -z-10"></div>
    </section>
  );
}

export default HomeLandingSection;
