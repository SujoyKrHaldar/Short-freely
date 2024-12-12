/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet";
import config from "../../config";

const clientUrl = config.getKey("CLIENT_URL");

function MetaTags({
  title = "Blogger.com",
  description = "",
  conicalRoute = "",
}) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${clientUrl}/${conicalRoute}`} />
    </Helmet>
  );
}

export default MetaTags;
