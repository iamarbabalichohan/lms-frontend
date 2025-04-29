import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaUser,
  FaEnvelope,
} from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import {
  toggleCloseSidebar,
  toggleOpenSidebar,
} from "../../../State/actions/sidebarActions";
import { useDispatch } from "react-redux";
import InstructorLinks from "./Instructor";
import StudentLinks from "./Student";
import Account from "./Account";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [activeUserType, setActiveUserType] = useState("Student");

  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);

  // On mobile, close sidebar by default
  useEffect(() => {
    if (window.innerWidth < 768) {
      dispatch(toggleCloseSidebar());
    } else {
      dispatch(toggleOpenSidebar());
    }
  }, [dispatch]);

  useEffect(() => {
    if (location.pathname === "/takeCourse") {
      dispatch(toggleOpenSidebar());
    }
  }, [location.pathname, dispatch]);

  const pathnameToActive = {
    "/Student-Dashboard": "Student",
    "/instructor": "Instructor",
    "/account": "Account",
    "/browseCourse": "Browse Courses",
    "/viewCourse": "View Course",
    "/takeCourse": "Take Course",
    "/takeQuiz": "Take a Quiz",
    "/quizresult": "Quiz Results",
    "/mycourses": "My Courses",
    "/courseManager": "Course Manager",
    "/instructor-courseManager": "Course Manager",
    "/instructor-quiz-manager": "Quiz Manager",
    "/instructor-Earnings": "Earnings",
    "/instructor-Statement": "Statement",
  };

  const active = pathnameToActive[location.pathname] || "";

  const applicationLinks = [
    { name: "Student", icon: <FaUserGraduate /> },
    { name: "Instructor", icon: <FaChalkboardTeacher /> },
  ];

  const componentLinks = [
    { name: "Components", icon: <FaUser /> },
    { name: "Plugins", icon: <FaEnvelope /> },
  ];

  const layoutLinks = [{ name: "Logout", icon: <FaUser /> }];

  const handleToggleNext = (link) => {
    switch (link.name) {
      case "Student":
        setActiveUserType("Student");
        navigate("/Student-Dashboard");
        break;
      case "Instructor":
        setActiveUserType("Instructor");
        navigate("/instructor");
        break;
      case "Browse Courses":
        navigate("/browseCourse");
        break;
      case "View Course":
        navigate("/viewCourse");
        break;
      case "Take Course":
        dispatch(toggleOpenSidebar());
        navigate("/takeCourse");
        break;
      case "Take a Quiz":
        dispatch(toggleCloseSidebar());
        navigate("/takeQuiz");
        break;
      case "Quiz Results":
        navigate("/quizresult");
        break;
      case "My Courses":
        navigate("/mycourses");
        break;
      case "Get Help":
        navigate("/helpcenter");
        break;
      // case "Help Center":
      //   navigate("/helpcenter");
      //   break;
      case "Course Manager":
        navigate("/instructor-courseManager");
        break;
      case "Quiz Manager":
        navigate("/instructor-quiz-manager");
        break;
      case "Earnings":
        navigate("/instructor-Earnings");
        break;
      case "Statement":
        navigate("/instructor-Statement");
        break;
      case "Logout":
        navigate("/");
        break;
      default:
        break;
    }
    if (window.innerWidth < 768) {
      dispatch(toggleCloseSidebar());
    }
  };

  return (
    <div
      className={`bg-gray-50 pb-16 border text-[#000] md:w-[350px] w-full p-1 transition-transform duration-500 ease-in-out z-50 md:static fixed h-full top-0 left-0 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="overflow-y-auto py-8 p-4 bg-gray-50 h-full">
        <div>
          <h2 className=" text-xs uppercase mb-2">Applications</h2>
          {applicationLinks.map((link) => (
            <div
              key={link.name}
              className={`flex items-center space-x-2 p-2 rounded cursor-pointer ${
                active === link.name
                  ? "bg-[#BA0000] text-white"
                  : "hover:bg-[#BA0000] hover:text-white"
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

        <Account active={active} />

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
          <h2 className="text-white text-xs uppercase mb-2">Components</h2>
          {componentLinks.map((link) => (
            <div
              key={link.name}
              className={`flex items-center space-x-2 p-2 rounded cursor-pointer ${
                active === link.name
                  ? "bg-[#BA0000] text-white"
                  : "hover:bg-[#BA0000] hover:text-white"
              }`}
              onClick={() => handleToggleNext(link)}
            >
              <div className="flex items-center space-x-2">
                <span className="text-lg">{link.icon}</span>
                <span>{link.name}</span>
              </div>
            </div>
          ))}
        </div> */}

        <div className="mt-6">
          <h2 className="text-[#000] text-xs uppercase mb-2">Settings</h2>
          {layoutLinks.map((link) => (
            <div
              key={link.name}
              className={`flex items-center space-x-2 p-2 rounded cursor-pointer ${
                active === link.name
                  ? "bg-[#BA0000] text-white"
                  : "hover:bg-[#BA0000] hover:text-white"
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
      </div>
    </div>
  );
};

export default Sidebar;
