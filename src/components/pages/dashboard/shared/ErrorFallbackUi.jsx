/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";

function ErrorFallbackUi({ title, description, imageUrl }) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <section className="p-4 tablet:p-8 pt-8 tablet:py-16 w-full h-full flex items-center justify-center bg-white border border-zinc-300">
      <div className="text-center max-w-md">
        <img
          src={imageUrl}
          alt="error image"
          className="w-[30%] mx-auto"
          draggable={false}
          loading="lazy"
        />

        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="mt-2 mb-6 max-w-md mx-auto text-sm">{description}</p>

        <div className="flex flex-col tablet:flex-row items-center gap-2 justify-center">
          <Link
            className="bg-black text-white px-5 py-2 border border-black w-full tablet:w-fit"
            to="/dashboard"
          >
            Back to Home
          </Link>
          <button
            onClick={handleClick}
            className="bg-white border border-black px-5 py-2 cursor-pointer w-full tablet:w-fit"
          >
            Go Back
          </button>
        </div>
      </div>
    </section>
  );
}

export default ErrorFallbackUi;
