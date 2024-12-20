import { useNavigate } from "react-router-dom";
import { SignupForm } from "../../components/ui";
import { MetaTags } from "../../components/shared";
import { communicationThree as imageUrl } from "../../utils/imageUrls";
import { useQueryParams } from "../../hooks";

function Signup() {
  const navigate = useNavigate();

  const queryParams = useQueryParams("redirectTo");

  const redirectRoute = queryParams
    ? `/login?redirectTo=${queryParams}`
    : "/login";

  return (
    <>
      <MetaTags
        title="Create account • Short Freely"
        description="Create your account"
        conicalRoute="signup"
      />

      <section className="container border-b border-zinc-300 relative w-full h-full flex flex-col laptop:flex-row items-center justify-around min-h-screen py-16">
        <div className="hidden mobile:block mobile:w-[400px] laptop:w-[500px]">
          <img
            src={imageUrl}
            alt="hero image - signup"
            draggable={false}
            loading="lazy"
          />
        </div>

        <div className="w-full max-w-md pt-16 mobile:py-0 laptop:py-16">
          <h1 className="h1-bold mb-6 mobile:mb-8">Create Account</h1>

          <SignupForm className="space-y-4 mt-4 mb-4" />

          <p className="text-sm mb-8">
            By continuing, I agree to the Terms of Use & Privacy Policy
          </p>

          <p className=" font-normal ">
            Already have an Account?{" "}
            <span
              className="font-semibold cursor-pointer"
              onClick={() => navigate(redirectRoute)}
            >
              Try Login
            </span>
          </p>
        </div>
      </section>
    </>
  );
}

export default Signup;
