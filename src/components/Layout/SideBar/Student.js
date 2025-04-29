import {
  FaSearch,
  FaBookOpen,
  FaClipboard,
  FaQuestionCircle,
  FaChartBar,
  FaGraduationCap,
  FaUsers,
} from "react-icons/fa";
import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import CommunityList from "./Community";

const StudentLinks = ({ activeUserType, active, handleToggleNext }) => {
  const studentLinks = [
    { name: "Browse Courses", icon: <FaSearch /> },
    { name: "View Course", icon: <FaBookOpen /> },
    {
      name: "Take Course",
      icon: <FaClipboard />,
    },
    { name: "Take a Quiz", icon: <FaQuestionCircle /> },
    { name: "Quiz Results", icon: <FaChartBar /> },
    { name: "My Courses", icon: <FaGraduationCap /> },
    {
      name: "Community",
      icon: <FaUsers />,
      badge: <MdKeyboardArrowRight className="" />,
    },
    { name: "Get Help", icon: <FaUsers /> },
  ];

  const [showCommunity, setShowCommunity] = useState(false);

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
      {activeUserType === "Student" && (
        <div className="mt-6">
          <h2 className="text-[#000] text-xs uppercase mb-2">Student</h2>
          {studentLinks.map((link) => (
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
                  <span className=" text-xs text-white px-2 py-0.5 rounded">
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

export default StudentLinks;
