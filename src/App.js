import React from "react";
import Navbar from "./components/Layout/Navbar";
import Sidebar from "./components/Layout/SideBar/SideBar";
import { Provider } from "react-redux";
import store from "./State/store";
import Dashboard from "./components/Student-Pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BrowseCourseDashBoard from "./components/Student-Pages/BrowseCourse";
import CoursePage from "./components/Student-Pages/ViewCourse";
import TakeCourse from "./components/Student-Pages/TakeCourse";
import TakeQuiz from "./components/Student-Pages/TakeQuiz";
import QuizResult from "./components/Student-Pages/QuizResult";
import MyCourses from "./components/Student-Pages/MyCourses";
import HelpCenter from "./components/Student-Pages/HelpCenter";
import InstructorDashboard from "./components/Instructor-Pages/InstructorDashboad";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="font-GoogleSans h-screen overflow-hidden">
          <Navbar />
          <div className="flex h-screen bg-gray-100">
            <Sidebar className=" p-4" />
            <Routes>
              <Route path="/" element={<Dashboard className="p-6" />} />
              <Route
                path="/browseCourse"
                element={<BrowseCourseDashBoard className=" p-6" />}
              />
              <Route
                path="/viewCourse"
                element={<CoursePage className=" p-6" />}
              />
              <Route
                path="/takeCourse"
                element={<TakeCourse className=" p-6" />}
              />
              <Route path="/takeQuiz" element={<TakeQuiz className=" p-6" />} />
              <Route
                path="/quizresult"
                element={<QuizResult className=" p-6" />}
              />
              <Route
                path="/mycourses"
                element={<MyCourses className=" p-6" />}
              />
              <Route
                path="/helpcenter"
                element={<HelpCenter className=" p-6" />}
              />
              <Route
                path="/instructor"
                element={<InstructorDashboard className=" p-6" />}
              />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
