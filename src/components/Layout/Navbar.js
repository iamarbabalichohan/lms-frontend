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
    <nav className="bg-[#2196F3] flex items-center justify-between px-6 py-3">
      <div className="flex items-center space-x-4">
        <button
          className="text-[#8DBCDF] text-3xl"
          onClick={() => dispatch(toggleSidebar())}
        >
          <IoMenuOutline />
        </button>
        <div className="flex items-center space-x-2">
          <span className="text-white text-[36px]">
            <PiGraduationCapThin />
          </span>
          <span className="text-white text-[18px] font-[600]">AmicaCare</span>
        </div>
        <div className="relative text-[#8DBCDF] mx-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 placeholder-[#8DBCDF] py-2 rounded-[2px] bg-[#1A78C2] border-none focus:outline-none"
          />
          <span className="absolute top-3 right-3">
            <GoSearch />
          </span>
        </div>
      </div>

      <div className="flex items-center space-x-6 text-[#8DBCDF]">
        {navLinks.map((link, index) => (
          <li
            key={index}
            className="hover:underline hover:text-[#C7E5FC] text-[16px] font-bold list-none cursor-pointer"
          >
            {link.name}
          </li>
        ))}

        {icons.map((icon, index) => (
          <div key={index} className="relative text-[24px]">
            {icon}
          </div>
        ))}

        <div className="flex">
          <img
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="Profile"
            className="w-9 h-9 rounded-full border border-white"
          />
          <div className="relative dropdown-container">
            <FaCaretDown className="mt-2 cursor-pointer" onClick={handleOpen} />
            {isOpen && (
              <div className="absolute right-2 mt-7 text-gray-500 w-36 text-[13px] bg-white shadow-md rounded-lg">
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
