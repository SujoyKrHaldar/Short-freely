/* eslint-disable no-unused-vars */
import { Trash, X as Close } from "lucide-react";
import { useState } from "react";
import { useNotification } from "../../../../hooks";
import { responseStatus } from "../../../../utils/constants";
import { deleteUrlById } from "../../../../api/urlService";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
function LinkDeletePopup({
  link,
  faviconSrc,
  urlId,
  onClosePopup,
  redirectOnSuccess,
  redirectOnError,
}) {
  const [verifyCode, setVerifyCode] = useState("");
  const [loading, setLoading] = useState(false);
  const notify = useNotification();
  const navigate = useNavigate();

  const handleDeleteUrl = async (e) => {
    e.preventDefault();
    setLoading(true);

    const isVerified = link === verifyCode;
    if (!isVerified) {
      notify({
        message: "Please match the format requested",
        type: responseStatus.ERROR,
        timeout: 5000,
      });
      setLoading(false);
      return;
    }

    try {
      await deleteUrlById(urlId);
      notify({
        message: "Url deleted successfully.",
        type: responseStatus.SUCCESS,
        timeout: 5000,
      });
    } catch (_) {
      notify({
        message: "Requested link is not found. Please check again.",
        type: responseStatus.ERROR,
        timeout: 5000,
      });
    } finally {
      navigate("/dashboard/links", { replace: true });
      setLoading(false);
    }
  };

  const onClose = () => {
    onClosePopup(false);
    setVerifyCode("");
    setLoading(false);
  };

  return (
    <div className="w-full max-w-lg mx-auto p-8 px-12 bg-white border border-zinc-400 relative z-10">
      <button onClick={onClose} className="absolute top-8 right-8">
        <Close size={20} />
      </button>
      <div className="space-y-4 mb-10">
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
        onSubmit={handleDeleteUrl}
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
            required={true}
            className="py-3 px-5 outline-none w-full border border-black h-full bg-white"
          />
        </div>
        <button
          type="submit"
          className="group py-3 px-5 flex items-center justify-center gap-2 bg-red-600 text-white w-full border border-red-600"
          onClick={() => {}}
        >
          {loading ? (
            <>
              <div className="w-5 h-5 rounded-full border-[3px] border-red-100 border-l-transparent animate-spin"></div>
              <p>In Progress</p>
            </>
          ) : (
            <>
              <Trash
                className="opacity-80 group-hover:opacity-100 duration-150"
                size={20}
                color="white"
              />
              <p>Confirm Delete</p>
            </>
          )}
        </button>
      </form>

      <div className="absolute w-full h-[46%] border-t border-zinc-300 bottom-0 left-0 bg-zinc-100 -z-10"></div>
    </div>
  );
}

export default LinkDeletePopup;
