import { Copy, MousePointerClick } from "lucide-react";
import { Link } from "react-router-dom";
import { useNotification } from "../../../../hooks";
import { responseStatus } from "../../../../utils/constants";

/* eslint-disable react/prop-types */
function DashboardLinkCard({ data }) {
  const notify = useNotification();

  const handleCopy = () => {
    navigator.clipboard.writeText(data?.shortUrl);
    notify({
      message: "Link copied to clipboard.",
      type: responseStatus.SUCCESS,
      timeout: 3000,
    });
  };

  return (
    <div className="p-5 bg-white border-[1.5px] border-zinc-100 hover:border-black duration-200 flex items-end justify-between">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-zinc-200"></div>
        <div className="space-y-1">
          <div className="flex items-center gap-1">
            <p className="text-lg font-bold first-letter:uppercase">{data.title} </p>
            <p>•</p>
            <div
              onClick={handleCopy}
              className=" flex items-center gap-2 group cursor-pointer"
            >
              <p className="text-blue-700 text-lg font-medium group-hover:underline cursor-pointer">
                {data.shortUrl}
              </p>
              <Copy
                className="opacity-60 group-hover:opacity-100 duration-300"
                color="black"
                size={16}
              />
            </div>
          </div>

          <Link
            to={data.originalUrl}
            title={data.originalUrl}
            className="text-sm text-zinc-500 hover:underline"
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

      <div className="flex items-center gap-2">
        <Link
          to={`/dashboard/link/${data.$id}#analytics`}
          className="p-2 flex items-center gap-1 bg-white border border-zinc-300 duration-300 text-sm font-medium"
        >
          <MousePointerClick className="opacity-50" color="black" size={15} />
          <p>{data?.clickCount?.length} clicks</p>
        </Link>

        <Link
          className="px-4 py-2 border border-zinc-300 hover:border-black duration-200 text-sm font-medium"
          to={`/dashboard/edit/${data.$id}`}
        >
          Edit or Delete
        </Link>

        <Link
          className="px-4 py-2 bg-zinc-200 border border-zinc-300 hover:border-black duration-300 text-sm font-medium"
          to={`/dashboard/link/${data.$id}`}
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default DashboardLinkCard;
