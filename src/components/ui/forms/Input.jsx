/* eslint-disable react/prop-types */
import { forwardRef, useId, useState } from "react";
import { EyeClosed, Eye as EyeOpen } from "lucide-react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/display-name
const Input = forwardRef(
  (
    {
      label,
      className = "",
      type = "text",
      description = "",
      error = null,
      errorMessage = "",
      enableResetPasswordBtn = false,
      resetPasswordUrl = "/reset-password",
      ...props
    },
    ref
  ) => {
    const [currentType, setType] = useState(type);
    const id = useId();

    return (
      <div className="w-full space-y-2">
        {!enableResetPasswordBtn ? (
          label && <label htmlFor={id}>{label}</label>
        ) : (
          <div className="flex items-center justify-between gap-4">
            <label htmlFor={id}>{label}</label>
            <Link to={resetPasswordUrl} className="text-sm">
              Forget Password
            </Link>
          </div>
        )}

        <div className="space-y-2">
          <div className="relative">
            <input
              id={id}
              {...props}
              ref={ref}
              type={type === "password" ? currentType : type}
              className={`border border-black py-3 px-5 w-full
              placeholder:text-zinc-400 ${className}
              ${
                error
                  ? "border-red-600 text-red-600 placeholder:text-red-600"
                  : "border-black text-black placeholder:text-gray-800"
              } `}
            />

            {type === "password" && (
              <div
                className={`cursor-pointer w-7 text-2xl
            ${
              error ? "text-red-600" : "text-gray-400"
            } absolute bottom-[14px] right-[12px]`}
              >
                {currentType === "password" ? (
                  <div onClick={() => setType("text")}>
                    <EyeClosed color="#a1a1aa" size={20} />
                  </div>
                ) : (
                  <div onClick={() => setType(type)}>
                    <EyeOpen color="#a1a1aa" size={20} />
                  </div>
                )}
              </div>
            )}
          </div>

          {description && !error && (
            <p className="text-xs text-gray-500">{description}</p>
          )}
        </div>

        {error && errorMessage && (
          <p className="w-fit text-red-600 text-sm">{errorMessage}</p>
        )}
      </div>
    );
  }
);

export default Input;
