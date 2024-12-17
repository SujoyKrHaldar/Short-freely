import { Link, useNavigate, useParams } from "react-router-dom";
import { useFetchUrlById, useNotification } from "../../../../hooks";
import DashbaordEditLinkForm from "../shared/DashbaordLinkForm";
import DashboardBreadcrumb from "../shared/DashboardBreadcrumb";
import ErrorFallbackUi from "../shared/ErrorFallbackUi";
import { searchImgUrl } from "../../../../utils/imageUrls";
import { deleteUrlById } from "../../../../api/urlService";
import { responseStatus } from "../../../../utils/constants";
import { useState } from "react";

function DashboardEditUrl() {
  const { urlId } = useParams();
  const { data, loading, error } = useFetchUrlById(urlId);
  const notify = useNotification();
  const navigate = useNavigate();
  const [actionProgress, setActionProgress] = useState(false);

  const handleDeleteUrl = async () => {
    try {
      const status = confirm("Are you want to delete " + data?.title + "?");
      setActionProgress(true);
      if (status) {
        await deleteUrlById(urlId);
        notify({
          message: "Url deleted successfully.",
          type: responseStatus.SUCCESS,
          timeout: 5000,
        });
      }
    } catch (error) {
      console.log(error);

      notify({
        message: "Url not found.",
        type: responseStatus.ERROR,
        timeout: 5000,
      });
    } finally {
      setActionProgress(false);
      navigate("/dashboard/links", { replace: true });
    }
  };

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
      name: "Edit",
      url: `/dashboard/edit/${data?.$id}`,
    },
  ];

  return (
    <section className="w-full h-full space-y-8">
      <div className="flex items-end justify-between">
        <div className="space-y-2">
          <DashboardBreadcrumb links={breadcrumbs} />
          <h1 className="text-4xl font-bold">Edit Link </h1>
          {data?.$id && <p className="text-normal font-normal">#{data?.$id}</p>}
        </div>

        <div className="flex items-center gap-2">
          <Link
            className="bg-white cursor-pointer text-black px-5 py-2 border border-zinc-400  inline-block"
            to="/dashboard/links"
          >
            Cancle Edit
          </Link>
          <button
            className="bg-red-700 border text-white border-red-700 px-6 py-2 cursor-pointer"
            onClick={handleDeleteUrl}
          >
            {actionProgress ? (
              <div className="flex items-center justify-center gap-3 mr-4">
                <div className="w-5 h-5 rounded-full border-[3px] border-red-100 border-l-transparent animate-spin"></div>
                <p>In Progress</p>
              </div>
            ) : (
              <p>Delete Url</p>
            )}
          </button>
        </div>
      </div>

      {loading ? (
        <SkeletonUi />
      ) : error ? (
        <ErrorFallbackUi
          title="Failed to load form"
          description="Something went wrong. Please try again."
          imageUrl={searchImgUrl}
        />
      ) : (
        <DashbaordEditLinkForm defaultData={data} />
      )}
    </section>
  );
}

const SkeletonUi = () => {
  return (
    <section className="flex items-start gap-4">
      <div className=" bg-zinc-300 w-[60%] h-[400px] animate-pulse"></div>
      <div className="bg-zinc-300 w-[40%] h-[200px] animate-pulse"></div>
    </section>
  );
};

export default DashboardEditUrl;
