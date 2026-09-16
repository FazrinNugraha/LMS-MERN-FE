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
        <span className={`font-semibold text-xl ${variant === "dark" ? "text-ink" : "text-on-dark"}`}>
          Go-Learn
        </span>
        <span className={`text-[10px] font-medium tracking-[1.5px] uppercase ${variant === "dark" ? "text-muted" : "text-on-dark-soft"}`}>
          Learning Platform
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
