// import { Search } from "lucide-react";
import { searchImgUrl as imageUrl } from "../../../utils/imageUrls";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

function DeshboardSearch() {
  // const [searchQuery, setSearchQuery] = useState("");
  // const navigate = useNavigate();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!searchQuery) return null;
  //   navigate("/dashboard/search?key=" + searchQuery);
  // };

  return (
    <section className="flex items-center justify-center">
      {/* <form
          onSubmit={handleSubmit}
          className="flex items-center border border-black w-full"
        >
          <input
            name="longUrl"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus={true}
            type="text"
            className="py-3 px-5 outline-none w-full"
            placeholder="Search here"
          />

          <button type="submit" className="border-l border-black p-4 py-3">
            <Search className="opacity-40" size={24} />
          </button>
        </form> */}

      <div className="text-center max-w-md">
        <img src={imageUrl} className="w-[30%] mx-auto" />

        <h2 className="text-2xl font-bold">No Result</h2>
        <p className="mt-2 mb-6 max-w-xs mx-auto text-sm">
          There is no search for the word dwdwwdw, try using another keyword
        </p>
      </div>
    </section>
  );
}

export default DeshboardSearch;
