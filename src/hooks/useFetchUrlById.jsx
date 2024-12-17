/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { getUrlById } from "../api/urlService";
import useAuth from "./useAuth";

const useFetchUrlById = (urlId) => {
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
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

export default useFetchUrlById;
