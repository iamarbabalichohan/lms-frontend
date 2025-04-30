import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

export default function AuthPage() {
  const navigate = useNavigate();
  const [isFlipped, setIsFlipped] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/Student-Dashboard");
  };

  return (
    <div className="flex items-center w-full justify-center py-8 md:min-h-screen bg-gray-100 px-4">
      <div className="relative w-full max-w-[1400px]  md:h-[650px] perspective rounded">
        <div
          className={`w-full  duration-700 transition-transform relative`}
          style={{
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front Side - Login */}
          <div
            className="absolute w-full  flex flex-col md:flex-row rounded shadow-xl bg-white"
            style={{ backfaceVisibility: "hidden" }}
          >
            {/* Left - Image */}
            <div className="w-full md:w-1/2 bg-[#0097B2] flex items-center justify-center p-6 md:p-10">
              <div className="text-center">
                <img
                  src="https://png.pngtree.com/png-vector/20250218/ourmid/pngtree-two-people-working-on-laptops-at-a-table-business-or-teamwork-png-image_15513101.png"
                  alt="Distance Learning"
                  className="mx-auto mb-8 w-44 md:w-80"
                />
                <h2 className="sm:text-2xl text-xl font-semibold text-[#fff] mb-2">
                  AmicaCare Learning Programs
                </h2>
                <p className="text-[#fff]">
                  Attend live and recorded classes at your own convenience.
                </p>
              </div>
            </div>

            {/* Right - Login Form */}
            <div className="w-full md:w-1/2 bg-white flex flex-col items-center justify-center p-6 md:p-10">
              <img
                src="https://amicacare.it/wp-content/uploads/2025/03/Amica-Care-Logo-Web-White-e1741254133754.png"
                alt=""
                className="w-64 mb-4"
              />
              <h1 className="text-[18px] font-medium text-gray-600 mb-6">
                Welcome to AmicaCare
              </h1>

              <form
                className="w-full max-w-sm space-y-4"
                onSubmit={handleLogin}
              >
                <div className="relative">
                  <input
                    type="text"
                    required
                    className="peer w-full px-4 pt-4 pb-1 border-b border-gray-300 focus:outline-none focus:ring-0 focus:border-[#0097B2] border-x-0 border-t-0 bg-transparent"
                    placeholder=" "
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label className="absolute left-1 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#0097B2]">
                    Email
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="password"
                    required
                    className="peer w-full px-4 pt-4 pb-1 border-b border-gray-300 focus:outline-none focus:ring-0 focus:border-[#0097B2] border-x-0 border-t-0 bg-transparent"
                    placeholder=" "
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label className="absolute left-1 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#0097B2]">
                    Password
                  </label>
                  <div className="text-right mt-2">
                    <a
                      href="#"
                      className="text-xs text-[#0097B2] hover:underline"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#0097B2] text-white py-2 rounded-lg hover:bg-[#BA0000]"
                >
                  Sign In
                </button>
              </form>

              <div className="flex items-center my-4 w-full max-w-sm">
                <div className="flex-grow h-px bg-gray-300"></div>
                <span className="mx-2 text-gray-400">or</span>
                <div className="flex-grow h-px bg-gray-300"></div>
              </div>

              <button className="w-full max-w-sm flex items-center justify-center border py-2 rounded-lg text-gray-500 hover:bg-gray-50">
                <FcGoogle className="mr-2 text-lg" /> Sign in with Google
              </button>

              <p className="text-center text-sm text-gray-500 mt-4">
                Are you new?{" "}
                <button
                  type="button"
                  onClick={() => setIsFlipped(true)}
                  className="text-[#0097B2] hover:underline"
                >
                  Create an Account
                </button>
              </p>
            </div>
          </div>

          {/* Back Side - Signup */}
          <div
            className="absolute w-full h-full flex flex-col md:flex-row rounded shadow-xl bg-white"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            {/* Left - Signup Form */}
            <div className="w-full md:w-1/2 bg-white flex flex-col items-center justify-center p-6 md:p-10">
              <img
                src="https://amicacare.it/wp-content/uploads/2025/03/Amica-Care-Logo-Web-White-e1741254133754.png"
                alt=""
                className="w-64  mb-4"
              />
              <h1 className="text-[18px] font-medium text-gray-600 mb-6">
                Create Your Account
              </h1>

              <form className="w-full max-w-sm space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    required
                    className="peer w-full px-4 pt-4 pb-1 border-b border-gray-300 focus:outline-none focus:ring-0 focus:border-[#0097B2] border-x-0 border-t-0 bg-transparent"
                    placeholder=" "
                  />
                  <label className="absolute left-1 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#0097B2]">
                    Full Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="email"
                    required
                    className="peer w-full px-4 pt-4 pb-1 border-b border-gray-300 focus:outline-none focus:ring-0 focus:border-[#0097B2] border-x-0 border-t-0 bg-transparent"
                    placeholder=" "
                  />
                  <label className="absolute left-1 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#0097B2]">
                    Email
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="password"
                    required
                    className="peer w-full px-4 pt-4 pb-1 border-b border-gray-300 focus:outline-none focus:ring-0 focus:border-[#0097B2] border-x-0 border-t-0 bg-transparent"
                    placeholder=" "
                  />
                  <label className="absolute left-1 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#0097B2]">
                    Password
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#0097B2] text-white py-2 rounded-lg hover:bg-[#BA0000]"
                >
                  Sign Up
                </button>
              </form>

              <p className="text-center text-sm text-gray-500 mt-4">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => setIsFlipped(false)}
                  className="text-[#0097B2] hover:underline"
                >
                  Sign In
                </button>
              </p>
            </div>

            {/* Right - Image */}
            <div className="w-full md:w-1/2 bg-[#0097B2] flex items-center justify-center p-6 md:p-10">
              <div className="text-center">
                <img
                  src="https://png.pngtree.com/png-vector/20250218/ourmid/pngtree-two-people-working-on-laptops-at-a-table-business-or-teamwork-png-image_15513101.png"
                  alt="Learning"
                  className="mx-auto mb-8 w-56 md:w-80"
                />
                <h2 className="text-2xl font-semibold text-[#fff] mb-2">
                  Join AmicaCare Learning
                </h2>
                <p className="text-[#fff]">
                  Start your learning journey with expert guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
