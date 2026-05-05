import { Link } from "react-router-dom";
import Logo from "../../components/Logo";

export default function LandingPage() {
  return (
    <div className="relative flex flex-col min-h-screen bg-white overflow-hidden">
      {/* Navbar */}
      <nav className="relative z-20 flex items-center justify-between px-6 md:px-12 lg:px-20 py-6 bg-white border-b border-gray-100">
        <Logo variant="dark" />

        <div className="flex items-center gap-3">
          <Link to="/manager/sign-in">
            <button className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium px-4 py-2">
              Sign in
            </button>
          </Link>
          <Link to="/manager/sign-up">
            <button className="bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium px-6 py-2.5 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md">
              Sign Up
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 py-16 md:py-24">
        {/* Floating Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Top Left - Student Icon */}
          <div className="absolute top-20 left-[5%] w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-400 to-blue-500 rounded-3xl shadow-lg flex items-center justify-center animate-float">
            <img
              src="/assets/images/icons/profile-2user-white.svg"
              className="w-8 h-8 md:w-10 md:h-10"
              alt="students"
            />
          </div>

          {/* Top Center Left - Idea Icon */}
          <div className="absolute top-12 left-[20%] w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl shadow-lg flex items-center justify-center animate-float-delayed">
            <svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
            </svg>
          </div>

          {/* Center Top - Main Check Icon */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-[#662FFF] to-[#8661EE] rounded-[2rem] shadow-2xl flex items-center justify-center animate-pulse-slow">
            <svg className="w-10 h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          {/* Top Center Right - Energy Icon */}
          <div className="absolute top-12 right-[20%] w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl shadow-lg flex items-center justify-center animate-float">
            <svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
          </div>

          {/* Top Right - Eyes Icon */}
          <div className="absolute top-20 right-[5%] w-14 h-14 md:w-16 md:h-16 bg-white rounded-3xl shadow-lg flex items-center justify-center border border-gray-100 animate-float-delayed">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-gray-900 rounded-full"></div>
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-gray-900 rounded-full"></div>
            </div>
          </div>

          {/* Bottom Right - Manager Icon */}
          <div className="absolute top-40 right-[15%] w-14 h-14 md:w-16 md:h-16 rounded-3xl shadow-lg overflow-hidden border-4 border-white animate-float">
            <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
              <img
                src="/assets/images/icons/security-card-white.svg"
                className="w-7 h-7 md:w-8 md:h-8"
                alt="manager"
              />
            </div>
          </div>

          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
            <line x1="15%" y1="18%" x2="50%" y2="12%" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="5,5" />
            <line x1="25%" y1="12%" x2="50%" y2="12%" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="5,5" />
            <line x1="50%" y1="12%" x2="75%" y2="12%" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="5,5" />
            <line x1="50%" y1="12%" x2="85%" y2="18%" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="5,5" />
          </svg>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-3xl mx-auto mt-16 md:mt-20">
          <h1 className="font-extrabold text-xl md:text-6xl lg:text-7xl leading-tight text-gray-900 mb-6">
            All-in-one Learning
            <br />
            platform
          </h1>
          <p className="text-gray-500 text-base md:text-lg lg:text-xl max-w-xl mx-auto mb-12">
            Go-Learn is a modern, all-in-one learning platform
            <br className="hidden md:block" />
            designed to perfectly fit your educational needs
          </p>
        </div>

        {/* Quick Access Cards */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <Link to="/manager/sign-in">
            <div className="group bg-white border-2 border-gray-100 hover:border-[#662FFF] rounded-2xl p-6 transition-all duration-300 hover:shadow-xl cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#662FFF] to-[#8661EE] rounded-xl flex items-center justify-center">
                  <img
                    src="/assets/images/icons/security-card-white.svg"
                    className="w-6 h-6"
                    alt="manager"
                  />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-bold text-lg text-gray-900">Manager Portal</h3>
                  <p className="text-sm text-gray-500">Manage courses </p>
                </div>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-[#662FFF] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          <Link to="/student/sign-in">
            <div className="group bg-white border-2 border-gray-100 hover:border-[#10B981] rounded-2xl p-6 transition-all duration-300 hover:shadow-xl cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#10B981] to-[#34D399] rounded-xl flex items-center justify-center">
                  <img
                    src="/assets/images/icons/profile-2user-white.svg"
                    className="w-6 h-6"
                    alt="student"
                  />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-bold text-lg text-gray-900">Student Portal</h3>
                  <p className="text-sm text-gray-500">Students Courses</p>
                </div>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-[#10B981] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 text-gray-400 text-sm border-t border-gray-100">
        <p>© 2025 Go-Learn. All rights reserved.</p>
      </footer>
    </div>
  );
}
