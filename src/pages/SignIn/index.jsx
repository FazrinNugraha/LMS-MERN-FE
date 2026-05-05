import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { signInSchema } from "../../utils/zodSchema";
import { useMutation } from "@tanstack/react-query";
import { postSignIn } from "../../services/authService";
import secureLocalStorage from "react-secure-storage";
import { STORAGE_KEY } from "../../utils/const";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import Logo from "../../components/Logo";

export default function SigninPage({ type = "manager" }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInSchema),
    mode: "onChange",
  });

  const { isLoading, mutateAsync } = useMutation({
    mutationFn: (data) => postSignIn(data),
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const loadingToast = toast.loading("Signing in...");
    
    try {
      const response = await mutateAsync(data);
      secureLocalStorage.setItem(STORAGE_KEY, response.data);

      toast.success("Welcome back! 🎉", { id: loadingToast });

      if (response.data.role === "manager") {
        navigate("/manager");
      } else {
        navigate("/student");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to sign in. Please check your credentials.", { id: loadingToast });
      console.log(error);
    }
  };

  return (
    <div className="relative flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <nav className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between p-[20px] md:p-[30px] gap-[20px] md:gap-0">
        <Logo variant="dark" />

        <div className="flex flex-wrap items-center gap-2 md:gap-3 w-full md:w-auto">
          {type === "manager" && (
            <Link to="/manager/sign-up">
              <div className="flex-1 md:flex-none flex items-center justify-center gap-3 w-full md:w-fit rounded-full border-2 border-[#662FFF] p-[12px_20px] md:p-[14px_24px] transition-all duration-300 hover:bg-[#662FFF] hover:shadow-lg bg-white">
                <span className="font-semibold text-[#662FFF] hover:text-white transition-colors text-sm md:text-base">
                  Sign Up
                </span>
              </div>
            </Link>
          )}
        </div>
      </nav>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative z-10 flex flex-col w-full md:w-[450px] h-fit rounded-3xl border-2 border-gray-200 p-[24px] md:p-[40px] gap-[20px] md:gap-[30px] bg-white shadow-2xl m-auto"
      >
        <div>
          <h1 className="font-bold text-2xl md:text-3xl leading-tight text-gray-900">
            Welcome Back!
          </h1>
          <p className="text-gray-600 text-sm md:text-base mt-2">
            {type === "manager" ? "Manage your employees easily" : "Continue your learning journey"}
          </p>
        </div>

        <hr className="border-gray-200" />

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email Address
          </label>
          <div className="flex items-center gap-3 w-full rounded-xl border-2 p-[12px_16px] md:p-[14px_20px] transition-all duration-300 focus-within:border-[#662FFF] focus-within:shadow-md bg-gray-50 border-gray-200">
            <img
              src="/assets/images/icons/sms-white.svg"
              className="w-5 h-5 md:w-6 md:h-6 flex shrink-0 opacity-60"
              alt="icon"
            />
            <input
              type="email"
              id="email"
              className="appearance-none outline-none !bg-transparent w-full font-medium text-gray-900 text-sm md:text-base placeholder:font-normal placeholder:text-gray-400"
              placeholder="your.email@example.com"
              {...register("email")}
            />
            {!errors.email && (
              <span className="text-green-500 text-sm">✓</span>
            )}
          </div>
          {errors.email?.message && (
            <p className="text-red-500 text-xs px-2 flex items-center gap-1">
              <span>⚠</span> {errors.email?.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="flex items-center gap-3 w-full rounded-xl border-2 p-[12px_16px] md:p-[14px_20px] transition-all duration-300 focus-within:border-[#662FFF] focus-within:shadow-md bg-gray-50 border-gray-200">
            <img
              src="/assets/images/icons/key-white.svg"
              className="w-5 h-5 md:w-6 md:h-6 flex shrink-0 opacity-60"
              alt="icon"
            />
            <input
              type="password"
              id="password"
              className="appearance-none outline-none !bg-transparent w-full font-medium text-gray-900 text-sm md:text-base placeholder:font-normal placeholder:text-gray-400"
              placeholder="Enter your password"
              {...register("password")}
            />
            {!errors.password && (
              <span className="text-green-500 text-sm">✓</span>
            )}
          </div>
          {errors.password?.message && (
            <p className="text-red-500 text-xs px-2 flex items-center gap-1">
              <span>⚠</span> {errors.password?.message}
            </p>
          )}

          <div className="flex justify-end mt-1">
            <Link
              to="#"
              className="text-xs md:text-sm text-[#662FFF] hover:text-[#8661EE] hover:underline transition-colors"
            >
              Forgot Password?
            </Link>
          </div>
        </div>

        <hr className="border-gray-200" />

        <button
          type="submit"
          disabled={isLoading}
          className="w-full rounded-xl border-2 border-[#662FFF] p-[14px_20px] md:p-[16px_24px] text-center font-semibold text-white text-sm md:text-base bg-gradient-to-r from-[#662FFF] to-[#8661EE] hover:from-[#5528CC] hover:to-[#662FFF] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
        >
          {isLoading ? "Signing In..." : `Sign In to ${type === "manager" ? "Manager" : "Student"} Dashboard`}
        </button>

        {type === "manager" && (
          <p className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/manager/sign-up"
              className="text-[#662FFF] hover:text-[#8661EE] font-semibold hover:underline transition-colors"
            >
              Sign Up
            </Link>
          </p>
        )}
      </form>

      <div className="h-20"></div>
    </div>
  );
}

SigninPage.propTypes = {
  type : PropTypes.string
}
