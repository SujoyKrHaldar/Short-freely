/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { DashboardUrlDetails } from "../../components/pages/dashboard";
import { MetaTags } from "../../components/shared";
import { getUrlById } from "../../api/urlService";
import { useParams, useNavigate, Link } from "react-router-dom";
import { searchImgUrl as imgUrl } from "../../utils/imageUrls";
import { useAuth } from "../../hooks";

function UrlDetails() {
  const { error, data, loading } = useFetchUrlById();

  return (
    <>
      {loading ? (
        <SkeletonUi />
      ) : error ? (
        <ErrorUi message={error} />
      ) : (
        <>
          <MetaTags
            title={`${data?.title} • Url shortner`}
            description=""
            conicalRoute={`dashboard/link/${data?.$id}`}
          />
          <DashboardUrlDetails {...data} />
        </>
      )}
    </>
  );
}

const useFetchUrlById = () => {
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const { urlId } = useParams();
  const { userData } = useAuth();
  const userId = userData?.$id;

  const fetchUrlData = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await getUrlById(urlId);
      if (userId !== response.userId) {
        return setError(true);
      }
      setData(response);
    } catch (_) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUrlData();
  }, [urlId, userId]);

  return { loading, data, error };
};

const SkeletonUi = () => {
  return (
    <section className="w-full h-full space-y-8">
      <div className="flex items-end justify-between w-full h-full">
        <div className="bg-zinc-300 w-64 h-[40px] animate-pulse"></div>
        <div className=" bg-zinc-300 w-64 h-[40px] animate-pulse"></div>
      </div>

      <section className="space-y-4">
        <div className=" bg-zinc-300 w-full h-[200px] animate-pulse"></div>

        <div className="bg-zinc-300 w-full h-[300px] animate-pulse"></div>
      </section>
    </section>
  );
};

const ErrorUi = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <section className="container py-16 w-full h-full flex items-center justify-center">
      <div className="space-y-4 text-center max-w-2xl">
        <div className="w-[200px] h-[180px] mx-auto">
          <img src={imgUrl} alt="page not found" />
        </div>
        <h1 className="text-5xl font-bold">Content not Found</h1>
        <p className="text-lg">
          The page you are trying to access, is not found at this moment.
        </p>

        <div className="flex items-center gap-2 justify-center">
          <Link
            className="bg-black text-white px-6 py-3 border border-black"
            to="/dashboard/create"
          >
            Generate Link
          </Link>
          <p
            onClick={handleClick}
            className="bg-white border border-black px-6 py-3 cursor-pointer"
          >
            Go Back
          </p>
        </div>
      </div>
    </section>
  );
};

export default UrlDetails;
