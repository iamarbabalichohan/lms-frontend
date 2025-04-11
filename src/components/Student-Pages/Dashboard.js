import React from "react";
import { PiCalendarBlankThin } from "react-icons/pi";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { BiChevronRight } from "react-icons/bi";

import {
  FaThumbsUp,
  FaStar,
  FaMicrophone,
  FaBell,
  FaCalendarCheck,
} from "react-icons/fa";
import RadarChartComponent from "./Studentcharts/redarChart";
import LineChartComponent from "./Studentcharts/lLineChart";
import CourseCard from "./Studentcharts/courseCard";
import ForumItem from "./Studentcharts/forumCard";
import QuizResults from "./Studentcharts/quizCard";
import DashBoardHeader from "../UI/DashBoardHeader";

const Dashboard = () => {
  const courses = [
    {
      title: "Learn Vue.js Fundamentals",
      progress: 25,
      icon: "https://img.icons8.com/color/48/vue-js.png", // You can replace with better image if available
      bgColor: "#e0e0e0",
      barColor: "#3498db",
    },
    {
      title: "Angular in Steps",
      progress: 100,
      icon: "https://img.icons8.com/color/48/angularjs.png",
      bgColor: "#e0e0e0",
      barColor: "#27ae60",
    },
    {
      title: "Bootstrap Foundations",
      progress: 80,
      icon: "https://img.icons8.com/color/48/bootstrap.png",
      bgColor: "#e0e0e0",
      barColor: "#f39c12",
    },
  ];

  const forumData = [
    {
      name: "Luci Bryant",
      message: "Am I learning the right way?",
      time: "5 min ago",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Magnus Goldsmith",
      message: "Can someone help me with the basic Setup?",
      time: "7 min ago",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Katelyn Rankin",
      message: "I think this is the right way?",
      time: "12 min ago",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ];

  return (
    <div className="p-6 pb-32 px-44 bg-gray-100 w-full overflow-y-auto">
      <DashBoardHeader title="DASHBOARD" subTitle="Dashboard" />
      <div className="flex justify-between text-[15px] border-l-4 border-l-[#2196F3] text-gray-500 items-center bg-white p-4 shadow-md rounded-md">
        <p className="flex gap-4 ">
          <PiCalendarBlankThin className="text-[28px] ml-4" />
          <span className="pt-1">
            Your subscription ends on <strong>25 February 2015</strong>
          </span>
        </p>
        <button className="bg-red-600 hover:bg-red-700 py-2 px-4 text-white rounded">
          Upgrade
        </button>
      </div>

      <div className="flex w-full h-[480px] gap-6 mt-6">
        <div className="bg-white p-4 w-[60%] shadow-md rounded-md">
          <div className="flex justify-between border-b pb-4 mb-4">
            <div className="flex gap-4">
              <h2 className="text-red-600 text-[32px] font-bold">116</h2>
              <p className="flex flex-col ">
                <span className="text-[23px] text-gray-600">Angular</span>{" "}
                <span className="text-[12px] text-gray-500">Best Score</span>
              </p>
            </div>
            <div className="flex text-gray-500 pt-3">
              <h1 className=" text-[15px] ">Popular Topics</h1>
              <MdOutlineArrowDropDown className="mt-1" />
            </div>
          </div>
          <RadarChartComponent />
        </div>
        <div className="w-[40%]">
          <div className="bg-white p-4 shadow-md rounded-md">
            <div className="flex gap-4 border-b mb-6 pb-4">
              <h2 className="text-red-600 text-3xl font-bold">432</h2>
              <div>
                <p className="text-[23px] text-gray-600">Experience IQ </p>
                <p className="text-[12px] text-gray-600"> 4 Days Streak</p>
              </div>
            </div>
            <LineChartComponent />
          </div>
          <div className="bg-white p-4 shadow-md rounded-md mt-2">
            <h3 className="text-[23px] text-gray-600">Rewards</h3>
            <p className="text-[12px] text-gray-600">
              {" "}
              Your Latest Achievements
            </p>
            <div className="flex justify-center space-x-2 mt-4 border-t pt-2">
              <span className="bg-blue-500 rounded-full p-2">
                <FaThumbsUp className=" text-white " />
              </span>
              <span className="bg-red-500 rounded-full p-2">
                <FaStar className="text-white" />
              </span>
              <span className="bg-yellow-500 rounded-full p-2">
                <FaMicrophone className="text-white" />
              </span>
              <span className="bg-green-500 rounded-full p-2">
                <FaBell className="text-white" />
              </span>
              <span className="bg-orange-500 rounded-full p-2">
                <FaCalendarCheck className="text-white" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full gap-6 text-gray-600">
        <div className=" h-[280px] w-[60%] mt-10 bg-white rounded shadow">
          <div className="flex justify-between p-4 border-b">
            <div className="">
              <h1 className="text-[23px] text-gray-600">Courses</h1>
              <p className="text-[12px] text-gray-500">YOUR RECENT COURSES</p>
            </div>
            <div className="flex justify-end px-4 py-2">
              <button className="bg-red-600 hover:bg-red-700 text-[13px] text-white px-4 py-2 rounded">
                My courses
              </button>
            </div>
          </div>
          {courses.map((course, idx) => (
            <CourseCard key={idx} {...course} />
          ))}
        </div>
        <div className="w-[40%]">
          <div className="max-w-md mx-auto mt-10 bg-white rounded shadow">
            <div className="flex justify-between items-center p-4 border-b">
              <div>
                <h1 className="text-[23px]">Forum Activity</h1>
                <p className="text-[12px] text-gray-500">
                  LATEST FORUM TOPICS & REPLIES
                </p>
              </div>
              <button className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg">
                <BiChevronRight />
              </button>
            </div>
            {forumData.map((item, index) => (
              <ForumItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
      <div>
        <QuizResults />
      </div>
    </div>
  );
};

export default Dashboard;
