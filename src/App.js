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

import ForumComponent from "./components/Community-Pages/ForumComponent";
import DiscussionComponent from "./components/Community-Pages/DiscussionComponent";
import AskQuestionComponent from "./components/Community-Pages/AskQuestion";

import SignUpComponent from "./components/Authentication-Pages/SignUpComponent";
import LoginComponent from "./components/Authentication-Pages/LoginComponent";

function AppLayout() {
  const location = useLocation();
  const noLayoutRoutes = ["/", "/signup"];
  const hideLayout = noLayoutRoutes.includes(location.pathname);

  return (
    <div className="font-GoogleSans h-screen overflow-hidden">
      {!hideLayout && <Navbar />}
      <div className="flex h-screen bg-gray-100">
        {!hideLayout && <Sidebar className="p-4" />}
        <Routes>
          {/* Student Pages */}
          <Route
            path="/Student-Dashboard"
            element={<Dashboard className="p-6" />}
          />
          <Route
            path="/browseCourse"
            element={<BrowseCourseDashBoard className="p-6" />}
          />
          <Route path="/viewCourse" element={<CoursePage className="p-6" />} />
          <Route path="/takeCourse" element={<TakeCourse className="p-6" />} />
          <Route path="/takeQuiz" element={<TakeQuiz className="p-6" />} />
          <Route path="/quizresult" element={<QuizResult className="p-6" />} />
          <Route path="/mycourses" element={<MyCourses className="p-6" />} />
          <Route path="/helpcenter" element={<HelpCenter className="p-6" />} />

          {/* Instructor Pages */}
          <Route
            path="/instructor"
            element={<InstructorDashboard className="p-6" />}
          />
          <Route
            path="/instructor-courseManager"
            element={<CourseManger className="p-6" />}
          />
          <Route
            path="/instructor-quiz-manager"
            element={<QuizManager className="p-6" />}
          />
          <Route
            path="/instructor-Earnings"
            element={<EarningComponent className="p-6" />}
          />
          <Route
            path="/instructor-Statement"
            element={<StatementComponent className="p-6" />}
          />
          <Route
            path="/Instructor-Invoice"
            element={<InstructorInvoice className="p-6" />}
          />
          <Route
            path="/Edit-Invoice"
            element={<EditInvoiceComponent className="p-6" />}
          />
          <Route
            path="/EditQuiz"
            element={<EditQuizComponent className="p-6" />}
          />
          <Route
            path="/Courses-EditCourse"
            element={<EditCourse className="p-6" />}
          />
          <Route
            path="/Course-EditLesson"
            element={<EditLesson className="p-6" />}
          />
          <Route
            path="/Quiz-Preview"
            element={<QuizPreviewComponent className="p-6" />}
          />

          {/* Community Pages */}
          <Route
            path="/Community-Forum"
            element={<ForumComponent className="p-6" />}
          />
          <Route
            path="/Community-Discussion"
            element={<DiscussionComponent className="p-6" />}
          />
          <Route
            path="/Community-Ask Question"
            element={<AskQuestionComponent className="p-6" />}
          />

          {/* Auth Pages */}
          <Route path="/signup" element={<SignUpComponent className="p-6" />} />
          <Route path="/" element={<LoginComponent className="p-6" />} />
        </Routes>
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
