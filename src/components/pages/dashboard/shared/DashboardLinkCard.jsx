import { Copy, MousePointerClick } from "lucide-react";
import { Link } from "react-router-dom";
import { useNotification } from "../../../../hooks";
import { responseStatus, SHORT_URL_PREFIX } from "../../../../utils/constants";

/* eslint-disable react/prop-types */
function DashboardLinkCard({ data }) {
  const notify = useNotification();

  const handleCopy = () => {
    navigator.clipboard.writeText(`${SHORT_URL_PREFIX}/${data?.customSlug}`);
    notify({
      message: "Link copied to clipboard.",
      type: responseStatus.SUCCESS,
      timeout: 3000,
    });
  };

  return (
    <div
      className="p-5 mobile:p-8 bg-white border-[1.5px] border-zinc-400 laptop:border-zinc-100 laptop:hover:border-black duration-200 
    flex flex-col laptop:flex-row items-start laptop:items-end justify-between gap-6 laptop:gap-0"
    >
      <div className="flex flex-col mobile:flex-row items-start gap-4">
        <div className="w-10 h-10 rounded-full p-1 border border-zinc-200 bg-zinc-100 mt-1">
          <img
            alt={data?.originalUrlDomain}
            draggable="false"
            loading="lazy"
            decoding="async"
            className="blur-0 rounded-full size-4 shrink-0 transition-[width,height] w-full h-full group-data-[variant=loose]/card-list:sm:h-5 group-data-[variant=loose]/card-list:sm:w-5"
            src={data?.faviconUrl}
          />
        </div>

        <div className="space-y-3">
          <div className="tablet:flex items-center gap-1">
            <p className=" text-2xl  font-bold first-letter:uppercase">
              {data?.title}{" "}
            </p>
            <p className="hidden tablet:block">•</p>
            <button
              onClick={handleCopy}
              className=" flex items-center gap-2 group cursor-pointer"
            >
              <p className="text-blue-700 text-xl tablet:text-2xl font-medium laptop:group-hover:underline cursor-pointer">
                {data?.shortUrl}
              </p>
              <Copy
                className="opacity-60 laptop:group-hover:opacity-100 duration-300"
                color="blue"
                size={16}
              />
            </button>
          </div>

          <Link
            to={data?.originalUrl}
            title={data?.originalUrl}
            className=" text-zinc-500 hover:underline hidden mobile:block"
          >
            {data.originalUrl.slice(0, 50)}...
          </Link>

          <p className="text-sm">
            {data.$createdAt === data.$updatedAt
              ? `Created on ${new Date(data.$createdAt).toDateString()}`
              : `Updated on ${new Date(data.$updatedAt).toDateString()}`}
          </p>
        </div>
      </div>

      <div className="flex flex-col mobile:flex-row mobile:items-center w-full laptop:w-max tablet:justify-end laptop:justify-start gap-2">
        <Link
          to={`/dashboard/link/${data.$id}#analytics`}
          className="pt-0 mobile:px-6 py-4 mobile:py-3 flex items-center gap-1 bg-white mobile:border border-zinc-300 duration-300 text-sm font-medium"
        >
          <MousePointerClick className="opacity-50" color="black" size={15} />
          <p>{data?.analyticsCount?.length} clicks</p>
        </Link>

        <Link
          className="px-6 py-4 mobile:py-3 border border-zinc-300 hover:border-black duration-200 text-sm font-medium"
          to={`/dashboard/edit/${data.$id}`}
        >
          Edit or Delete
        </Link>

        <Link
          className="px-6 py-4 mobile:py-3  bg-zinc-200 border border-zinc-300 hover:border-black duration-300 text-sm font-medium"
          to={`/dashboard/link/${data.$id}`}
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default DashboardLinkCard;
