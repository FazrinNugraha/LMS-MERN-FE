import React, { useState } from "react";
import { useRouteLoaderData } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import { ROLE_MANAGER } from "../utils/const";
import { ROLE_STUDENT } from "../utils/const";
import toast from "react-hot-toast";

export default function Header({type = "manager"}) {
  const session = useRouteLoaderData(type === "manager" ? ROLE_MANAGER : ROLE_STUDENT);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    secureLocalStorage.removeItem("STORAGE_KEY");
    toast.success("Logged out successfully");
    window.location.replace(`/${type}/sign-in`);
  };

  const handleComingSoon = (e, featureName) => {
    e.preventDefault();
    toast('🚧 Fitur sedang dikembangkan oleh developer', {
      duration: 3000,
      icon: '⚠️',
    });
    setIsDropdownOpen(false);
  };

  // Get initials from name (e.g., "John Doe" -> "JD")
  const getInitials = (name) => {
    if (!name) return "U";
    const names = name.trim().split(" ");
    if (names.length === 1) return names[0].charAt(0).toUpperCase();
    return (names[0].charAt(0) + names[names.length - 1].charAt(0)).toUpperCase();
  };

  // Get avatar color based on role
  const getAvatarStyle = () => {
    if (type === "manager") {
      return {
        bgColor: "#662FFF", // Purple - matching theme
        textColor: "#FFFFFF",
        ringColor: "#8661EE"
      };
    } else {
      return {
        bgColor: "#10B981", // Green for student
        textColor: "#FFFFFF",
        ringColor: "#34D399"
      };
    }
  };

  const avatarStyle = getAvatarStyle();
  const initials = getInitials(session?.name);

  return (
    <div
      id="TopBar"
      className="flex flex-col md:flex-row items-center justify-between gap-[15px] md:gap-[30px]"
    >
      <form
        action=""
        className="flex items-center w-full md:max-w-[450px] rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]"
      >
        <input
          type="text"
          name="search"
          id="search"
          className="appearance-none outline-none w-full py-2 md:py-3 font-semibold text-sm md:text-base placeholder:font-normal placeholder:text-[#838C9D]"
          placeholder="Search course, student..."
          aria-label="Search"
        />
        <img
          src="/assets/images/icons/search-normal.svg"
          className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0"
          alt="search icon"
        />
      </form>
      <div className="relative flex items-center justify-end gap-[14px] flex-shrink-0">
        <div className="text-right hidden sm:block">
          <p className="font-semibold text-sm md:text-base">{session?.name}</p>
          <p className="text-xs md:text-sm leading-[21px] text-[#838C9D]">
            {session?.role}
          </p>
        </div>
        <button
          type="button"
          id="profileButton"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex shrink-0 w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full items-center justify-center font-bold text-base md:text-lg transition-all duration-300 focus:outline-none shadow-md hover:shadow-lg"
          style={{ 
            backgroundColor: avatarStyle.bgColor,
            color: avatarStyle.textColor,
            border: `2px solid ${isDropdownOpen ? avatarStyle.ringColor : 'transparent'}`
          }}
          aria-label="Profile menu"
          aria-expanded={isDropdownOpen}
        >
          {initials}
        </button>
        {isDropdownOpen && (
          <>
            <div 
              className="fixed inset-0 z-10" 
              onClick={() => setIsDropdownOpen(false)}
            />
            <div
              id="ProfileDropdown"
              className="absolute top-full right-0 z-20 mt-2"
            >
              <ul className="flex flex-col w-[180px] md:w-[200px] rounded-[20px] border border-[#CFDBEF] p-4 md:p-5 gap-4 bg-white shadow-xl">
                <li className="font-semibold text-sm md:text-base hover:text-[#662FFF] transition-colors duration-300">
                  <a href="#" onClick={(e) => handleComingSoon(e, 'My Account')}>My Account</a>
                </li>
                <li className="font-semibold text-sm md:text-base hover:text-[#662FFF] transition-colors duration-300">
                  <a href="#" onClick={(e) => handleComingSoon(e, 'Subscriptions')}>Subscriptions</a>
                </li>
                <li className="font-semibold text-sm md:text-base hover:text-[#662FFF] transition-colors duration-300">
                  <a href="#" onClick={(e) => handleComingSoon(e, 'Settings')}>Settings</a>
                </li>
                <li className="font-semibold text-sm md:text-base text-red-500 hover:text-red-600 transition-colors duration-300">
                  <button onClick={handleLogout} type="button" className="w-full text-left">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
