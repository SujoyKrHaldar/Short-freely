/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth, useNotification, useQueryParams } from "../../../../hooks";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../../../ui/forms/Input";
import { createUrl, updateUrlById } from "../../../../api/urlService";
import { responseErrorType, responseStatus } from "../../../../utils/constants";
import { Lock, QrCode } from "lucide-react";
import ShareLinkPopup from "./ShareLinkPopup";
// import { Particles } from "@tsparticles/react";
// import { loadFull } from "tsparticles";

const DashbaordLinkForm = ({ defaultData }) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isDirty },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [qrCode, setQrCode] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);
  const [isEnableSharePopup, setEnableSharePopup] = useState(false);
  // const [showParticlesOnCreation, setShowParticlesOnCreation] = useState(true);
  const [shareDetails, setShareDetails] = useState({});

  const navigate = useNavigate();
  const notify = useNotification();
  const { userData } = useAuth();
  const { urlId } = useParams();
  const userId = userData.$id;

  // * POPULATE EXISTING DATA IF IN EDIT MODE
  useEffect(() => {
    if (defaultData) {
      const { title, originalUrl, qrCode: defaultQrCode } = defaultData;
      setIsEditMode(true);
      setValue("title", title);
      setValue("originalUrl", originalUrl);
      setValue("customSlug", "");
      setQrCode(defaultQrCode);
    } else {
      setIsEditMode(false);
      reset();
    }
  }, [defaultData, setValue, reset]);

  // * GETTING LONGURL DATA FROM QUERY PARAMS WHICH IC COMING FROM HOMEPAGE
  const longurlFromQuery = useQueryParams("longurl");

  useEffect(() => {
    if (longurlFromQuery && !isEditMode) {
      setValue("originalUrl", longurlFromQuery);
    }
  }, [longurlFromQuery, setValue, isEditMode]);

  // * GENERATE QR CODE IN REALTIME WITH LONG URL
  const url = watch("originalUrl");

  useEffect(() => {
    if (url) {
      setQrCode(`https://api.qrserver.com/v1/create-qr-code/?data=${url}`);
    } else {
      setQrCode("");
    }
  }, [url]);

  // * CANCLE SUBMISSION FOR EDIT AND CREATE
  const handleCancle = () => {
    if (isEditMode) {
      reset(defaultData);
      setValue("customSlug", "");
      setQrCode(defaultData.qrCode);
      return;
    }
    if (longurlFromQuery) navigate("/dashboard/create");
    setQrCode("");
    reset();
  };

  // * GENERATE CUSTOM SLUG FOR SHORT URL
  const generateSlug = () => {
    return Math.random().toString(36).substring(2, 8);
  };

  // * GENERATE WEBSITE FAVICON FROM ORIGINAL URL
  const generateFavicon = (originalUrl) => {
    const urlHostname = new URL(originalUrl).hostname;
    const faviconUrl = `https://www.google.com/s2/favicons?sz=64&domain=${urlHostname}`;
    return { urlHostname, faviconUrl };
  };

  // * ON FORM SUBMIT
  const onSubmit = (data) => {
    setLoading(true);

    if (defaultData) {
      updateExistingLinkUrl(data);
    } else {
      createNewLinkUrl(data);
    }
  };

  //* CREATE NEW DOCUMENT
  const createNewLinkUrl = async (data) => {
    const SHORT_URL_DOMAIN = "short.ly";

    if (data.customSlug === "") {
      const slug = generateSlug();
      data.customSlug = slug;
    }

    data.shortUrl = SHORT_URL_DOMAIN + "/" + data.customSlug;

    const { urlHostname, faviconUrl } = generateFavicon(data.originalUrl);

    const newUrl = {
      shortUrl: data.shortUrl,
      title: data.title,
      customSlug: data.customSlug,
      originalUrl: data.originalUrl,
      userId,
      originalUrlDomain: urlHostname,
      faviconUrl,
      qrCode: qrCode,
    };

    try {
      const response = await createUrl(newUrl);
      if (response) {
        reset();
        setEnableSharePopup(true);
        setShareDetails({
          qrCode: response.qrCode,
          shortUrl: response.shortUrl,
          faviconUrl: response.faviconUrl,
          urlId: response.$id,
        });
        // setShowParticlesOnCreation(true); // Show particles on success
        // setTimeout(() => setShowParticlesOnCreation(false), 6000); // Hide after 3s
        return;
      }
    } catch (error) {
      handleApiErrors(error);
    } finally {
      setLoading(false);
    }
  };

  //* UPDATE EXISTING DOCUMENT
  const updateExistingLinkUrl = async (data) => {
    const { urlHostname, faviconUrl } = generateFavicon(data.originalUrl);

    const updatedUrl = {
      title: data.title,
      originalUrl: data.originalUrl,
      originalUrlDomain: urlHostname,
      faviconUrl,
      qrCode: qrCode,
    };

    try {
      const response = await updateUrlById(updatedUrl, urlId);
      if (response) {
        notify({
          message: "Short url updated successfully.",
          type: responseStatus.SUCCESS,
          timeout: 5000,
        });
        navigate("/dashboard/link/" + urlId, { replace: true });
        return;
      }
    } catch (error) {
      handleApiErrors(error);
    } finally {
      setLoading(false);
    }
  };

  //* HANDLE API RESPONSE ERROR
  const handleApiErrors = (error) => {
    if (error?.type === responseErrorType.GENERAL_RATE_LIMIT_EXEED) {
      notify({
        message: "Too many requests! Please try again later.",
        type: responseStatus.ERROR,
        timeout: 5000,
      });
    } else if (error?.type === responseErrorType.DOCUMENT_ALREADY_EXISTS) {
      notify({
        message:
          "Custom back-half slug already exists. Try another or skip it.",
        type: responseStatus.ERROR,
        timeout: 5000,
      });
    } else {
      notify({
        message: "Failed to save link. Please try again later.",
        type: responseStatus.ERROR,
        timeout: 5000,
      });
    }
  };

  //* Initializing the tsParticles instance
  // const particlesInit = async (engine) => {
  //   await loadFull(engine);
  // };

  return (
    <section className="relative w-full h-full flex items-center justify-center">
      {/* {showParticlesOnCreation && (
        <Particles
          id="success-particles"
          // init={particlesInit}
          options={particleOptions}
          className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-60 bg-black"
        />
      )} */}

      <div
        className={`fixed inset-0 w-full h-full flex items-center justify-center z-50 bg-white duration-300 ${
          isEnableSharePopup
            ? "z-50 opacity-100 pointer-events-auto"
            : "z-0 opacity-0 pointer-events-none"
        }`}
      >
        <ShareLinkPopup
          qrCodeSrc={shareDetails.qrCode}
          link={shareDetails.shortUrl}
          faviconSrc={shareDetails.faviconUrl}
          onClose={() => navigate("/dashboard/link/" + shareDetails.urlId)}
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-16 w-full">
        <div className="flex items-start gap-4">
          {/* BOX LEFT */}
          <div className="p-10 pt-8 space-y-4 w-[60%] border border-zinc-300 bg-white">
            <Input
              autoFocus={!isEditMode}
              label="Title"
              type="text"
              placeholder="Enter a title"
              error={errors?.title}
              errorMessage={errors?.title?.message}
              {...register("title", {
                required: "Title is required",
              })}
            />

            <Input
              label="Original Url"
              type="url"
              placeholder="https://example.com/blog/some-blog-title"
              error={errors?.originalUrl}
              errorMessage={errors?.originalUrl?.message}
              {...register("originalUrl", {
                required: "Original URL is required",
                pattern: {
                  value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i,
                  message: "Invalid URL format",
                },
              })}
            />

            <div
              title={
                isEditMode
                  ? "Only title and original url can be editable."
                  : undefined
              }
              className="space-y-2"
            >
              <div className="flex items-end justify-between">
                <label>Custom Back-Half (Optional)</label>
                {isEditMode && <Lock size={18} className="opacity-50" />}
              </div>
              <div className="relative flex w-full overflow-hidden">
                {!isEditMode && (
                  <p className="border border-black border-r-0 py-3 px-5 h-fit bg-zinc-100">
                    short.ly
                  </p>
                )}
                <Input
                  type="text"
                  readOnly={isEditMode}
                  className={
                    !isEditMode
                      ? "bg-white"
                      : "bg-zinc-100 outline-none cursor-not-allowed font-bormal"
                  }
                  placeholder={
                    isEditMode
                      ? "short.ly/" + defaultData.customSlug
                      : "short.ly/custom-back-half"
                  }
                  error={errors?.customSlug}
                  errorMessage={errors?.customSlug?.message}
                  {...register("customSlug", {
                    pattern: {
                      value: /^[a-zA-Z0-9-]*$/,
                      message: "Only letters, numbers, and dashes allowed",
                    },
                  })}
                />
              </div>
            </div>
          </div>

          {/* BOX RIGHT */}
          <div className="w-[40%] h-full border border-zinc-300 bg-white p-8 space-y-4">
            <p className="">Generate QR Code</p>
            <div className="p-4 border w-full h-[244px] border-zinc-300 bg-white flex items-center justify-center">
              {qrCode ? (
                <img
                  draggable={false}
                  loading="lazy"
                  src={qrCode}
                  alt="QR Code"
                  className="w-[150px] h-auto"
                />
              ) : (
                <div className="text-center space-y-2 w-full h-full bg-zinc-100 flex flex-col items-center justify-center">
                  <QrCode className="mx-auto" color="black" size={40} />

                  <p className="text-sm max-w-[180px] mx-auto">
                    Enter the long url to generate a QR code.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div
          className={` sticky bottom-0 py-6 flex items-center ${
            isEditMode ? "justify-between" : "justify-end"
          } w-full h-fit  border-t border-t-zinc-300 bg-zinc-100`}
        >
          {isEditMode && (
            <div className="">
              <p className="text-sm">
                Created at {new Date(defaultData.$createdAt).toDateString()}
              </p>
              {defaultData.$createdAt !== defaultData.$updatedAt && (
                <p className="text-sm">
                  Last updated at{" "}
                  {new Date(defaultData.$updatedAt).toDateString()}
                </p>
              )}
            </div>
          )}

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="bg-zinc-200 border border-zinc-300 px-6 py-2 cursor-pointer"
              onClick={handleCancle}
            >
              Reset to Default
            </button>

            <button
              disabled={!isDirty}
              type="submit"
              className={` ${
                isDirty
                  ? "cursor-pointer bg-black"
                  : "cursor-not-allowed bg-zinc-500 border-zinc-500"
              } bg-black text-white px-6 py-2 border border-black`}
            >
              {loading ? (
                <div className="flex items-center justify-center gap-3 mr-4">
                  <div className="w-5 h-5 rounded-full border-[3px] border-zinc-500 border-l-transparent animate-spin"></div>
                  <p>{isEditMode ? "Updating" : "Creating Link"}</p>
                </div>
              ) : (
                <p>{isEditMode ? "Update Link" : "Create New Link"}</p>
              )}
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

// const particleOptions = {
//   fpsLimit: 60,
//   particles: {
//     number: {
//       value: 50,
//       density: { enable: true, value_area: 800 },
//     },
//     color: { value: "#ffdd00" },
//     shape: {
//       type: "circle",
//     },
//     opacity: {
//       value: 0.8,
//     },
//     size: {
//       value: 4,
//       random: true,
//     },
//     move: {
//       enable: true,
//       speed: 3,
//       direction: "none",
//       outModes: "out",
//     },
//   },
//   interactivity: {
//     detectsOn: "canvas",
//     events: {
//       onHover: { enable: false },
//       onClick: { enable: false },
//     },
//   },
// };

// const particleOptions = {
//   fpsLimit: 120,
//   particles: {
//     number: {
//       value: 80,
//       density: {
//         enable: true,
//         area: 800,
//       },
//     },
//     color: {
//       value: ["#ffdd00", "#00bfff", "#ff6347"],
//     },
//     shape: {
//       type: "circle",
//     },
//     opacity: {
//       value: 0.8,
//     },
//     size: {
//       value: { min: 2, max: 6 },
//       random: true,
//     },
//     move: {
//       enable: true,
//       speed: 2,
//       direction: "none",
//       outModes: {
//         default: "out",
//       },
//     },
//   },
//   interactivity: {
//     events: {
//       onHover: { enable: false },
//       onClick: { enable: false },
//     },
//   },
//   detectRetina: true,
// };

export default DashbaordLinkForm;
