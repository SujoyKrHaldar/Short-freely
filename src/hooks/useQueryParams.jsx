import { useLocation } from "react-router-dom";

function useQueryParams(query) {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search);
  const queryParams = searchQuery.get(query);

  if (queryParams) return queryParams;
  return false;
}

export default useQueryParams;
