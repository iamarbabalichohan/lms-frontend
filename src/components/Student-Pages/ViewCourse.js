import React from "react";
import DashBoardHeader from "../UI/DashBoardHeader";
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { VscGraph } from "react-icons/vsc";
import { GoClock } from "react-icons/go";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";

const CoursePage = () => {
  const lessonlist = [
    {
      lessonNo: 1,
      lessonName: "Installation",
      lessonTime: "2:03",
    },
    {
      lessonNo: <span className="text-white">2</span>,
      lessonName: "The MVC architectural pattern",
      lessonTime: <span className="text-white">25:01</span>,
    },
    {
      lessonNo: 3,
      lessonName: "Database Models",
      lessonTime: "12:10",
    },
    {
      lessonNo: 4,
      lessonName: "Database Access",
      lessonTime: (
        <span className="bg-[#0097B2] text-white p-1 rounded">PRO</span>
      ),
    },
    {
      lessonNo: 5,
      lessonName: "Eloquent Basics",
      lessonTime: (
        <span className="bg-[#0097B2] text-white p-1 rounded">PRO</span>
      ),
    },
    {
      lessonNo: 6,
      lessonName: "Take Quiz",
      lessonTime: (
        <span className="bg-[#0097B2] text-white p-1 rounded">PRO</span>
      ),
    },
  ];
  return (
    <div className="p-4 sm:pb-32 pb-32 sm:px-12 md:px-20 lg:px-44 bg-gray-100 w-full overflow-y-auto">
      <nav className="text-[11px] text-gray-400 mb-4">
        <DashBoardHeader
          title="COURSES"
          statement="THE MVC ARCHITECTURAL PATTERN "
          subTitle=" The MVC architectural pattern"
        />
      </nav>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:flex-1">
          <div className="bg-white rounded shadow overflow-hidden ">
            <iframe
              src="https://player.vimeo.com/video/77091974"
              title="Course Video"
              className="w-full h-64 sm:h-80"
              allowFullScreen
            ></iframe>
          </div>
          <div className="bg-white p-4 rounded shadow mb-6 mt-4">
            <p className="text-gray-700 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
              dicta eius enim inventoreus optio ratione veritatis. Beatae
              deserunt illum ipsam magniima mollitia officiis quia tempora!
            </p>
          </div>

          <div className="bg-white rounded shadow overflow-hidden">
            <ul className="text-sm">
              {lessonlist.map((item, index) => {
                let customClass = "text-gray-400";

                if (item.lessonNo === 1 || item.lessonNo === 3) {
                  customClass = "text-[#0097B2]";
                } else if (
                  item.lessonName === "The MVC architectural pattern"
                ) {
                  customClass = "text-white bg-[#0097B2]";
                }

                return (
                  <li
                    key={index}
                    className={`px-3 py-4 border-b ${customClass}`}
                  >
                    <span className="mr-2 text-gray-400">{item.lessonNo}</span>
                    {item.lessonName}
                    <span className="float-right text-gray-400">
                      {item.lessonTime}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="w-full lg:w-72 flex flex-col gap-5">
          <div className="bg-white px-6 py-4 rounded shadow text-center">
            <button className="bg-[#BA0000] text-white py-2 px-4 rounded w-full mb-4 text-sm">
              Get All Courses <br />
              <span className="font-semibold">$9 / month</span>
            </button>
            <div className="relative my-4 mb-6">
              <hr className="border-t border-gray-300" />
              <span className="absolute left-1/2 -translate-x-1/2 -top-2 bg-white px-2 text-sm text-gray-500">
                OR
              </span>
            </div>
            <button className="border border-gray-300 text-gray-500 py-2 px-4 rounded w-full text-sm">
              Purchase Course <br />
              <span className="font-semibold text-gray-600">$25 USD</span>
            </button>
          </div>

          <div className="bg-white px-6 py-4 rounded shadow text-center">
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 p-2 gap-4 border-b mb-6">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Instructor"
                className="w-16 h-16 rounded-full mb-2"
              />
              <div className="text-left mt-1">
                <h3 className="text-lg font-semibold text-gray-500">
                  Adrian Demian
                </h3>
                <p className="text-[11px] text-gray-400 mb-3">INSTRUCTOR</p>
              </div>
            </div>
            <p className="text-[15px] text-gray-700 text-justify">
              Having over 12 years exp. Adrian is one of the lead UI designers
              in the industry. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Facere, aut.
            </p>
            <div className="flex gap-4 mt-5 justify-center text-gray-700">
              <li className="list-none bg-gray-100 p-2 rounded">
                <FaFacebook />
              </li>
              <li className="list-none bg-gray-100 p-2 rounded">
                <IoLogoTwitter />
              </li>
              <li className="list-none bg-gray-100 p-2 rounded">
                <FaGithub />
              </li>
            </div>
          </div>

          <div className="bg-white px-6 py-4 text-gray-500 rounded shadow">
            <div className="flex gap-4 border-b pb-3">
              <span className="bg-gray-400 p-1 text-white">
                <VscGraph />
              </span>
              <h1 className="font-[600]">Beginner</h1>
            </div>
            <div className="flex gap-4 mt-4">
              <GoClock className="text-[20px]" />
              <h1>
                <span className="text-gray-700">2</span> hrs{" "}
                <span className="text-gray-700"> 26</span> min
              </h1>
            </div>
          </div>

          <div className="bg-white px-6 py-2 text-gray-500 rounded shadow">
            <div className="flex gap-4 border-b pb-3">
              <h1 className="text-[21px] text-gray-500 font-[600]">Ratings</h1>
            </div>
            <div className="flex gap-2 mt-4 text-[#BA0000]">
              {Array(4)
                .fill(0)
                .map((_, index) => (
                  <span key={index}>
                    <IoIosStar />
                  </span>
                ))}
              <span>
                <IoIosStarHalf />
              </span>
            </div>
            <div>
              <h1 className="text-[12px] p-1">20 ratings</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
