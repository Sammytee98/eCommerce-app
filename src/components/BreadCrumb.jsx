import { Link, useLocation } from "react-router-dom";

const BreadCrumb = () => {
  const location = useLocation();
  const segments = location.pathname.split("/").filter(Boolean);

  return (
    <nav className="text-base text-neutral-500 font-oswald mb-6">
      <ol className="flex items-center ">
        <li>
          <Link to="/" className="hover:underline transition">
            Home
          </Link>
        </li>
        {segments.map((seg, i) => {
          const path = "/" + segments.slice(0, i + 1).join("/");
          const label = seg.charAt(0).toUpperCase() + seg.slice(1);
          const isLast = i === segments.length - 1;
          const isCategory = label.toLowerCase() === "category";

          return (
            <li key={i} className="flex items-center">
              <span className="mx-1 text-xl">/</span>
              {isLast ? (
                <span className="font-semibold">{label}</span>
              ) : isCategory ? (
                <Link to="/#categories" className="hover:underline">
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
