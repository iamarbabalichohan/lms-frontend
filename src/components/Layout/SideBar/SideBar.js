// import { useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import {
//   FaUserGraduate,
//   FaChalkboardTeacher,
//   FaUser,
//   FaEnvelope,
// } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import { toggleCloseSidebar } from "../../../State/actions/sidebarActions";
// import { useDispatch } from "react-redux";
// import { toggleOpenSidebar } from "../../../State/actions/sidebarActions";
// import InstructorLinks from "./Instructor";
// import StudentLinks from "./Student";

// const Sidebar = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [activeUserType, setActiveUserType] = useState("Student");

//   const pathnameToActive = {
//     "/": "Student",
//     "/instructor": "Instructor",
//     "/account": "Account",
//     "/browseCourse": "Browse Courses",
//     "/viewCourse": "View Course",
//     "/takeCourse": "Take Course",
//     "/takeQuiz": "Take a Quiz",
//     "/quizresult": "Quiz Results",
//     "/mycourses": "My Courses",
//   };
//   const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);
//   const active = pathnameToActive[location.pathname] || "";
//   const applicationLinks = [
//     { name: "Student", icon: <FaUserGraduate /> },
//     { name: "Instructor", icon: <FaChalkboardTeacher /> },
//   ];

//   const accountLinks = [
//     { name: "Account", icon: <FaUser /> },
//     { name: "Messages", icon: <FaEnvelope /> },
//   ];
//   const componentLinks = [
//     { name: "Account", icon: <FaUser /> },
//     { name: "Messages", icon: <FaEnvelope /> },
//   ];
//   const layoutLinks = [
//     { name: "Fluid Layout", icon: <FaUser /> },
//     { name: "Fixed Layout", icon: <FaEnvelope /> },
//   ];

//   useEffect(() => {
//     if (location.pathname === "/takeCourse") {
//       dispatch(toggleOpenSidebar());
//     }
//   }, [location.pathname, dispatch]);

//   const handleToggleNext = (link) => {
//     if (link.name === "Student") {
//       setActiveUserType("Student");
//       navigate("/");
//     } else if (link.name === "Instructor") {
//       setActiveUserType("Instructor");
//       navigate("/instructor");
//     } else if (link.name === "Browse Courses") {
//       navigate("/browseCourse");
//     } else if (link.name === "View Course") {
//       navigate("/viewCourse");
//     } else if (link.name === "Take Course") {
//       dispatch(toggleOpenSidebar());
//       navigate("/takeCourse");
//     } else if (link.name === "Take a Quiz") {
//       dispatch(toggleCloseSidebar());
//       navigate("/takeQuiz");
//     } else if (link.name === "Quiz Results") {
//       navigate("/quizresult");
//     } else if (link.name === "My Courses") {
//       navigate("/mycourses");
//     } else if (link.name === "Get Help") {
//       navigate("/helpcenter");
//     }
//   };

//   return (
//     <div
//       className={`bg-[#2196F3] pb-16 text-[#8DBCDF] w-80 p-1 transition-transform duration-500 ease-in-out ${
//         isSidebarOpen ? "translate-x-0" : "-translate-x-80"
//       }`}
//     >
//       <div className="overflow-y-auto py-8 p-4 bg-[#2196F3] h-full">
//         <div>
//           <h2 className="text-white text-xs uppercase mb-2">Applications</h2>
//           {applicationLinks.map((link) => (
//             <div
//               key={link.name}
//               className={`flex items-center space-x-2 p-2 rounded cursor-pointer ${
//                 active === link.name
//                   ? "bg-[#1A78C2] text-white"
//                   : "hover:bg-[#1A78C2] hover:text-white"
//               }`}
//               onClick={() => handleToggleNext(link)}
//             >
//               <div className="flex items-center space-x-2">
//                 <span className="text-lg">{link.icon}</span>
//                 <span>{link.name}</span>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-6">
//           <h2 className="text-white text-xs uppercase mb-2">Account</h2>
//           {accountLinks.map((link) => (
//             <div
//               key={link.name}
//               className={`flex items-center justify-between p-2 rounded cursor-pointer ${
//                 active === link.name
//                   ? "bg-[#1A78C2] text-white"
//                   : "hover:bg-[#1A78C2] hover:text-white"
//               }`}
//               onClick={() => handleToggleNext(link)}
//             >
//               <div className="flex items-center space-x-2">
//                 <span className="text-lg">{link.icon}</span>
//                 <span>{link.name}</span>
//               </div>
//               <span>›</span>
//             </div>
//           ))}
//         </div>

//         <StudentLinks
//           activeUserType={activeUserType}
//           active={active}
//           handleToggleNext={handleToggleNext}
//         />
//         <InstructorLinks
//           activeUserType={activeUserType}
//           active={active}
//           handleToggleNext={handleToggleNext}
//         />

//         <div className="mt-6">
//           <h2 className="text-white text-xs uppercase mb-2">Components</h2>
//           {componentLinks.map((link) => (
//             <div
//               key={link.name}
//               className={`flex items-center space-x-2 p-2 rounded cursor-pointer ${
//                 active === link.name
//                   ? "bg-[#1A78C2] text-white"
//                   : "hover:bg-[#1A78C2] hover:text-white"
//               }`}
//               onClick={() => handleToggleNext(link)}
//             >
//               <div className="flex items-center space-x-2">
//                 <span className="text-lg">{link.icon}</span>
//                 <span>{link.name}</span>
//               </div>
//               {link.badge && (
//                 <span className="ml-auto bg-blue-500 text-xs px-2 py-0.5 rounded">
//                   {link.badge}
//                 </span>
//               )}
//             </div>
//           ))}
//         </div>
//         <div className="mt-6">
//           <h2 className="text-white text-xs uppercase mb-2">Layout</h2>
//           {layoutLinks.map((link) => (
//             <div
//               key={link.name}
//               className={`flex items-center space-x-2 p-2 rounded cursor-pointer ${
//                 active === link.name
//                   ? "bg-[#1A78C2] text-white"
//                   : "hover:bg-[#1A78C2] hover:text-white"
//               }`}
//               onClick={() => handleToggleNext(link)}
//             >
//               <div className="flex items-center space-x-2">
//                 <span className="text-lg">{link.icon}</span>
//                 <span>{link.name}</span>
//               </div>
//               {link.badge && (
//                 <span className="ml-auto bg-blue-500 text-xs px-2 py-0.5 rounded">
//                   {link.badge}
//                 </span>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

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

  const handleToggleNext = (link) => {
    switch (link.name) {
      case "Student":
        setActiveUserType("Student");
        navigate("/");
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
      default:
        break;
    }
    if (window.innerWidth < 768) {
      dispatch(toggleCloseSidebar());
    }
  };

  return (
    <div
      className={`bg-[#2196F3] pb-16 text-[#8DBCDF] md:w-80 w-full p-1 transition-transform duration-500 ease-in-out z-50 md:static fixed h-full top-0 left-0 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
