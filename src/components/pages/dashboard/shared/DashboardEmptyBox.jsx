import { Link } from "react-router-dom";
import { emptyImgUrl } from "../../../../utils/imageUrls";

function DashboardEmptyBox() {
  return (
    <section className="p-8 pb-16 w-full h-full flex items-center justify-center bg-white border border-zinc-300">
      <div className="text-center max-w-md">
        <img src={emptyImgUrl} alt="empty img" className="w-[30%] mx-auto" />

        <h2 className="text-2xl font-bold">No links found</h2>
        <p className="mt-2 mb-6 max-w-xs mx-auto text-sm">
          Want to see metrics on your recent links? Create and publish a short
          link to get started.
        </p>

        <Link
          className="bg-white text-black px-5 py-3 border border-black  inline-block"
          to="/dashboard/create"
        >
          <span className="pr-2">+</span> Create short Link
        </Link>
      </div>
    </section>
  );
}

export default DashboardEmptyBox;
