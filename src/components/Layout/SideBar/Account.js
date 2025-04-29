import { useState } from "react";
import { FaUser, FaEnvelope } from "react-icons/fa";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const navigate = useNavigate();
  const [openScroll, setOpenScroll] = useState({
    Account: false,
    Messages: false,
  });

  const accountLinks = [
    { name: "Account", icon: <FaUser /> },
    { name: "Messages", icon: <FaEnvelope /> },
  ];

  const accountList = [
    "Login",
    "Sign Up",
    "Forget Password",
    "Edit Account",
    "Basic Information",
    "Profile & Privacy",
    "Subscription",
    "Upgrade Account",
    "Payment information",
    "Payment History, Student Invoice",
    "Instructor Invoice",
    "Edit Invoice",
  ];

  const messageList = ["Conversation", "Conversation-2"];

  const handleScroll = (link) => {
    setOpenScroll((prev) => ({
      ...prev,
      [link.name]: !prev[link.name],
    }));
  };

  return (
    <div className="mt-6 px-4 sm:px-6 md:px-0">
      <h2 className="text-[#000] text-xs uppercase mb-2">Account</h2>
      {accountLinks.map((link) => {
        const isOpen = openScroll[link.name];
        const dropdownItems =
          link.name === "Account" ? accountList : messageList;

        return (
          <div
            key={link.name}
            className={`rounded mb-2 transition-colors duration-1000 ${
              isOpen ? "bg-[#fff] text-[#000]" : ""
            }`}
          >
            <div
              className={`flex items-center justify-between p-2 cursor-pointer ${
                isOpen ? "" : "hover:bg-[#BA0000] hover:text-white"
              }`}
              onClick={() => handleScroll(link)}
            >
              <div className="flex items-center space-x-2 text-sm sm:text-base">
                <span className="text-lg">{link.icon}</span>
                <span>{link.name}</span>
              </div>
              <span className="text-xl">
                {isOpen ? (
                  <MdOutlineKeyboardArrowDown />
                ) : (
                  <MdOutlineKeyboardArrowRight />
                )}
              </span>
            </div>

            <div
              className={`ml-4 sm:ml-6 overflow-hidden transition-all duration-700 ease-in-out ${
                isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <ul className="text-sm mb-2 pl-2 sm:pl-4 pt-2">
                {dropdownItems.map((item, index) => (
                  <li
                    key={index}
                    className="py-1 cursor-pointer hover:text-gray-300 text-xs sm:text-sm"
                    onClick={() => {
                      if (item === "Instructor Invoice") {
                        navigate("/Instructor-Invoice");
                      }
                      if (item === "Edit Invoice") {
                        navigate("/Edit-Invoice");
                      }
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Account;
