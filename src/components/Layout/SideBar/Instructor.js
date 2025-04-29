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

const InstructorLinks = ({ activeUserType, active, handleToggleNext }) => {
  const [showCommunity, setShowCommunity] = useState(false);
  const instructorLinks = [
    { name: "Course Manager", icon: <FaSearch /> },
    { name: "Quiz Manager", icon: <FaBookOpen /> },
    { name: "Earnings", icon: <FaClipboard /> },
    { name: "Statement", icon: <FaQuestionCircle /> },
    {
      name: "Community",
      icon: <FaChartBar />,
      badge: showCommunity ? (
        <IoIosArrowDown />
      ) : (
        <MdKeyboardArrowRight className="text-[15px]" />
      ),
    },
    { name: "Help Center", icon: <FaUsers /> },
  ];

  const handleClick = (link) => {
    handleToggleNext(link);
    if (link.name === "Community") {
      setShowCommunity((prev) => !prev);
    } else {
      setShowCommunity(false);
    }
  };

  return (
    <div className="w-full md:w- overflow-hidden">
      {activeUserType === "Instructor" && (
        <div className="mt-6">
          <h2 className="text-[#000] text-xs uppercase mb-2">Instructor</h2>
          {instructorLinks.map((link, index) => (
            <div key={link.name}>
              <div
                className={`flex items-center justify-between space-x-2 p-2 rounded cursor-pointer ${
                  active === link.name ||
                  (link.name === "Community" && showCommunity)
                    ? "bg-[#BA0000] text-white"
                    : "hover:bg-[#BA0000] hover:text-white"
                }`}
                onClick={() => handleClick(link)}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-lg">{link.icon}</span>
                  <span>{link.name}</span>
                </div>
                {link.badge && (
                  <span className="  text-xs text-white px-2 py-0.5 rounded">
                    {link.badge}
                  </span>
                )}
              </div>

              {link.name === "Community" && (
                <CommunityList show={showCommunity} />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InstructorLinks;
