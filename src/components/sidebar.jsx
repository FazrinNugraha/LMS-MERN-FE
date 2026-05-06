import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import Logo from "./Logo";

export default function Sidebar({ isAdmin = true }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  const handleComingSoon = (e, featureName) => {
    e.preventDefault();
    toast('🚧 Fitur sedang dikembangkan oleh developer', {
      duration: 3000,
      icon: '⚠️',
    });
    closeSidebar();
  };

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-5 left-5 z-50 w-10 h-10 rounded-lg bg-white shadow-lg flex items-center justify-center border border-gray-200"
        aria-label="Toggle menu"
      >
        <div className="flex flex-col gap-1.5">
          <span className={`w-5 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-5 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`w-5 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </div>
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/20 z-40 backdrop-blur-sm"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside className={`sidebar-container fixed h-[calc(100vh-20px)] w-full max-w-[280px] my-[10px] ml-[10px] bg-[#DED4FF] overflow-hidden flex flex-1 rounded-[20px] z-40 transition-transform duration-300 lg:translate-x-0 shadow-xl border border-white/50 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="scroll-container flex w-full overflow-y-scroll hide-scrollbar">
        <nav className="flex flex-col w-full h-fit p-[20px] md:p-[30px] gap-10 z-10">
          <Logo variant="dark" to="/manager" />
          <ul className="flex flex-col gap-3 md:gap-4">
            <p className="font-semibold text-xs leading-[18px] text-gray-600">
              GENERAL
            </p>
            <li>
              <Link to="/manager" onClick={closeSidebar}>
                <div className="flex items-center gap-3 w-full rounded-full border p-[12px_16px] md:p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#662FFF] hover:shadow-md bg-white/60 border-white/80 group">
                  <img
                    src="/assets/images/icons/3dcube-white.svg"
                    className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 invert opacity-50 group-hover:invert-0 group-hover:opacity-100 transition-all duration-300"
                    alt="icon"
                  />
                  <span className="font-semibold text-gray-700 group-hover:text-white text-sm md:text-base transition-colors">
                    Overview
                  </span>
                </div>
              </Link>
            </li>
            {isAdmin && (
              <>
                <li>
                  <Link to="/manager/courses" onClick={closeSidebar}>
                    <div className="flex items-center gap-3 w-full rounded-full border p-[12px_16px] md:p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#662FFF] hover:shadow-md bg-white/60 border-white/80 group">
                      <img
                        src="/assets/images/icons/note-favorite-white.svg"
                        className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 invert opacity-50 group-hover:invert-0 group-hover:opacity-100 transition-all duration-300"
                        alt="icon"
                      />
                      <span className="font-semibold text-gray-700 group-hover:text-white text-sm md:text-base transition-colors">
                        Courses
                      </span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/manager/categories" onClick={closeSidebar}>
                    <div className="flex items-center gap-3 w-full rounded-full border p-[12px_16px] md:p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#662FFF] hover:shadow-md bg-white/60 border-white/80 group">
                      <img
                        src="/assets/images/icons/crown-white.svg"
                        className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 invert opacity-50 group-hover:invert-0 group-hover:opacity-100 transition-all duration-300"
                        alt="icon"
                      />
                      <span className="font-semibold text-gray-700 group-hover:text-white text-sm md:text-base transition-colors">
                        Categories
                      </span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/manager/students" onClick={closeSidebar}>
                    <div className="flex items-center gap-3 w-full rounded-full border p-[12px_16px] md:p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#662FFF] hover:shadow-md bg-white/60 border-white/80 group">
                      <img
                        src="/assets/images/icons/profile-2user-white.svg"
                        className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 invert opacity-50 group-hover:invert-0 group-hover:opacity-100 transition-all duration-300"
                        alt="icon"
                      />
                      <span className="font-semibold text-gray-700 group-hover:text-white text-sm md:text-base transition-colors">
                        Students
                      </span>
                    </div>
                  </Link>
                </li>
              </>
            )}
          </ul>
          <ul className="flex flex-col gap-3 md:gap-4">
            <p className="font-semibold text-xs leading-[18px] text-gray-600">
              OTHERS
            </p>
            <li>
              <Link to="#" onClick={(e) => handleComingSoon(e, 'Subscription')}>
                <div className="flex items-center gap-3 w-full rounded-full border p-[12px_16px] md:p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#662FFF] hover:shadow-md bg-white/60 border-white/80 group">
                  <img
                    src="/assets/images/icons/security-card-white.svg"
                    className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 invert opacity-50 group-hover:invert-0 group-hover:opacity-100 transition-all duration-300"
                    alt="icon"
                  />
                  <span className="font-semibold text-gray-700 group-hover:text-white text-sm md:text-base transition-colors">
                    Subscription
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="#" onClick={(e) => handleComingSoon(e, 'Rewards')}>
                <div className="flex items-center gap-3 w-full rounded-full border p-[12px_16px] md:p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#662FFF] hover:shadow-md bg-white/60 border-white/80 group">
                  <img
                    src="/assets/images/icons/cup-white.svg"
                    className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 invert opacity-50 group-hover:invert-0 group-hover:opacity-100 transition-all duration-300"
                    alt="icon"
                  />
                  <span className="font-semibold text-gray-700 group-hover:text-white text-sm md:text-base transition-colors">
                    Rewards
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="#" onClick={(e) => handleComingSoon(e, 'Settings')}>
                <div className="flex items-center gap-3 w-full rounded-full border p-[12px_16px] md:p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#662FFF] hover:shadow-md bg-white/60 border-white/80 group">
                  <img
                    src="/assets/images/icons/setting-2-white.svg"
                    className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 invert opacity-50 group-hover:invert-0 group-hover:opacity-100 transition-all duration-300"
                    alt="icon"
                  />
                  <span className="font-semibold text-gray-700 group-hover:text-white text-sm md:text-base transition-colors">
                    Settings
                  </span>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <img
        src="/assets/images/backgrounds/sidebar-glow.png"
        className="absolute object-contain object-bottom bottom-0 opacity-30"
        alt="background"
      />
    </aside>
    </>
  );
}

Sidebar.propTypes = {
  isAdmin: PropTypes.bool,
};
