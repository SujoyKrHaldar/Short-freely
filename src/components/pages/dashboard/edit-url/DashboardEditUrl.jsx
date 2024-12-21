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
        {!loading && (
          <div className="flex flex-col mobile:flex-row gap-8 mobile:items-end justify-between">
            <div className="space-y-2">
              <DashboardBreadcrumb links={breadcrumbs} />
              <h1 className="dashboard-h1-bold">
                Edit Link{" "}
                <span className="font-normal text-blue-700 block text-4xl">
                  {data?.shortUrl}
                </span>
              </h1>
              {data?.$id && (
                <p className="text-normal font-normal">#{data?.$id}</p>
              )}
            </div>

            {!error && (
              <div className="flex flex-col mobile:flex-row items-center gap-4 mobile:gap-2">
                <button
                  className="bg-white cursor-pointer text-black px-6 py-4 mobile:py-3 border border-zinc-400 w-full mobile:w-fit inline-block"
                  onClick={() => navigate(-1)}
                >
                  Cancle Edit
                </button>
                <button
                  className="bg-red-700 border text-white border-red-700 px-6 py-4 mobile:py-3 w-full mobile:w-fit cursor-pointer"
                  onClick={() => setEnableDeletePopup(true)}
                >
                  <p>Delete Url</p>
                </button>

                <p className=" block pb-8 pt-4 w-full border-b border-zinc-400 mobile:hidden">Or Edit below form</p>
              </div>
            )}
          </div>
        )}
        {loading ? null : error ? (
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

export default DashboardEditUrl;
