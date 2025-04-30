import { useState, useEffect } from "react";
import { PiGraduationCapThin } from "react-icons/pi";
import { IoMenuOutline, IoCartSharp } from "react-icons/io5";
import { GoSearch } from "react-icons/go";
import { BsBellFill } from "react-icons/bs";
import { FaCaretDown } from "react-icons/fa";
import { MdOutlineModeEditOutline, MdLock } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../State/actions/sidebarActions";

const Navbar = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-container")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const navLinks = [{ name: "Forum" }, { name: "Get Help" }];

  const icons = [<IoCartSharp />, <BsBellFill />];

  const dropdownOptions = [
    { icon: <MdOutlineModeEditOutline />, text: "Edit Account" },
    { icon: <CgProfile />, text: "Public Profile" },
    {
      icon: <MdLock />,
      text: "Log Out",
      textColor: "text-red-500 hover:text-red-700",
    },
  ];

  return (
    <nav className="bg-[#0097B2] px-4 md:px-6">
      <div className="flex justify-between">
        <button
          className="text-[#fff] text-3xl"
          onClick={() => dispatch(toggleSidebar())}
        >
          <IoMenuOutline />
        </button>
        <div className="">
          {/* <span className="text-white text-[36px]">
            <PiGraduationCapThin />
          </span>
          <span className="text-white text-[18px] font-[600]">AmicaCare</span> */}
          <img
            alt=""
            src="assets/amicaa.png"
            className="sm:w-52 w-32 rounded  sm:"
          />
        </div>
        {/* <div className="hidden md:block relative text-[#000] mx-4 md:mx-6 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 placeholder-[#000] py-2 rounded-[2px] bg-[#fff] border-none focus:outline-none"
          />
          <span className="absolute top-3 right-3">
            <GoSearch />
          </span>
        </div> */}

        <div className="flex items-center space-x-4 md:space-x-6 text-[#fff]">
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="hover:underline hover:text-[#C7E5FC] text-[16px] font-bold list-none cursor-pointer"
              >
                {link.name}
              </li>
            ))}
          </div>

          {icons.map((icon, index) => (
            <div key={index} className="relative text-[24px]">
              {icon}
            </div>
          ))}

          <div className="flex items-center relative dropdown-container ml-2">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="Profile"
              className="w-9 h-9 rounded-full border border-white"
            />
            <FaCaretDown className="mt-2 cursor-pointer" onClick={handleOpen} />
            {isOpen && (
              <div className="absolute right-1 top-12 text-gray-500 w-36 text-[13px] bg-white shadow-md rounded-lg">
                <ul className="py-2">
                  {dropdownOptions.map((option, index) => (
                    <li
                      key={index}
                      className={`flex gap-2 px-4 py-1 hover:text-gray-700 cursor-pointer ${
                        option.textColor || ""
                      }`}
                    >
                      {option.icon} {option.text}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
