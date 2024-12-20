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
        title="Page not found • Short Freely"
        description=""
        conicalRoute=""
      />

      <section className="container w-full h-screen py-16 flex items-center justify-center border-b border-zinc-300">
        <div className="space-y-8 text-center max-w-2xl">
          <div className="space-y-4">
            <div className="w-[200px] h-auto tablet:w-[300px] tablet:h-[290px] mx-auto">
              <img
                src={imageUrl}
                alt="page not found"
                draggable={false}
                loading="lazy"
              />
            </div>
            <h1 className="h1-bold">Page not Found</h1>
            <p className="p-main ">
              The page you are trying to access, is not available at this
              moment. Try again later. Navigate to some other pages.
            </p>
          </div>

          <div className="flex flex-col tablet:flex-row items-center gap-2 justify-center">
            <Link className="cta-primary-black" to="/dashboard/create">
              Generate Link
            </Link>
            <p onClick={handleClick} className="cta-secondary-white">
              Go Back
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default PageNotFound;
