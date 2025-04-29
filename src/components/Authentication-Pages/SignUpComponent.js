import { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const SignUpComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic
    console.log(formData);
  };
  return (
    <div
      className="flex flex-col  items-center justify-center w-full overflow-auto"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mb-10 flex flex-col items-center mt-60">
        <img alt="" src="/assets/primary.svg" className="w-16 " />
        <h1 className="text-[26px] font-[600] tracking-[1px] pt-2 text-white">
          AmicaCare
        </h1>
      </div>

      <div className="bg-white shadow-lg rounded-md w-[480px] p-6 mb-6">
        <h2 className="text-[23px] text-gray-500 font-[500] text-center">
          Sign Up
        </h2>
        <p className="text-[11px] text-center text-gray-400 border-b pb-4 mb-6">
          CREATE A NEW ACCOUNT
        </p>

        <button className="w-full flex items-center justify-center gap-2 bg-gray-50 border border-gray-200 text-sm py-2 rounded font-medium hover:bg-gray-200 mb-6">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        <div className="flex items-center mb-6">
          <div className="flex-grow h-px bg-gray-200"></div>
          <span className="mx-2 text-gray-400 font-semibold text-sm">OR</span>
          <div className="flex-grow h-px bg-gray-200"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-[12px] font-semibold text-gray-400">
              NAME:
            </label>
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="name"
                placeholder="Your first and last name"
                className="w-full pl-10 pr-3 mt-1 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label className="text-[12px] font-semibold text-gray-400">
              EMAIL ADDRESS:
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                className="w-full pl-10 pr-3 mt-1 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label className="text-[12px] font-semibold text-gray-400">
              PASSWORD:
            </label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                name="password"
                placeholder="Choose a password"
                className="w-full pl-10 pr-3 mt-1 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label className="text-[12px] font-semibold text-gray-400">
              PASSWORD:
            </label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                className="w-full pl-10 mt-1 pr-3 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#0097B2] text-[15px] text-white py-2 rounded font-medium hover:bg-[#0097B2]"
          >
            Sign Up
          </button>

          <div className="flex items-center border-b pb-4 justify-center mt-2">
            <input
              type="checkbox"
              checked
              name="terms"
              onChange={handleChange}
              className="text-[#0097B2] mr-2"
            />
            <label className="text-[15px] text-gray-400">
              I agree to the{" "}
              <a href="#" className=" underline">
                Terms of Use
              </a>
            </label>
          </div>
        </form>

        <p className="text-center text-[15px] mt-4 text-gray-500">
          Already signed up?{" "}
          <a href="/" className="text-[#0097B2]  underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};
export default SignUpComponent;
