import React from "react";
import Input from "./Input";
import { useForm } from "react-hook-form";
import { responseStatus } from "../../../utils/constants";
import { registerUser } from "../../../api/authService";
import { useNotification } from "../../../hooks";

// eslint-disable-next-line react/prop-types
function SignupForm({ className }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const notify = useNotification();

  const createUserAccount = async (data) => {
    setError(false);
    setLoading(true);

    const { email, name, cpassword, password } = data;

    if (cpassword !== password) {
      notify({
        message: "Password do not matched.",
        type: responseStatus.ERROR,
        timeout: 3000,
      });
      setLoading(false);
      return;
    }

    console.log("data", data);

    try {
      const res = await registerUser({ email, name, password });
      console.log({ Response: res });

      notify({
        message: "Created successfully",
        type: responseStatus.SUCCESS,
        timeout: 3000,
      });

      // if (session) {
      //   const { userData, profileData } = await authService.getCurrentUser();
      //   if (userData) {
      //     profileData
      //       ? dispatch(ACTIVATE_PROFILE(profileData))
      //       : dispatch(DISABLE_PROFILE());
      //     dispatch(LOGIN(userData));
      //     dispatch(
      //       SHOW_NOTIFICATION({
      //         message: `Welcome back ${userData.name} ✌️`,
      //         type: "SUCCESS",
      //       })
      //     );
      //     sessionStorage.setItem("isLoggedin", true);
      //   }
      // }
    } catch (error) {
      setError(error);
      console.log({ error: error });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      {error && <p>{error}</p>}
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

      {/* <ShowError
          error={error}
          errorMessage={error}
          closeError={() => setError("")}
        /> */}
    </div>
  );
}

export default SignupForm;
