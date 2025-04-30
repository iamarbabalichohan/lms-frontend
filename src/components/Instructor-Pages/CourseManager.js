import DashBoardHeader from "../UI/DashBoardHeader";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FiList } from "react-icons/fi";
import NextPreviousButton from "./buttons/NextPrevious";
import { useNavigate } from "react-router-dom";

const coursesData = [
  {
    id: 1,
    title: "Learn Vue.js",
    description:
      "Let’s start with a quick tour of Vue’s data binding features.",
    price: "$1,230/mo",
    sales: "34 SALES",
    tag: "GULP",
    level: "INTERMEDIATE",
    image: "assets/coursevuejs.png",
  },
  {
    id: 2,
    title: "Npm & Gulp Advanced Workflow",
    description:
      "Learn the basics of Github and become a power Github developer.",
    price: "$421/mo",
    sales: "12 SALES",
    tag: "GULP",
    level: "INTERMEDIATE",
    image: "assets/coursenodejs.png",
  },
  {
    id: 3,
    title: "Github Webhooks for Beginners",
    description: "Developing static website with fast and advanced gulp setup.",
    price: "$2,191/mo",
    sales: "50 SALES",
    tag: "GULP",
    level: "INTERMEDIATE",
    image: "assets/coursegithub.png",
  },
  {
    id: 4,
    title: "Gulp & Slush Workflows",
    description:
      "Let’s start with a quick tour of Vue’s data binding features.",
    price: "$300/mo",
    sales: "5 SALES",
    tag: "GULP",
    level: "INTERMEDIATE",
    image: "assets/coursegulp.png",
  },
];

const CourseCard = ({ course }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white gap-4 p-4 rounded shadow-sm flex flex-col sm:flex-row justify-between">
      <div>
        <img
          src={course.image}
          alt={course.title}
          className="w-[110px] h-[70px] rounded"
        />
      </div>
      <div>
        <div>
          <h3 className="text-[23px] h-16 text-gray-600 font-semibold">
            {course.title}
          </h3>
          <p className="text-gray-500 text-[15px]">{course.description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 border-b pb-2 items-center text-[12px] text-gray-500">
          <span>{course.price}</span>
          <span>{course.sales}</span>
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-2">
          <div className="mt-2 flex text-[12px] gap-1 text-gray-400">
            <span>{course.tag}</span>
            <span>{course.level}</span>
          </div>
          <div className="text-right mt-2">
            <button
              className="text-[13px] bg-[#BA0000] text-[#fff] border border-gray-300 px-4 py-1 rounded"
              onClick={() => navigate("/Courses-EditCourse")}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CourseManger = () => {
  const [search, setSearch] = useState("");

  const filteredCourses = coursesData.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 sm:pb-32 sm:px-44 bg-gray-100 w-full overflow-y-auto">
      <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0">
        <DashBoardHeader title="COURSES" subTitle="Manage Courses" />
        <button className="flex gap-2 text-[14px] py-2 h-10 sm:mt-12 px-4 bg-[#BA0000] rounded text-white self-start sm:self-auto">
          Add Course
        </button>
      </div>

      <div className="bg-gray-100">
        <div className="bg-white p-4 border-l-4 border-l-[#0097B2] rounded shadow-sm mb-6">
          <div className="flex flex-col md:flex-row gap-4 text-gray-400">
            <button className="flex gap-2 text-[15px] border px-4 py-2 rounded">
              <FiList className="mt-1" />
              Filters
            </button>
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search courses"
                className="border-gray-300 pl-10 pr-4 py-2 rounded w-full text-[15px]"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <FaSearch className="absolute right-3 top-3 text-gray-400" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between text-gray-400 text-[12px] pt-6 gap-4">
            <p className="uppercase">Displaying 4 out of 10 courses</p>
            <div className="space-x-4">
              <span className="font-semibold">Sort by</span>
              <button className="underline text-gray-700">COURSE</button>
              <button className="underline text-gray-700">EARNINGS</button>
              <button className="underline text-gray-700">SALES</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between border text-gray-500 bg-white border-l-4 border-l-[#BA0000] p-4 rounded mb-6 text-sm">
          <p>Ohh no! No courses to display. Add some courses.</p>
          <span className="self-end sm:self-auto">x</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <NextPreviousButton />
      </div>
    </div>
  );
};

export default CourseManger;
