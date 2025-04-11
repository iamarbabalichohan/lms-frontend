import {
  FaSearch,
  FaBookOpen,
  FaClipboard,
  FaQuestionCircle,
  FaChartBar,
  FaUsers,
} from "react-icons/fa";

const InstructorLinks = ({ activeUserType, active, handleToggleNext }) => {
  const instructorLinks = [
    { name: "Course Manager", icon: <FaSearch /> },
    { name: "Quiz Manager", icon: <FaBookOpen /> },
    { name: "Earnings", icon: <FaClipboard />, badge: "PRO" },
    { name: "Statement", icon: <FaQuestionCircle /> },
    { name: "Community", icon: <FaChartBar /> },
    { name: "Help Center", icon: <FaUsers /> },
    { name: "Logout", icon: <FaUsers /> },
  ];
  return (
    <div className="w-full md:w- overflow-hidden">
      {activeUserType === "Instructor" && (
        <div className="mt-6">
          <h2 className="text-white text-xs uppercase mb-2">Instructor</h2>
          {instructorLinks.map((link) => (
            <div
              key={link.name}
              className={`flex items-center space-x-2 p-2 rounded cursor-pointer ${
                active === link.name
                  ? "bg-[#1A78C2] text-white"
                  : "hover:bg-[#1A78C2] hover:text-white"
              }`}
              onClick={() => handleToggleNext(link)}
            >
              <div className="flex items-center space-x-2">
                <span className="text-lg">{link.icon}</span>
                <span>{link.name}</span>
              </div>
              {link.badge && (
                <span className="ml-auto bg-red-500 text-xs text-white px-2 py-0.5 rounded">
                  {link.badge}
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InstructorLinks;
