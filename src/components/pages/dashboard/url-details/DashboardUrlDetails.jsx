/* eslint-disable react/prop-types */
import { Link2, Share2 as Share } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import DashboardUrlAnalytics from "./DashboardUrlAnalytics";
import DashboardUrlOptions from "./DashboardUrlOptions";
import ShareLinkPopup from "../shared/ShareLinkPopup";
import { SHORT_URL_PREFIX } from "../../../../utils/constants";

function DashboardUrlDetails({ data }) {
  const [isOpenPopup, setOpenPopup] = useState(false);

  return (
    <section className="w-full h-full relative z-10">
      <div
        className={`fixed inset-0 flex items-center justify-center z-50 duration-300 ${
          isOpenPopup
            ? "z-50 opacity-100 pointer-events-auto bg-[#ffffffad] backdrop-blur-md"
            : "z-0 opacity-0 pointer-events-none"
        }`}
      >
        <ShareLinkPopup
          qrCodeSrc={data.qrCode}
          link={data.shortUrl}
          faviconSrc={data.faviconUrl}
          customSlug={data.customSlug}
          onClose={() => setOpenPopup(false)}
        />
      </div>
      <DashboardUrlOptions postTitle={data?.title} PostId={data?.$id} />
      <section className="space-y-1 mobile:space-y-4 my-6">
        <UrlDetails {...data} openPopup={() => setOpenPopup(true)} />
        <DashboardUrlAnalytics data={data?.analyticsCount} />
      </section>
    </section>
  );
}

const UrlDetails = ({
  shortUrl,
  title,
  qrCode,
  customSlug,
  originalUrl,
  originalUrlDomain,
  faviconUrl,
  $createdAt: createdAt,
  $id: urlId,
  $updatedAt: updatedAt,
  openPopup,
}) => {
  return (
    <div>
      <div className="w-full flex items-start justify-between p-4 tablet:p-6 laptop:p-10 bg-white border border-zinc-400">
        {/* LEFT SECTION */}

        <div className="space-y-4 overflow-hidden">
          <div className="flex flex-col laptop:flex-row laptop:items-center gap-4 laptop:gap-8">
            <div className="w-[50px] tablet:w-[70px] laptop:w-[90px] h-auto rounded-full bg-zinc-200 p-1 border border-zinc-200 overflow-hidden mt-1">
              <img
                alt={originalUrlDomain}
                draggable="false"
                loading="lazy"
                decoding="async"
                className="blur-0 rounded-full w-full h-full"
                src={faviconUrl}
              />
            </div>

            <div className="space-y-2">
              <h1 className="dashboard-h1-bold first-letter:uppercase max-w-md">
                {title}
              </h1>

              <div className="flex items-center gap-2">
                <Link2
                  className="opacity-60 group-hover:opacity-100 duration-300"
                  color="blue"
                  size={25}
                />
                <Link
                  to={`${SHORT_URL_PREFIX}/${customSlug}`}
                  target="_blank"
                  className="text-xl font-medium cursor-pointer laptop:hover:underline text-blue-700 block"
                >
                  {shortUrl}
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-3 max-w-2xl">
            <Link
              to={originalUrl}
              target="_blank"
              className="group font-bold block"
            >
              Destination URL:{" "}
              <span className="text-zinc-400 laptop:group-hover:underline font-medium">
                {originalUrl}
              </span>
            </Link>
            {createdAt === updatedAt ? (
              <p className="font-bold">
                Created on {new Date(createdAt).toDateString()}
              </p>
            ) : (
              <p className="font-bold">
                Created on {new Date(createdAt).toDateString()} & Last updated{" "}
                {new Date(updatedAt).toDateString()}
              </p>
            )}
          </div>
        </div>

        {/* RIGHT SECTION */}

        <div className="relative w-0 tablet:w-[120px] laptop:w-[180px] h-auto">
          <img src={qrCode} draggable={false} alt={title} loading="lazy" />
        </div>
      </div>

      <div className="p-0 tablet:px-6 laptop:px-10 py-4 tablet:bg-white border-t-0 flex items-center justify-between tablet:border border-zinc-400">
        <h2 className="text-2xl font-bold hidden tablet:block">Actions</h2>
        <div className="flex flex-col tablet:flex-row tablet:items-center gap-2 w-full tablet:w-fit">
          <button
            onClick={openPopup}
            className="bg-white border border-black px-5 py-4 mobile:py-3 pl-4 flex items-center justify-center tablet:justify-between gap-2"
          >
            <Share color="black" size={15} />
            <p>Share</p>
          </button>

          <Link
            className="bg-black text-white border text-center border-black px-5 py-4 mobile:py-3"
            to={`/dashboard/edit/${urlId}`}
          >
            Edit / Delete Link
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardUrlDetails;
