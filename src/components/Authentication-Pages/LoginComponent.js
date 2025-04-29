import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "ehsan123@gmail.com" && password === "Ehsan123") {
      navigate("/Student-Dashboard");
    } else {
      alert("enter a valid email and password");
    }
    console.log({ email, password });
  };
  return (
    <div className="flex flex-col items-center justify-center w-full overflow-y-auto bg-gray-100">
      <div className="mb-10 flex flex-col items-center mt-20">
        <img alt="" src="/assets/primary.svg" className="w-16 " />
        <h1 className="text-[26px] font-[600] tracking-[1px] pt-2 text-gray-500">
          AmicaCare
        </h1>
      </div>

      <div className="bg-white shadow-md rounded-md w-[480px]  px-8 pt-8 mb-10">
        <h2 className="text-[23px] text-center text-gray-500">Login</h2>
        <p className="text-[11px] text-center border-b pb-4 text-gray-400 mb-6">
          ACCESS YOUR ACCOUNT
        </p>

        <button className="w-full flex items-center text-gray-500 justify-center gap-2 bg-gray-100 border border-gray-300 text-sm py-2 rounded font-medium hover:bg-gray-200 mb-6">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        <div className="flex items-center mb-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="mx-2 font-bold tracking-[1px] text-gray-400 text-sm">
            OR
          </span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-[12px] text-gray-400">
              YOUR EMAIL ADDRESS:
            </label>
            <div className="relative pt-1">
              <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                placeholder="Your email address"
                className="w-full text-[15px] pl-10 pr-3 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label className="text-[12px] text-gray-400">YOUR PASSWORD:</label>
            <div className="relative pt-1">
              <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                placeholder="Your password"
                className="w-full text-[15px] pl-10 pr-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#0097B2] text-white py-2 my-2 rounded-md font-medium hover:bg-[#0097B2]"
          >
            Login
          </button>

          <div className="text-center border-b pb-6">
            <a href="#" className="text-sm text-gray-400 underline">
              Forgot Password?
            </a>
          </div>
        </form>

        <p className="text-center text-sm mt-6 pb-4 text-gray-400">
          Not yet a student?{" "}
          <a href="/signup" className="text-[#0097B2] hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};
export default LoginComponent;
