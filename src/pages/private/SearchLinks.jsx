import { MetaTags } from "../../components/shared";
import { DeshboardSearch } from "../../components/pages/dashboard";

function SearchLinks() {
  return (
    <>
      <MetaTags
        title="Search links here • Short Freely"
        description=""
        conicalRoute="dashboard/search"
      />
      <DeshboardSearch />
    </>
  );
}

export default SearchLinks;
