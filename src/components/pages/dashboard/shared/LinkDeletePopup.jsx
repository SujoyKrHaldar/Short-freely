import { Trash } from "lucide-react";
import { useState } from "react";

/* eslint-disable react/prop-types */
function LinkDeletePopup({ link, faviconSrc }) {
  const [verifyCode, setVerifyCode] = useState("");

  const handleDelete = (e) => {
    e.preventDefault();
    alert("delete");
  };

  return (
    <div className="w-full max-w-lg mx-auto p-8 px-12 bg-white border border-zinc-400 relative z-10 space-y-10">
      <div className="space-y-4">
        <div className="w-[50px] h-[50px] mx-auto rounded-full flex items-center justify-center bg-zinc-200 p-1 overflow-hidden">
          <img
            src={faviconSrc}
            draggable={false}
            alt="favicon"
            className="w-full h-full rounded-full"
          />
        </div>

        <h1 className="text-3xl font-bold text-gray-800 text-center">
          Delete {link}
        </h1>

        <p className=" text-center ">
          Deleting this link will remove all of its analytics. This action
          cannot be undone. Proceed with Caution.
        </p>
      </div>

      <form
        onSubmit={handleDelete}
        className="flex flex-col items-center w-full gap-2"
      >
        <div className="space-y-2 w-full">
          <label id="verify" className="text-sm">
            To Verify, type <span className="font-medium">{link}</span> below
          </label>
          <input
            name="verify"
            value={verifyCode}
            onChange={(e) => setVerifyCode(e.target.value)}
            autoFocus={true}
            type="text"
            className="py-3 px-5 outline-none w-full border border-black h-full bg-white"
          />
        </div>
        <button
          type="submit"
          className="group py-3 px-5 flex items-center justify-center gap-2 bg-red-600 text-white w-full border border-red-600"
          onClick={() => {}}
        >
          <Trash
            className="opacity-80 group-hover:opacity-100 duration-150"
            size={20}
            color="white"
          />
          <p>Confirm Delete</p>
        </button>
      </form>

      <div className="absolute w-full h-[46%] border-t border-zinc-300 bottom-0 left-0 bg-zinc-100 -z-10"></div>
    </div>
  );
}

export default LinkDeletePopup;
