import { useNavigate } from "react-router-dom";
import { LoginForm } from "../../components/ui";
import { MetaTags } from "../../components/shared";
import { greetingImgUrl as imageUrl } from "../../utils/imageUrls";
import { useQueryParams } from "../../hooks";

function Login() {
  const navigate = useNavigate();

  const queryParams = useQueryParams("redirectTo");

  const redirectRoute = queryParams
    ? `/signup?redirectTo=${queryParams}`
    : "/signup";

  return (
    <>
      <MetaTags
        title="Login • Short Freely"
        description="Login to your account"
        conicalRoute="login"
      />

      <section className="container border-b border-zinc-300 relative w-full h-full flex flex-col-reverse laptop:flex-row justify-cend items-center mobile:justify-around min-h-screen py-16">
        <div className="w-full max-w-md">
          <h1 className="h1-bold mb-6 mobile:mb-8">Login</h1>

          <LoginForm className="space-y-4 mt-4 mb-4" />

          <p className="text-sm mb-8">
            By continuing, I agree to the Terms of Use & Privacy Policy
          </p>

          <p className=" font-normal ">
            Don&apos;t have an Account?{" "}
            <span
              className="font-semibold cursor-pointer"
              onClick={() => navigate(redirectRoute)}
            >
              Create Account
            </span>
          </p>
        </div>

        <div className="hidden mobile:block mobile:w-[400px] laptop:w-[500px] mb-8 laptop:mb-0">
          <img
            src={imageUrl}
            alt="hero image - login"
            draggable={false}
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}

export default Login;
