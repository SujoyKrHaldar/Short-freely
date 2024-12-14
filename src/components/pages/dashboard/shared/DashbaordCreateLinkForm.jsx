import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Input from "../../../ui/forms/Input";
import { useQueryParams } from "../../../../hooks";
import { useNavigate } from "react-router-dom";

const DashbaordCreateLinkForm = () => {
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
  const [error, setError] = useState(false);
  const [qrCode, setQrCode] = useState("");
  const [expirationVisible, setExpirationVisible] = useState(false);
  const longurlFromQuery = useQueryParams("longurl");
  const navigate = useNavigate();

  // Watch fields
  // const watchQr = watch("qr", false);
  // const watchExpiration = watch("expiration", false);

  useEffect(() => {
    if (longurlFromQuery) {
      setValue("destination", longurlFromQuery);
    }
  }, [longurlFromQuery, setValue]);

  const handleQrToggle = (e) => {
    setQrVisible(e.target.checked);
    const url = watch("destination");
    if (e.target.checked) {
      if (url) {
        setQrCode(`https://api.qrserver.com/v1/create-qr-code/?data=${url}`);
      }
    } else {
      setQrCode("");
    }
  };

  const generateSlug = () => {
    return Math.random().toString(36).substring(2, 8);
  };

  const onSubmit = (data) => {
    setError(false);
    setLoading(true);

    if (data.slug === "") {
      const slug = generateSlug();
      data.slug = slug;
    }

    console.log("Form Data Submitted:", data);
    setLoading(false);
  };

  const handleCancle = () => {
    setQrVisible(false);
    setExpirationVisible(false);
    navigate("/dashboard/create");
    reset();
  };

  return (
    <section className="relative w-full h-full flex items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-16 w-full">
        <div className="flex items-start gap-4">
          {/* BOX LEFT */}
          <div className="p-10 pt-8 space-y-4 w-[60%] border border-zinc-300 bg-white">
            <Input
              autoFocus={true}
              label="Title (Optional)"
              type="text"
              placeholder="Enter a title"
              {...register("title")}
            />

            <Input
              label="Destination"
              type="url"
              placeholder="https://example.com/my-long-url"
              error={errors?.destination || error}
              errorMessage={errors?.destination?.message}
              {...register("destination", {
                required: "Destination URL is required",
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
                  Lol.is
                </p>
                <Input
                  type="text"
                  placeholder="Eg: your-custom-back-half"
                  error={errors?.slug || error}
                  errorMessage={errors?.slug?.message}
                  {...register("slug", {
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
          <div className="w-[40%] border border-zinc-300 bg-white">
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
          </div>
        </div>

        <div className=" sticky bottom-0 px-8 py-4 flex items-center justify-end gap-2 w-full h-fit bg-white border border-zinc-300">
          <button
            type="button"
            className="bg-zinc-200 border border-zinc-300 px-6 py-2 cursor-pointer"
            onClick={handleCancle}
          >
            Reset Fields
          </button>

          <button
            type="submit"
            className="bg-black text-white px-6 py-2 border border-black"
          >
            {loading ? (
              <div className="flex items-center justify-center gap-3 mr-4">
                <div className="w-5 h-5 rounded-full border-[3px] border-zinc-500 border-l-transparent animate-spin"></div>
                <p>Please Wait</p>
              </div>
            ) : (
              <p>Create Your Link</p>
            )}
          </button>
        </div>
      </form>
    </section>
  );
};

export default DashbaordCreateLinkForm;
