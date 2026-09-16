import React from "react";
import Logo from "../../components/Logo";
import { Link } from "react-router-dom";

export default function SuccessCheckoutPage() {
  return (
    <div className="relative flex flex-col flex-1 p-[10px]">
      <div className="absolute w-[calc(100%-20px)] min-h-[calc(100vh-20px)] h-[calc(100%-20px)] bg-[#fffaf0] -z-10 rounded-[20px]">
        <img
          src="assets/images/backgrounds/background-glow.png"
          className="absolute bottom-0 transform -translate-x-1/2 left-1/2 opacity-60"
          alt=""
        />
      </div>
      <nav className="flex items-center justify-between p-[30px]">
        <Logo />
        <div className="flex items-center gap-3">
          <Link to="/manager/sign-in">
            <div className="flex items-center gap-3 w-fit rounded-full p-[14px_20px] transition-all duration-300 bg-[#ff6b5a] border border-[#e5e5e5] hover:bg-[#e85a49]">
              <span className="font-semibold text-white">Sign In</span>
            </div>
          </Link>
        </div>
      </nav>
      <h1 className="font-extrabold text-[46px] leading-[50px] tracking-[-1px] text-[#1a3a3a] text-center m-auto">
        Succses Checkout <br />
        Please Sign-in to Continue
      </h1>

      <Link to="/manager/sign-in">
        <div className="flex items-center justify-center gap-3 w-max mx-auto mt-5 rounded-full p-[20px_50px] transition-all duration-300 bg-[#ff6b5a] border border-[#e5e5e5] hover:bg-[#e85a49]">
          <span className="font-semibold text-white">Sign-In Now</span>
        </div>
      </Link>
    </div>
  );
}
