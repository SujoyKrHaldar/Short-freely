/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";
import { responseStatus, responseErrorType } from "../../../utils/constants";
import { loginUser } from "../../../api/authService";
import { useAuth, useNotification, useQueryParams } from "../../../hooks";

function LoginForm({ className }) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const existingEmail = useQueryParams("email");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { login: saveUserDataToClient } = useAuth();
  const notify = useNotification();

  useEffect(() => {
    existingEmail && setValue("email", existingEmail);
  }, [existingEmail, setValue]);

  const loginEvent = async (data) => {
    setError(false);
    setLoading(true);

    const { email, name, password } = data;

    try {
      const { currentUserData } = await loginUser({
        email,
        name,
        password,
      });

      saveUserDataToClient(currentUserData);

      notify({
        message: `Login successfull. Welcome ${currentUserData?.name}.`,
        type: responseStatus.SUCCESS,
        timeout: 5000,
      });

      sessionStorage.setItem("isLoggedin", true);
    } catch (error) {
      setError(true);

      if (error?.type === responseErrorType.GENERAL_RATE_LIMIT_EXEED) {
        notify({
          message: "Too Many Requests! Please try again after some time.",
          type: responseStatus.ERROR,
          timeout: 5000,
        });
        return;
      }

      notify({
        message: error.message,
        type: responseStatus.ERROR,
        timeout: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(loginEvent)} className={className}>
        <Input
          autoFocus={true}
          label="Your Email"
          type="email"
          placeholder="johndoe@xyz.com"
          error={errors?.email || error}
          errorMessage={errors?.email?.message}
          {...register("email", {
            required: "Email is required.",
            validate: (value) =>
              /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(value) ||
              "Please enter a valid Email.",
          })}
        />

        <Input
          label="Password"
          type="password"
          enableResetPasswordBtn={false}
          placeholder="8+ characters"
          error={errors?.password || error}
          errorMessage={errors?.password?.message}
          {...register("password", {
            required: "Password is required.",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long.",
            },
          })}
        />

        <button
          className="py-3 px-6 text-center bg-black text-white w-full border border-black"
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <div className="flex items-center justify-center gap-3 mr-4">
              <div className="w-5 h-5 rounded-full border-[3px] border-zinc-500 border-l-transparent animate-spin"></div>
              <p>Please Wait</p>
            </div>
          ) : (
            <p>Login to Dashboard</p>
          )}
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
