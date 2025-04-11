import {
  FaSearch,
  FaBookOpen,
  FaClipboard,
  FaQuestionCircle,
  FaChartBar,
  FaGraduationCap,
  FaUsers,
} from "react-icons/fa";

const StudentLinks = ({ activeUserType, active, handleToggleNext }) => {
  const studentLinks = [
    { name: "Browse Courses", icon: <FaSearch /> },
    { name: "View Course", icon: <FaBookOpen /> },
    { name: "Take Course", icon: <FaClipboard />, badge: "PRO" },
    { name: "Take a Quiz", icon: <FaQuestionCircle /> },
    { name: "Quiz Results", icon: <FaChartBar /> },
    { name: "My Courses", icon: <FaGraduationCap /> },
    { name: "Community", icon: <FaUsers />, badge: "PRO" },
    { name: "Get Help", icon: <FaUsers /> },
    { name: "Logout", icon: <FaUsers /> },
  ];
  return (
    <div>
      {activeUserType === "Student" && (
        <div className="mt-6">
          <h2 className="text-white text-xs uppercase mb-2">Student</h2>
          {studentLinks.map((link) => (
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
export default StudentLinks;
