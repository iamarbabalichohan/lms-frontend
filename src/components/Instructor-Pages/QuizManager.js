import DashBoardHeader from "../UI/DashBoardHeader";
import { MdTune } from "react-icons/md";
import NextPreviousButton from "./buttons/NextPrevious";
import { useNavigate } from "react-router-dom";

const QuizManager = () => {
  const navigate = useNavigate();
  const courses = [
    {
      title: "Vue.js Deploy Quiz",
      completed: 25,
      icon: "assets/coursevuejs.png",
    },
    {
      title: "Gulp Front-End Boilerplate",
      completed: 50,
      icon: "assets/coursegulp.png",
    },
    {
      title: "GitHub Basic Setup",
      completed: 410,
      icon: "assets/coursegithub.png",
    },
  ];

  const handleClick = () => {
    navigate("/EditQuiz");
  };

  return (
    <div className="p-4 sm:p-6 sm:px-44 pb-32 bg-gray-100 w-full overflow-y-auto">
      <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0">
        <DashBoardHeader title="QUIZZES" subTitle="Quizzes" />
        <div className="flex flex-col sm:flex-row gap-2 sm:pt-14 text-[14px]">
          <button
            className="py-2 px-4 bg-[#BA0000] rounded text-white h-10"
            onClick={() => handleClick()}
          >
            Add Quiz
          </button>
          <span className="border text-center text-[16px] text-gray-500 flex justify-center items-center bg-white w-12 h-10">
            <MdTune />
          </span>
        </div>
      </div>

      <div className="mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {courses.map((course, index) => (
            <div key={index} className="p-4 bg-white rounded shadow">
              <div className="flex flex-col sm:flex-row sm:items-center border-b pb-4">
                <img
                  src={course.icon}
                  alt="icon"
                  className="w-20 h-16 rounded mb-4 sm:mb-0 sm:mr-4"
                />
                <div className="flex-1">
                  <h2 className="text-[23px] text-gray-600 font-[400]">
                    {course.title}
                  </h2>
                  <p className="text-[12px] text-gray-500">
                    {course.completed} Completed
                  </p>
                </div>
              </div>
              <div className="mt-2 flex flex-col sm:flex-row sm:justify-between space-y-2 sm:space-y-0 sm:space-x-2">
                <button
                  onClick={() => navigate("/Quiz-Preview")}
                  className="px-3 py-1 border rounded bg-white hover:bg-gray-100 text-[12px] text-gray-500"
                >
                  Review{" "}
                  <span className="ml-1 bg-gray-200 px-2 rounded">5</span>
                </button>
                <button
                  onClick={() => handleClick()}
                  className="px-3 py-1 border rounded bg-gray-200 hover:bg-gray-300 text-[13px]"
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
        <NextPreviousButton />
      </div>
    </div>
  );
};

export default QuizManager;
