/* eslint-disable react/prop-types */
import { useState } from "react";
import Input from "./Input";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { responseStatus, responseErrorType } from "../../../utils/constants";
import { registerUser } from "../../../api/authService";
import { useAuth, useNotification } from "../../../hooks";
import { emailImgUrl } from "../../../utils/imageUrls";

function SignupForm({ className }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState(false);
  const [errorPopup, setErrorPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const { login: saveUserDataToClient } = useAuth();
  const notify = useNotification();

  const createUserAccount = async (data) => {
    setError(false);
    setLoading(true);
    setErrorPopup(false);

    const { email, name, cpassword, password } = data;

    if (cpassword !== password) {
      notify({
        message: "Password doesn't matched.",
        type: responseStatus.ERROR,
        timeout: 5000,
      });
      setLoading(false);
      return;
    }

    try {
      const { currentUserData } = await registerUser({
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

      if (error?.type === responseErrorType.USER_ALREADY_EXIST) {
        setErrorPopup(true);
        return;
      }

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

  const handleClick = () => {
    if (error) {
      setError(false);
      return;
    }
  };

  return (
    <>
      {errorPopup && <EmailExistPopup handleClick={handleClick} />}

      <div className="w-full">
        <form onSubmit={handleSubmit(createUserAccount)} className={className}>
          <Input
            autoFocus={true}
            label="Full Name"
            placeholder="john doe"
            error={errors?.name || error}
            errorMessage={errors?.name?.message}
            {...register("name", {
              required: "Your Name is required.",
              minLength: {
                value: 5,
                message: "Name must be at least 5 characters long.",
              },
            })}
          />

          <Input
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

          <Input
            label="Confirm Password"
            type="password"
            placeholder="8+ characters"
            error={errors?.cpassword || error}
            errorMessage={errors?.cpassword?.message}
            {...register("cpassword", {
              required: "Field is required.",
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
                <p>Creating Account</p>
              </div>
            ) : (
              <p>Continue</p>
            )}
          </button>
        </form>
      </div>
    </>
  );
}

function EmailExistPopup({ handleClick }) {
  return (
    <div className="fixed z-10 inset-0 w-full h-screen bg-zinc-100 flex items-center justify-center">
      <div className="text-center max-w-md p-8 bg-white border border-zinc-300">
        <div className="w-[200px] h-auto mx-auto">
          <img src={emailImgUrl} alt="email exits" />
        </div>
        <div className="mb-6 space-y-4">
          <h2 className="text-4xl font-bold">
            User with this Email already exist
          </h2>
          <p>
            We have found an existing account. If you would like to proceed with
            this account choose for Login. Or please change the email address to
            continue.
          </p>
        </div>

        <div className="flex flex-col items-center w-full gap-2">
          <Link
            className="py-3 px-6 text-center bg-black text-white w-full border border-black"
            to="/login"
          >
            Continue Login
          </Link>

          <p
            className="py-3 px-6 cursor-pointer text-center bg-white text-black w-full border border-black"
            onClick={handleClick}
          >
            Change Email
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
