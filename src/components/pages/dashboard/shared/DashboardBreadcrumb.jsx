import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DashboardBreadcrumb = ({ links }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="flex items-center text-zinc-500">
        {links.map((link, index) => (
          <li key={index} className="flex items-center">
            {index !== links.length - 1 ? (
              <>
                <Link to={link.url} className="hover:text-black">
                  {link.name}
                </Link>
                <span className="mx-2 text-gray-400">/</span>
              </>
            ) : (
              <p>{link.name}</p>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

// Define PropTypes for validation
DashboardBreadcrumb.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DashboardBreadcrumb;
