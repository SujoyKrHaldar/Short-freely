import { Copy } from "lucide-react";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function DashboardLinkCard({ data }) {
  return (
    <div className="p-5 bg-white border-2 border-zinc-200 hover:border-black duration-200 flex items-center justify-between">
      <div className="space-y-1">
        <p className="text-lg font-bold">{data.title}</p>
        <p className="text-sm">
          <span className="text-blue-600 font-medium">{data.shortUrl}</span> •{" "}
          {data.$createdAt === data.$updatedAt
            ? `Created on ${new Date(data.$createdAt).toDateString()}`
            : `Created on ${new Date(
                data.$createdAt
              ).toDateString()} & Updated at ${new Date(
                data.$updatedAt
              ).toDateString()}`}
        </p>
      </div>

      <div className="flex items-center gap-2">
        <Link
          className="px-5 py-2 border border-zinc-300 hover:border-black duration-200 text-sm font-medium"
          to={`/dashboard/edit/${data.$id}`}
        >
          Edit
        </Link>

        <Link
          className="px-5 py-2 bg-zinc-200 border border-zinc-300 hover:border-black duration-300 text-sm font-medium"
          to={`/dashboard/link/${data.$id}`}
        >
          View Details
        </Link>

        <div className="group p-2 cursor-pointer bg-zinc-200 border border-zinc-300 hover:border-black duration-300 text-sm font-medium">
          <Copy
            className="opacity-50 group-hover:opacity-100 duration-300"
            color="black"
            size={20}
          />
        </div>
      </div>
    </div>
  );
}

export default DashboardLinkCard;
