import { Link, useNavigate } from "react-router-dom";
import { MetaTags } from "../../components/shared";
import { notFoundImgUrl as imageUrl } from "../../utils/imageUrls";

function PageNotFound() {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <>
      <MetaTags
        title="Page not found • Url shortner"
        description=""
        conicalRoute=""
      />

      <section className="container w-full h-screen py-16 flex items-center justify-center border-b border-zinc-300">
        <div className="space-y-4 text-center max-w-2xl">
          <div className="w-[300px] h-[290px] mx-auto">
            <img src={imageUrl} alt="page not found" />
          </div>
          <h1 className="text-7xl font-bold">Page is not Found</h1>
          <p className="text-lg">
            The page you are trying to access, is not available at this moment.
            Try again later. Navigate to some other pages.
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
              to="/"
            >
              Go Back
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default PageNotFound;
