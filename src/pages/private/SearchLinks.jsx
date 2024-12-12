import { MetaTags } from "../../components/shared";
import { DeshboardSearch } from "../../components/pages/dashboard";

function SearchLinks() {
  return (
    <>
      <MetaTags
        title="Search • Url shortner"
        description=""
        conicalRoute="dashboard/search"
      />
      <DeshboardSearch />
    </>
  );
}

export default SearchLinks;
