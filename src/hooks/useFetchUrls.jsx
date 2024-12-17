/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { getAllUrls } from "../api/urlService";
import useAuth from "./useAuth";

const useFetchUrls = ({ limit, page = 1 }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  const { userData } = useAuth();
  const userId = userData?.$id;

  const fetchUrlData = async () => {
    setLoading(true);
    setError(false);

    try {
      const offset = (page - 1) * limit;
      const response = await getAllUrls({ userId, limit, offset });

      setData(response);
      setTotalPages(Math.ceil(response.total / limit));
    } catch (_) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUrlData();
  }, [page, limit]); // Re-run fetch when page or limit changes

  return { loading, data, error, totalPages, currentPage: page };
};

export default useFetchUrls;
