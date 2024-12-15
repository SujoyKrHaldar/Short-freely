/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  Copy,
  Share2 as Share,
  Pencil as Edit,
  Trash2 as Delete,
  ArrowDownToLine as Download,
} from "lucide-react";
import DashboardBreadcrumb from "./shared/DashboardBreadcrumb";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function DashboardUrlDetails({
  originalUrl,
  qrCode,
  shortUrl,
  title,
  isActive,
  customSlug,
  $updatedAt,
  $id,
  $createdAt,
  expirationDate,
}) {
  return (
    <section className="w-full h-full space-y-8">
      <TopSection postTitle={title} PostId={$id} />
      <section className="space-y-4">
        <UrlDetails
          postTitle={title}
          shortUrl={shortUrl}
          originalUrl={originalUrl}
          createdAt={$createdAt}
          updatedAt={$updatedAt}
          urlId={$id}
        />
        <Analytics />
      </section>
    </section>
  );
}

const Analytics = () => {
  return (
    <div className="border border-zinc-300 bg-white">
      <div className="p-8 border-b border-zinc-300 w-full flex items-start justify-between">
        <h2 className="text-2xl font-bold">Analytics</h2>
      </div>
    </div>
  );
};

const UrlDetails = ({
  postTitle,
  shortUrl,
  originalUrl,
  urlId,
  updatedAt,
  createdAt,
}) => {
  const navigate = useNavigate();

  const handleAction = {
    handleEdit: () => {
      navigate(`/dashboard/edit/${urlId}`);
    },
    handleCopy: () => {
      alert("edit");
    },
    handleDelete: () => {
      alert("edit");
    },
    handleDownload: () => {
      alert("edit");
    },
    handleShare: () => {
      alert("edit");
    },
  };

  const actions = [
    {
      name: "Copy",
      icon: <Copy color="black" size={20} />,
      onClick: handleAction.handleCopy,
    },
    {
      name: "Share",
      icon: <Share color="black" size={20} />,
      onClick: handleAction.handleShare,
    },
    {
      name: "Edit",
      icon: <Edit color="black" size={20} />,
      onClick: handleAction.handleEdit,
    },

    {
      name: "Delete",
      icon: <Delete color="black" size={20} />,
      onClick: handleAction.handleDelete,
    },
  ];

  const [faviconUrl, setFaviconUrl] = useState("");
  const [loading, setLoading] = useState(true);

  const handleFetchFavicon = () => {
    setLoading(true);
    try {
      const domain = new URL(originalUrl).hostname;
      const favicon = `https://www.google.com/s2/favicons?sz=256&domain=${domain}`;

      setFaviconUrl(favicon);
    } catch (error) {
      console.error("Invalid URL", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetchFavicon();
  }, [originalUrl]);

  return (
    <div className="border border-zinc-300 bg-white">
      <div className="p-8 w-full flex items-start justify-between">
        {/* LEFT SECTION */}
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-start gap-4">
              <div className="border border-zinc-4 rounded-full overflow-hidden">
                {!loading && (
                  <img
                    src={faviconUrl}
                    alt="Favicon"
                    className="w-[100px] h-auto"
                  />
                )}
              </div>
              <div className="space-y-1">
                <h1 className="text-4xl font-bold">{postTitle}</h1>
                <Link
                  to={shortUrl}
                  target="_blank"
                  className="text-2xl cursor-pointer hover:underline text-blue-700 block"
                >
                  {shortUrl}
                </Link>
                <Link
                  to={originalUrl}
                  target="_blank"
                  className="hover:underline text-zinc-400 block max-w-lg"
                >
                  {originalUrl}
                </Link>
              </div>
            </div>
          </div>

          {createdAt === updatedAt ? (
            <p>{new Date(createdAt).toDateString()}</p>
          ) : (
            <p>Last updated {new Date(createdAt).toDateString()}</p>
          )}
        </div>

        {/* RIGHT SECTION */}
        <div className="flex gap-4">
          <div className="border border-zinc-400 relative max-w-[157px] h-fit">
            <img
              className="p-4"
              src="https://img.abyssale.com/574bfa75-c880-46be-97ae-599473818958"
            />

            <div
              title="Download"
              onClick={handleAction.handleDownload}
              className="p-2 pl-[0.2rem] border-t border-zinc-400 w-full cursor-pointer flex items-center justify-center gap-1"
            >
              <Download color="black" size={15} />
              <p className="text-sm">Download</p>
            </div>
          </div>
          <div className="space-y-1">
            {actions.map((data, id) => (
              <div
                key={id}
                title={data.title}
                onClick={data.onClick}
                className="p-3 bg-zinc-100 border border-zinc-400 group hover:border-black hover:bg-white duration-2150 w-fit cursor-pointer flex items-center gap-2"
              >
                <div className="opacity-70 group-hover:opacity-100 duration-150">
                  {data.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const TopSection = ({ postTitle, PostId }) => {
  const breadcrumbs = [
    {
      name: "Dashboard",
      url: "/dashboard",
    },
    {
      name: "Links",
      url: "/dashboard/links",
    },
    {
      name: postTitle,
      url: "/dashboard/link/" + PostId,
    },
  ];
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <div className="flex items-end justify-between w-full h-full">
      <DashboardBreadcrumb links={breadcrumbs} />

      <div className="space-x-2">
        <p
          onClick={handleClick}
          className="bg-white cursor-pointer text-black px-5 py-2 border border-zinc-300  inline-block"
        >
          Go Back
        </p>
        <Link
          className="bg-black text-white px-5 py-2 border border-black  inline-block"
          to="/dashboard/list"
        >
          Back to List
        </Link>

        {/* <Link
            className="bg-green-700 text-white px-5 py-2 border border-black  inline-block"
            to="/dashboard/list"
          >
            Edit
          </Link>

          <Link
            className="bg-red-700 text-white px-5 py-2 border border-black  inline-block"
            to="/dashboard/list"
          >
            Delete
          </Link> */}
      </div>
    </div>
  );
};

export default DashboardUrlDetails;
