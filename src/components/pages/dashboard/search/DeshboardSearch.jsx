/* eslint-disable no-unused-vars */
import { Search, X as Close } from "lucide-react";
import DashboardBreadcrumb from "../shared/DashboardBreadcrumb";
import NoResultFallbackUi from "../shared/NoResultFallbackUi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQueryParams, useAuth } from "../../../../hooks";
import { getAllUrlsBySearch } from "../../../../api/urlService";
import DashboardLinkCard from "../shared/DashboardLinkCard";
import ErrorFallbackUi from "../shared/ErrorFallbackUi";
import { emptyImgUrl, searchImgUrl } from "../../../../utils/imageUrls";

function DeshboardSearch() {
  const breadcrumbs = [
    {
      name: "Dashboard",
      url: "/dashboard",
    },
    {
      name: "Search",
      url: "/dashboard/search",
    },
  ];
  const navigate = useNavigate();

  const searchQuery = useQueryParams("key");

  const [searchText, setSearchText] = useState(searchQuery || "");

  const { data, loading, error } = useFetchUrlsBySearch(searchQuery);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchText) {
      return navigate(
        "/dashboard/search?key=" + searchText.replaceAll(" ", "+")
      );
    }
    navigate("/dashboard/search");
  };

  const clearSearch = () => {
    navigate("/dashboard/search");
    setSearchText("");
  };

  return (
    <section className="w-full h-full space-y-6">
      <div className="flex items-end justify-between w-full h-full">
        <div className="space-y-4 w-full">
          <DashboardBreadcrumb links={breadcrumbs} />
          <form
            onSubmit={handleSearch}
            className="w-full bg-white border border-zinc-300 flex items-center"
          >
            <div className="p-4 border-r border-zinc-300">
              <Search color="black" size={20} />
            </div>
            <input
              name="keyword"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              autoFocus={true}
              type="text"
              required={true}
              placeholder="Search by title or custom slug"
              className="py-4 px-5 outline-none w-full h-full"
            />
            {searchText.length > 0 && (
              <div
                onClick={clearSearch}
                className="p-4 cursor-pointer border-l border-zinc-300"
              >
                <Close color="black" size={20} />
              </div>
            )}
          </form>
        </div>
      </div>

      <div className="space-y-4 relative">
        {searchQuery && data?.documents?.length > 0 && !error && (
          <p>Total {data?.total} links found.</p>
        )}

        {!searchQuery ? (
          <div className="text-center py-16 pr-8 opacity-50">
            <div className="w-[200px] mx-auto h-auto">
              <img src={searchImgUrl} draggable={false} alt="end of the list" />
            </div>
            <p>Start by searching something</p>
          </div>
        ) : searchQuery && loading ? (
          <SkeletonUi />
        ) : error ? (
          <ErrorFallbackUi
            title="Something went wrong."
            description="  The page you are trying to access, is not available right now or failed to fetch data for you. Try again later"
            imageUrl={emptyImgUrl}
          />
        ) : data?.documents?.length > 0 ? (
          <div className="space-y-2 min-h-[400px] h-full">
            {data?.documents?.map((data) => (
              <DashboardLinkCard data={data} key={data.$id} />
            ))}
          </div>
        ) : (
          <NoResultFallbackUi
            title="No Result"
            description="  There is no search for the word dwdwwdw, try using another keyword"
          />
        )}
      </div>
    </section>
  );
}

const useFetchUrlsBySearch = (searchQuery) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const { userData } = useAuth();
  const userId = userData?.$id;

  const fetchUrlData = async () => {
    setLoading(true);
    setError(false);

    try {
      const response = await getAllUrlsBySearch({ userId, searchQuery });
      setData(response);
    } catch (_) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    searchQuery && fetchUrlData();
  }, [searchQuery]);

  return { loading, data, error };
};

const SkeletonUi = () => {
  return (
    <section className="w-full h-full space-y-8">
      <section className="space-y-4">
        <div className=" bg-zinc-300 w-full h-[120px] animate-pulse"></div>
        <div className="bg-zinc-300 w-full h-[120px] animate-pulse"></div>
        <div className="bg-zinc-300 w-full h-[120px] animate-pulse"></div>
      </section>
    </section>
  );
};

export default DeshboardSearch;
