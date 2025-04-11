import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaUser,
  FaEnvelope,
  FaSearch,
  FaBookOpen,
  FaClipboard,
  FaQuestionCircle,
  FaChartBar,
  FaGraduationCap,
  FaUsers,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { toggleCloseSidebar } from "../../../State/actions/sidebarActions";
import { useDispatch } from "react-redux";
import { toggleOpenSidebar } from "../../../State/actions/sidebarActions";
import InstructorLinks from "./Instructor";
import StudentLinks from "./Student";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [activeUserType, setActiveUserType] = useState("Student");

  const pathnameToActive = {
    "/": "Student",
    "/instructor": "Instructor",
    "/account": "Account",
    "/browseCourse": "Browse Courses",
    "/viewCourse": "View Course",
    "/takeCourse": "Take Course",
    "/takeQuiz": "Take a Quiz",
    "/quizresult": "Quiz Results",
    "/mycourses": "My Courses",
  };
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);
  const active = pathnameToActive[location.pathname] || "";
  const applicationLinks = [
    { name: "Student", icon: <FaUserGraduate /> },
    { name: "Instructor", icon: <FaChalkboardTeacher /> },
  ];

  const accountLinks = [
    { name: "Account", icon: <FaUser /> },
    { name: "Messages", icon: <FaEnvelope /> },
  ];
  const componentLinks = [
    { name: "Account", icon: <FaUser /> },
    { name: "Messages", icon: <FaEnvelope /> },
  ];
  const layoutLinks = [
    { name: "Fluid Layout", icon: <FaUser /> },
    { name: "Fixed Layout", icon: <FaEnvelope /> },
  ];

  // const studentLinks = [
  //   { name: "Browse Courses", icon: <FaSearch /> },
  //   { name: "View Course", icon: <FaBookOpen /> },
  //   { name: "Take Course", icon: <FaClipboard />, badge: "PRO" },
  //   { name: "Take a Quiz", icon: <FaQuestionCircle /> },
  //   { name: "Quiz Results", icon: <FaChartBar /> },
  //   { name: "My Courses", icon: <FaGraduationCap /> },
  //   { name: "Community", icon: <FaUsers />, badge: "PRO" },
  //   { name: "Get Help", icon: <FaUsers /> },
  //   { name: "Logout", icon: <FaUsers /> },
  // ];

  // const instructorLinks = [
  //   { name: "Course Manager", icon: <FaSearch /> },
  //   { name: "Quiz Manager", icon: <FaBookOpen /> },
  //   { name: "Earnings", icon: <FaClipboard />, badge: "PRO" },
  //   { name: "Statement", icon: <FaQuestionCircle /> },
  //   { name: "Community", icon: <FaChartBar /> },
  //   { name: "Help Center", icon: <FaUsers /> },
  //   { name: "Logout", icon: <FaUsers /> },
  // ];
  useEffect(() => {
    if (location.pathname === "/takeCourse") {
      dispatch(toggleOpenSidebar());
    }
  }, [location.pathname, dispatch]);

  const handleToggleNext = (link) => {
    if (link.name === "Student") {
      setActiveUserType("Student");
      navigate("/");
    } else if (link.name === "Instructor") {
      setActiveUserType("Instructor");
      navigate("/instructor");
    } else if (link.name === "Browse Courses") {
      navigate("/browseCourse");
    } else if (link.name === "View Course") {
      navigate("/viewCourse");
    } else if (link.name === "Take Course") {
      dispatch(toggleOpenSidebar());
      navigate("/takeCourse");
    } else if (link.name === "Take a Quiz") {
      dispatch(toggleCloseSidebar());
      navigate("/takeQuiz");
    } else if (link.name === "Quiz Results") {
      navigate("/quizresult");
    } else if (link.name === "My Courses") {
      navigate("/mycourses");
    } else if (link.name === "Get Help") {
      navigate("/helpcenter");
    }
  };

  return (
    <div
      className={`bg-[#2196F3] pb-16 text-[#8DBCDF] w-80 p-1 transition-transform duration-500 ease-in-out ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-80"
      }`}
    >
      <div className="overflow-y-auto py-8 p-4 bg-[#2196F3] h-full">
        <div>
          <h2 className="text-white text-xs uppercase mb-2">Applications</h2>
          {applicationLinks.map((link) => (
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
            </div>
          ))}
        </div>

        <div className="mt-6">
          <h2 className="text-white text-xs uppercase mb-2">Account</h2>
          {accountLinks.map((link) => (
            <div
              key={link.name}
              className={`flex items-center justify-between p-2 rounded cursor-pointer ${
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
              <span>›</span>
            </div>
          ))}
        </div>

        {/* <div className="mt-6">
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
        </div> */}
        <StudentLinks
          activeUserType={activeUserType}
          active={active}
          handleToggleNext={handleToggleNext}
        />
        <InstructorLinks
          activeUserType={activeUserType}
          active={active}
          handleToggleNext={handleToggleNext}
        />
        {/* <div className="mt-6">
          <h2 className="text-white text-xs uppercase mb-2">INSTRUCTOR</h2>
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
        </div> */}
        <div className="mt-6">
          <h2 className="text-white text-xs uppercase mb-2">Components</h2>
          {componentLinks.map((link) => (
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
                <span className="ml-auto bg-blue-500 text-xs px-2 py-0.5 rounded">
                  {link.badge}
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="mt-6">
          <h2 className="text-white text-xs uppercase mb-2">Layout</h2>
          {layoutLinks.map((link) => (
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
                <span className="ml-auto bg-blue-500 text-xs px-2 py-0.5 rounded">
                  {link.badge}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
