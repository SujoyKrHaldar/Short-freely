import { useNavigate, useParams } from "react-router-dom";
import { useFetchUrlById } from "../../../../hooks";
import DashbaordEditLinkForm from "../shared/DashbaordLinkForm";
import DashboardBreadcrumb from "../shared/DashboardBreadcrumb";
import ErrorFallbackUi from "../shared/ErrorFallbackUi";
import { searchImgUrl } from "../../../../utils/imageUrls";
import { useState } from "react";
import LinkDeletePopup from "../shared/LinkDeletePopup";

function DashboardEditUrl() {
  const { urlId } = useParams();
  const navigate = useNavigate();
  const { data, loading, error } = useFetchUrlById(urlId);
  const [isEnableDeletePopup, setEnableDeletePopup] = useState(false);

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
    <>
      {!error && (
        <section
          className={`fixed inset-0 w-full h-full flex items-center justify-center z-50 duration-300 ${
            isEnableDeletePopup
              ? "z-50 opacity-100 pointer-events-auto bg-[#ffffff4d] backdrop-blur-md"
              : "z-0 opacity-0 pointer-events-none"
          }`}
        >
          <LinkDeletePopup
            link={data?.shortUrl}
            faviconSrc={data?.faviconUrl}
            urlId={urlId}
            onClosePopup={setEnableDeletePopup}
          />
        </section>
      )}

      <section className="w-full h-full space-y-8 relative">
        <div className="flex items-end justify-between">
          <div className="space-y-2">
            <DashboardBreadcrumb links={breadcrumbs} />
            <h1 className="text-4xl font-bold">
              Edit Link{" "}
              <span className="font-normal text-blue-700">
                {data?.shortUrl && "/"} {data?.shortUrl}
              </span>
            </h1>
            {data?.$id && (
              <p className="text-normal font-normal">#{data?.$id}</p>
            )}
          </div>

          {!error && (
            <div className="flex items-center gap-2">
              <button
                className="bg-white cursor-pointer text-black px-5 py-2 border border-zinc-400  inline-block"
                onClick={() => navigate(-1)}
              >
                Cancle Edit
              </button>
              <button
                className="bg-red-700 border text-white border-red-700 px-6 py-2 cursor-pointer"
                onClick={() => setEnableDeletePopup(true)}
              >
                <p>Delete Url</p>
              </button>
            </div>
          )}
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
    </>
  );
}

const SkeletonUi = () => {
  return (
    <section className="flex items-start gap-4">
      <div className=" bg-zinc-300 w-[60%] h-[350px] animate-pulse"></div>
      <div className="bg-zinc-300 w-[40%] h-[350px] animate-pulse"></div>
    </section>
  );
};

export default DashboardEditUrl;
