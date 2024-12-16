/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { emptyImgUrl } from "../../../../utils/imageUrls";

function NoResultFallbackUi({ title, description }) {
  return (
    <section className="p-8 py-16 w-full h-full flex items-center justify-center bg-white border border-zinc-300">
      <div className="text-center max-w-md">
        <img src={emptyImgUrl} alt="empty img" className="w-[30%] mx-auto" />

        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="mt-2 mb-6 max-w-xs mx-auto text-sm">{description}</p>

        <Link
          className="bg-white text-black px-5 pl-4 py-2 border border-black inline-block"
          to="/dashboard/create"
        >
          <span className="pr-2">+</span> Create a short Link
        </Link>
      </div>
    </section>
  );
}

export default NoResultFallbackUi;
