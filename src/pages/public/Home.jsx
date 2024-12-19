import { MetaTags } from "../../components/shared";
import {
  HomeLandingSection,
  HomeFooterSection,
  HomeAboutSection,
  HomeFeatureSection,
  HomeTestimonialSection,
  HomeFaqSection,
  HomeProductUsedBySection,
} from "../../components/pages/home";

function Home() {
  return (
    <>
      <MetaTags
        title="Simplify Your Links, Amplify Your Reach • Short Freely"
        description="Shorten long URLs, track performance, and manage all your links in
            one place. Your go-to solution for smarter sharing."
        conicalRoute=""
      />
      <HomeLandingSection />
      <HomeAboutSection />
      <HomeFeatureSection />
      <HomeTestimonialSection />
      <HomeProductUsedBySection />
      <HomeFaqSection />
      <HomeFooterSection />
    </>
  );
}

export default Home;
