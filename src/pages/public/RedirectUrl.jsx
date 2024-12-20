/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import { MetaTags } from "../../components/shared";
import { useEffect, useState } from "react";
import { getOriginalUrl } from "../../api/urlService";
import { createLinkStats } from "../../api/analyticService";
import { questionImgUrl } from "../../utils/imageUrls";

function RedirectUrl() {
  const { customSlug } = useParams();

  const {
    data: url,
    error,
    loading,
  } = useFetchOriginalUrlFromCustomSlug(customSlug);

  useSaveLinkStats(url, loading, error);

  if (loading)
    return (
      <>
        <MetaTags title="Redirecting..." />
        <section className="fixed inset-0 w-screen h-screen bg-white z-50 flex items-center justify-center">
          <div className="flex items-center justify-center gap-3 mr-4">
            <div className="w-5 h-5 rounded-full border-[3px] border-zinc-500 border-l-transparent animate-spin"></div>
            <p>Redirecting</p>
          </div>
        </section>
      </>
    );

  if (!url || error) {
    return (
      <>
        <MetaTags title="Broken Link • Short freely" />
        <section className="container w-full h-screen py-16 flex items-center justify-center border-b border-zinc-300">
          <div className="space-y-4 text-center max-w-2xl">
            <div className=" w-[300px] h-[290px] mx-auto">
              <img
                src={questionImgUrl}
                alt="page not found"
                draggable={false}
                loading="lazy"
              />
            </div>
            <h1 className="h1-bold">Page not Found</h1>
            <p className="p-main">
              This is a 404 error, which means you have clicked on a bad link or
              entered an invalid URL.
            </p>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <MetaTags title="Redirecting..." />
      <section className="fixed inset-0 w-screen h-screen bg-white z-50 flex items-center justify-center">
        <div className="flex items-center justify-center gap-3 mr-4">
          <div className="w-5 h-5 rounded-full border-[3px] border-zinc-500 border-l-transparent animate-spin"></div>
          <p>Redirecting</p>
        </div>
      </section>
    </>
  );
}

const useFetchOriginalUrlFromCustomSlug = (customSlug) => {
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchOriginalUrl = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await getOriginalUrl(customSlug);
      setData(response);
    } catch (_) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOriginalUrl();
  }, [customSlug]);

  return { loading, data, error };
};

const useSaveLinkStats = (url, loading, error) => {
  const urlId = url?.$id;
  const originalUrl = url?.originalUrl;
  const urlTitle = url?.title;

  const saveLinkStats = async () => {
    const response = await createLinkStats({
      urlId,
      originalUrl,
      urlTitle,
    });

    if (response) {
      window.location.href = originalUrl;
    }
  };

  useEffect(() => {
    if (!loading && !error && url) {
      saveLinkStats();
    }
  }, [urlId, error, loading]);
};

export default RedirectUrl;
