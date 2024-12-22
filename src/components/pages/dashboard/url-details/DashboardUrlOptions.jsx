/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import DashboardBreadcrumb from "../shared/DashboardBreadcrumb";

const DashboardUrlOptions = ({ postTitle, PostId }) => {
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
    navigate(-1, { replace: true });
  };

  return (
    <div className="flex items-end justify-between w-full h-full">
      <DashboardBreadcrumb links={breadcrumbs} />

      <div className="hidden tablet:block space-x-2">
        <button
          onClick={handleClick}
          className="bg-white cursor-pointer text-black px-5 py-4 mobile:py-3 border border-zinc-400  inline-block"
        >
          Go Back
        </button>
        <Link
          className="bg-black text-white px-5 py-4 mobile:py-3 border border-black  inline-block"
          to="/dashboard/links"
        >
          Back to List
        </Link>
      </div>
    </div>
  );
};

export default DashboardUrlOptions;
