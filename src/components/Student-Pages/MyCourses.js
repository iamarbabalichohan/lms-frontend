import DashBoardHeader from "../UI/DashBoardHeader";
import { FaPlayCircle } from "react-icons/fa";

const MyCourses = () => {
  const courses = [
    {
      title: "Learn VueJs the easy way!",
      lessons: "3 of 7",
      image: "/assets/coursevuejs.png",
      progress: 43,
      status: "in-progress",
    },
    {
      title: "Gulp and Slush",
      lessons: "5 of 7",
      image: "/assets/coursegulp.png",
      progress: 71,
      status: "in-progress",
    },
    {
      title: "Npm & Gulp Advanced Workflow",
      lessons: "7 of 7",
      image: "/assets/coursegulp.png",
      progress: 100,
      status: "completed",
    },
    {
      title: "VueJs",
      lessons: "3 of 7",
      image: "/assets/coursevuejs.png",
      progress: 43,
      status: "in-progress",
    },
    {
      title: "Github Webhooks for Beginners",
      lessons: "8 of 10",
      image: "/assets/coursegithub.png",
      progress: 80,
      status: "in-progress",
    },
  ];
  return (
    <div className="p-6 md:pb-32 md:px-44 bg-gray-100 w-full overflow-y-auto">
      <DashBoardHeader title="MY COURSES" subTitle="My Courses" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-100">
        {courses.map((course, index) => (
          <div key={index} className="bg-white rounded shadow  flex flex-col">
            <div className="flex px-4 pt-2 items-center gap-4">
              <img
                src={course.image}
                alt="Course"
                className="w-24 h-14 rounded"
              />
              <div>
                <h3 className=" text-gray-500 font-semibold text-[20px]">
                  {course.title}
                </h3>
                <p className="text-[12px] text-gray-500">
                  Lessons: {course.lessons}
                </p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-4 h-1.5 bg-gray-200 rounded">
              <div
                className={`h-full ${
                  course.status === "completed" ? "bg-red-500" : "bg-[#2196F3]"
                } `}
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>

            {/* Buttons */}
            <div className="mt-3 px-4 py-2 flex items-center text-[13px] gap-2">
              {course.status === "completed" ? (
                <>
                  <button className="px-2 py-1 bg-red-500 text-white rounded ">
                    Completed ✓
                  </button>
                  <button className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-100">
                    Restart ↻
                  </button>
                </>
              ) : (
                <button className="flex gap-2 px-2 py-1 bg-[#2196F3] text-white rounded">
                  Continue <FaPlayCircle className="mt-1" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MyCourses;
