import { useState } from "react";
import {
  FaSearch,
  FaBookOpen,
  FaClipboard,
  FaQuestionCircle,
  FaChartBar,
  FaUsers,
} from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import CommunityList from "./Community";
import { useNavigate } from "react-router-dom";

const InstructorLinks = ({ activeUserType, active, handleToggleNext }) => {
  const navigate = useNavigate();
  const [showDropdowns, setShowDropdowns] = useState({
    community: false,
    courseManager: false,
  });

  const toggleDropdown = (key) => {
    setShowDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const instructorLinks = [
    { name: "Course Manager", icon: <FaSearch />, key: "courseManager" },
    { name: "Quiz Manager", icon: <FaBookOpen /> },
    { name: "Earnings", icon: <FaClipboard /> },
    { name: "Statement", icon: <FaQuestionCircle /> },
    // {
    //   name: "Community",
    //   icon: <FaChartBar />,
    //   key: "community",
    // },
    // { name: "Help Center", icon: <FaUsers /> },
  ];

  const handleClick = (link) => {
    handleToggleNext(link);
    if (link.key) {
      toggleDropdown(link.key);
    } else {
      // If a simple link is clicked, close all dropdowns
      setShowDropdowns({
        community: false,
        courseManager: false,
      });
    }
  };

  return (
    <div className="w-full">
      {activeUserType === "Instructor" && (
        <div className="mt-6">
          <h2 className="text-[#000] text-xs uppercase mb-2">Instructor</h2>
          {instructorLinks.map((link) => {
            const isDropdown = !!link.key;
            const isOpen = isDropdown && showDropdowns[link.key];

            return (
              <div key={link.name}>
                <div
                  className={`flex items-center justify-between space-x-2 p-2 rounded cursor-pointer ${
                    active === link.name || isOpen
                      ? "font-bold text-[#BA0000]"
                      : "hover:bg-[#BA0000] hover:text-white"
                  }`}
                  onClick={() => handleClick(link)}
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">{link.icon}</span>
                    <span>{link.name}</span>
                  </div>

                  {isDropdown && (
                    <span className="text-xs">
                      {isOpen ? <IoIosArrowDown /> : <MdKeyboardArrowRight />}
                    </span>
                  )}
                </div>

                {/* Dropdown Contents */}
                {/* {link.name === "Community" && (
                  <CommunityList show={showDropdowns.community} />
                )} */}

                {link.name === "Course Manager" &&
                  showDropdowns.courseManager && (
                    <ul className="ml-10 mt-2 text-[12px] text-gray-700 space-y-1">
                      <li
                        className="cursor-pointer hover:text-[#BA0000]"
                        onClick={() => navigate("/instructor-courseManager")}
                      >
                        All Courses
                      </li>
                      <li className="cursor-pointer hover:text-[#BA0000]">
                        Add Course
                      </li>
                    </ul>
                  )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default InstructorLinks;
