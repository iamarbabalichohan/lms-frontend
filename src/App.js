import React from "react";
import Navbar from "./components/Layout/Navbar";
import Sidebar from "./components/Layout/SideBar/SideBar";
import { Provider } from "react-redux";
import store from "./State/store";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Pages
import Dashboard from "./components/Student-Pages/Dashboard";
import BrowseCourseDashBoard from "./components/Student-Pages/BrowseCourse";
import CoursePage from "./components/Student-Pages/ViewCourse";
import TakeCourse from "./components/Student-Pages/TakeCourse";
import TakeQuiz from "./components/Student-Pages/TakeQuiz";
import QuizResult from "./components/Student-Pages/QuizResult";
import MyCourses from "./components/Student-Pages/MyCourses";
import HelpCenter from "./components/Student-Pages/HelpCenter";

import InstructorDashboard from "./components/Instructor-Pages/InstructorDashboad";
import CourseManger from "./components/Instructor-Pages/CourseManager";
import QuizManager from "./components/Instructor-Pages/QuizManager";
import EarningComponent from "./components/Instructor-Pages/Earnings";
import StatementComponent from "./components/Instructor-Pages/StatementComponent";
import InstructorInvoice from "./components/Instructor-Pages/InstructorInvoice";
import EditInvoiceComponent from "./components/Instructor-Pages/EditInvoice";
import EditQuizComponent from "./components/Instructor-Pages/EditQuiz";
import EditCourse from "./components/Instructor-Pages/EditCourses";
import EditLesson from "./components/Instructor-Pages/EditLesson";
import QuizPreviewComponent from "./components/Instructor-Pages/QuizPreview";
import { useSelector } from "react-redux";
import ForumComponent from "./components/Community-Pages/ForumComponent";
import DiscussionComponent from "./components/Community-Pages/DiscussionComponent";
import AskQuestionComponent from "./components/Community-Pages/AskQuestion";

import SignUpComponent from "./components/Authentication-Pages/SignUpComponent";
import LoginComponent from "./components/Authentication-Pages/LoginComponent";

function AppLayout() {
  const location = useLocation();
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);
  const noLayoutRoutes = ["/", "/signup"];
  const hideLayout = noLayoutRoutes.includes(location.pathname);

  return (
    <div className="font-GoogleSans h-screen overflow-hidden">
      {!hideLayout && <Navbar />}

      <div className="flex h-screen">
        {/* Sidebar */}
        {!hideLayout && (
          <div
            className={`transition-all duration-300 ${
              isSidebarOpen ? "w-[250px]" : "w-0"
            }`}
          >
            <Sidebar />
          </div>
        )}

        {/* Main Content Area */}
        <div
          className={`transition-all duration-300 overflow-y-auto ${
            !hideLayout
              ? isSidebarOpen
                ? "w-[calc(100%-250px)]"
                : "w-full"
              : "w-full"
          }`}
        >
          <Routes>
            {/* Student Pages */}
            <Route path="/Student-Dashboard" element={<Dashboard />} />
            <Route path="/browseCourse" element={<BrowseCourseDashBoard />} />
            <Route path="/viewCourse" element={<CoursePage />} />
            <Route path="/takeCourse" element={<TakeCourse />} />
            <Route path="/takeQuiz" element={<TakeQuiz />} />
            <Route path="/quizresult" element={<QuizResult />} />
            <Route path="/mycourses" element={<MyCourses />} />
            <Route path="/helpcenter" element={<HelpCenter />} />

            {/* Instructor Pages */}
            <Route path="/instructor" element={<InstructorDashboard />} />
            <Route
              path="/instructor-courseManager"
              element={<CourseManger />}
            />
            <Route path="/instructor-quiz-manager" element={<QuizManager />} />
            <Route path="/instructor-Earnings" element={<EarningComponent />} />
            <Route
              path="/instructor-Statement"
              element={<StatementComponent />}
            />
            <Route path="/Instructor-Invoice" element={<InstructorInvoice />} />
            <Route path="/Edit-Invoice" element={<EditInvoiceComponent />} />
            <Route path="/EditQuiz" element={<EditQuizComponent />} />
            <Route path="/Courses-EditCourse" element={<EditCourse />} />
            <Route path="/Course-EditLesson" element={<EditLesson />} />
            <Route path="/Quiz-Preview" element={<QuizPreviewComponent />} />

            {/* Community Pages */}
            <Route path="/Community-Forum" element={<ForumComponent />} />
            <Route
              path="/Community-Discussion"
              element={<DiscussionComponent />}
            />
            <Route
              path="/Community-Ask Question"
              element={<AskQuestionComponent />}
            />

            {/* Auth Pages */}
            <Route path="/signup" element={<SignUpComponent />} />
            <Route path="/" element={<LoginComponent />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
