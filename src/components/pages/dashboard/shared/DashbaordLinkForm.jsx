/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth, useNotification, useQueryParams } from "../../../../hooks";
import { useNavigate } from "react-router-dom";
import Input from "../../../ui/forms/Input";
import { createUrl, updateUrlById } from "../../../../api/urlService";
import { responseErrorType, responseStatus } from "../../../../utils/constants";

const DashbaordLinkForm = ({ defaultData }) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const [qrVisible, setQrVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [qrCode, setQrCode] = useState("");
  // const [expirationVisible, setExpirationVisible] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const longurlFromQuery = useQueryParams("longurl");
  const navigate = useNavigate();
  const notify = useNotification();
  const { userData } = useAuth();
  const userId = userData.$id;

  useEffect(() => {
    if (defaultData) {
      setIsEditMode(true);
      const { title, originalUrl, customSlug, expiration, expirationDate } =
        defaultData;
      setValue("title", title);
      setValue("originalUrl", originalUrl);
      setValue("customSlug", customSlug);
      setValue("expiration", expiration);
      setValue("expirationDate", expirationDate);
      // setExpirationVisible(Boolean(expiration));
    } else {
      setIsEditMode(false);
      reset();
    }
  }, [defaultData, setValue, reset]);

  useEffect(() => {
    if (longurlFromQuery) {
      setValue("originalUrl", longurlFromQuery);
    }
  }, [longurlFromQuery, setValue]);

  const handleQrToggle = (e) => {
    setQrVisible(e.target.checked);
    const url = watch("originalUrl");
    if (e.target.checked) {
      if (url) {
        setQrCode(`https://api.qrserver.com/v1/create-qr-code/?data=${url}`);
      }
    } else {
      setQrCode("");
    }
  };

  const handleCancle = () => {
    setQrVisible(false);
    // setExpirationVisible(false);
    if (isEditMode) {
      reset(defaultData);
      return;
    }
    navigate("/dashboard/create");
    reset();
  };

  const generateSlug = () => {
    return Math.random().toString(36).substring(2, 8);
  };

  const onSubmit = (data) => {
    setLoading(true);

    if (defaultData) {
      console.log("Updating link with data:", data);
    } else {
      createNewLinkUrl(data);
    }
  };

  const createNewLinkUrl = async (data) => {
    const SHORT_URL_DOMAIN = "short.ly";

    if (data.customSlug === "") {
      const slug = generateSlug();
      data.customSlug = slug;
    }

    data.userId = userId;

    data.shortUrl = SHORT_URL_DOMAIN + "/" + data.customSlug;

    try {
      const response = await createUrl({
        shortUrl: data.shortUrl,
        title: data.title,
        customSlug: data.customSlug,
        originalUrl: data.originalUrl,
        userId: data.userId,
      });

      if (response) {
        notify({
          message: "Short url created successfully.",
          type: responseStatus.SUCCESS,
          timeout: 5000,
        });
        reset();
        return;
      }
    } catch (error) {
      if (error?.type === responseErrorType.GENERAL_RATE_LIMIT_EXEED) {
        notify({
          message: "Too Many Requests! Please try again after some time.",
          type: responseStatus.ERROR,
          timeout: 5000,
        });
        return;
      }

      notify({
        message: "Failed to create link. Try again later.",
        type: responseStatus.ERROR,
        timeout: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full h-full flex items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-16 w-full">
        <div className="flex items-start gap-4">
          {/* BOX LEFT */}
          <div className="p-10 pt-8 space-y-4 w-[60%] border border-zinc-300 bg-white">
            <Input
              autoFocus={true}
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
              placeholder="https://example.com/my-long-url"
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

            <div className="space-y-2">
              <label>Custom Back-Half (Optional)</label>
              <div className="relative flex w-full overflow-hidden">
                <p className="border border-black border-r-0 py-3 px-5 h-fit bg-zinc-100">
                  short.ly
                </p>
                <Input
                  type="text"
                  placeholder="Eg: your custom back-half"
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
          {/* <div className="w-[40%] border border-zinc-300 bg-white">
            <div className="p-6 border-b space-y-4 border-zinc-300">
              <div className="flex items-center gap-4">
                <input
                  type="checkbox"
                  {...register("expiration")}
                  onChange={(e) => setExpirationVisible(e.target.checked)}
                  className="h-5 w-5 accent-black"
                />
                <label className="font-medium">Set Expiration</label>
              </div>

              {expirationVisible && (
                <input
                  type="date"
                  {...register("expirationDate")}
                  className="w-full border border-gray-400 p-2 px-4"
                />
              )}
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-center gap-4">
                <input
                  type="checkbox"
                  {...register("qr")}
                  onChange={handleQrToggle}
                  className="h-5 w-5 accent-black "
                />
                <label className="font-medium">Generate QR Code</label>
              </div>

              {qrVisible && qrCode && (
                <div className="p-4 border border-zinc-300">
                  <img src={qrCode} alt="QR Code" className="w-full" />
                </div>
              )}
            </div>
          </div> */}

          <div className="w-[40%] border border-zinc-300 bg-white">
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-4">
                <input
                  type="checkbox"
                  {...register("qr")}
                  onChange={handleQrToggle}
                  className="h-5 w-5 accent-black "
                />
                <label className="font-medium">Generate QR Code</label>
              </div>

              {qrVisible && qrCode && (
                <div className="p-4 border border-zinc-300">
                  <img src={qrCode} alt="QR Code" className="w-full" />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className=" sticky bottom-0 px-8 py-4 flex items-center justify-end gap-2 w-full h-fit bg-white border border-zinc-300">
          <button
            type="button"
            className="bg-zinc-200 border border-zinc-300 px-6 py-2 cursor-pointer"
            onClick={handleCancle}
          >
            Reset to Default
          </button>

          <button
            type="submit"
            className="bg-black text-white px-6 py-2 border border-black"
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
      </form>
    </section>
  );
};

export default DashbaordLinkForm;
