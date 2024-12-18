import { Link } from "react-router-dom";
import { ArrowDownToLine as Download, Copy, X as Close } from "lucide-react";

/* eslint-disable react/prop-types */
function ShareLinkPopup({ qrCodeSrc, link, faviconSrc, onClose }) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = qrCodeSrc;
    link.target = "_blank";
    link.download = "short-utl.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("https://bit.ly/udemy-course-mern");
    alert("Link copied to clipboard!");
  };

  return (
    <div className="w-full max-w-md mx-auto p-8 bg-white border border-zinc-400 relative z-10">
      <button onClick={onClose} className="absolute top-8 right-8">
        <Close size={20} />
      </button>

      <div className="w-[50px] h-[50px] mx-auto my-4 rounded-full flex items-center justify-center bg-zinc-200 p-1 overflow-hidden">
        <img
          src={faviconSrc}
          draggable={false}
          alt="favicon"
          className="w-full h-full rounded-full"
        />
      </div>

      <h1 className="text-3xl font-bold text-gray-800 text-center mb-2">
        Your Short Link is Ready
      </h1>

      <p className=" text-center text-sm mb-4">
        Scan the QR code below to open link
      </p>

      <div className="flex justify-center items-center my-4 mt-6 bg-white w-fit mx-auto">
        <img
          src={qrCodeSrc}
          alt="QR Code"
          className="w-48 h-48 p-4 border border-zinc-300"
          draggable={false}
          loading="lazy"
        />
      </div>

      <div className="text-center mb-6">
        <Link
          to={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 font-medium hover:underline text-lg"
        >
          {link}
        </Link>
      </div>

      <div className="flex justify-center space-x-2">
        <div className="flex flex-col items-center w-full gap-2">
          <button
            className="group py-3 px-5 flex items-center justify-center gap-2 bg-black text-white w-full border border-black"
            onClick={handleDownload}
          >
            <Download
              className="opacity-80 group-hover:opacity-100 duration-150"
              size={20}
              color="white"
            />
            <p>Download PNG</p>
          </button>

          <button
            className="group py-2 px-5 cursor-pointer flex items-center justify-center gap-2 bg-white text-black w-full border border-black"
            onClick={handleCopy}
          >
            <Copy
              className="opacity-60 group-hover:opacity-100 duration-150"
              size={16}
              color="black"
            />
            <p>Copy Short Url</p>
          </button>
        </div>
      </div>

      <div className="absolute w-full h-1/2 bottom-0 left-0 bg-zinc-100 -z-10"></div>
    </div>
  );
}

export default ShareLinkPopup;
