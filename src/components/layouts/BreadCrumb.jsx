import { Link, useLocation } from "react-router-dom";

const BreadCrumb = () => {
  // Get current URL location
  const location = useLocation();

  // Split pathname into individual segments and filter out empty strings
  const segments = location.pathname.split("/").filter(Boolean);

  return (
    <nav className="text-sm text-gray-500 font-oswald mb-5">
      <ol className="flex items-center ">
        {/* Always start with Home */}
        <li>
          <Link to="/" className="hover:underline transition">
            Home
          </Link>
        </li>

        {/* Loop through each path segment */}
        {segments.map((seg, i) => {
          // Build dynamic path up to this segment (for navigation)
          const path = "/" + segments.slice(0, i + 1).join("/");

          // Decode URL-encoded segment (e.g. "%20" -> " ")
          const decoded = decodeURIComponent(seg);
          //Capitalize the label (first letter uppercased)
          const label = decoded.charAt(0).toUpperCase() + decoded.slice(1);
          // Check if it's the laast breadcrumb item
          const isLast = i === segments.length - 1;
          // Special case: "Category" segment should scroll to home page section
          const isCategory = label.toLowerCase() === "category";

          return (
            <li key={i} className="flex items-center">
              {/* Seperator */}
              <span className="mx-1 text-lg tablet:text-xl">/</span>

              {/* Final item is not a link */}
              {isLast ? (
                <span className="font-semibold">{label}</span>
              ) : isCategory ? (
                <Link
                  to="/#categories"
                  className="hover:underline flex items-center"
                >
                  {label}
                </Link>
              ) : (
                <Link to={path} className="hover:underline transition">
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadCrumb;
