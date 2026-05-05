import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Logo({ to = "/", className = "", variant = "dark" }) {
  return (
    <Link to={to} className={`flex items-center gap-3 ${className}`}>
      {/* Logo Image */}
      <img 
        src="/assets/images/logos/logo-platform.jpg" 
        alt="Go-Learn Logo" 
        className="w-10 h-10 rounded-lg object-cover shadow-lg"
      />
      
      {/* Text Logo */}
      <div className="flex flex-col leading-none">
        <span className={`font-extrabold text-xl ${variant === "dark" ? "text-gray-900" : "text-white"}`}>
          Go-Learn
        </span>
        <span className={`text-[10px] font-medium tracking-wider ${variant === "dark" ? "text-gray-600" : "text-[#838C9D]"}`}>
          LEARNING PLATFORM
        </span>
      </div>
    </Link>
  );
}

Logo.propTypes = {
  to: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["dark", "light"]),
};
