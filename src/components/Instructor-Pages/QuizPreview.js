import { useState } from "react";
import DashBoardHeader from "../UI/DashBoardHeader";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const submissions = [
  {
    submitted: "Feb 17th, 2016",
    student: "John Smith",
    score: "n/a",
    reviewed: "PENDING",
    reviewedBy: null,
    button: { text: "Review", style: "bg-[#2196F3] text-white" },
  },
  {
    submitted: "Feb 17th, 2016",
    student: "Andrew Brain",
    score: "512",
    reviewed: "Feb 17th, 2016",
    reviewedBy: "Adrian D.",
    button: { text: "Results", style: "bg-white text-gray-500" },
  },
  {
    submitted: "Feb 17th, 2016",
    student: "Samantha Doe",
    score: "123",
    reviewed: "Feb 17th, 2016",
    reviewedBy: "Adrian D.",
    button: { text: "Results", style: "bg-white text-gray-500" },
  },
];

const questions = [
  { number: 1, title: "Installation", status: "Correct" },
  { number: 2, title: "The MVC architectural pattern", status: "Correct" },
  { number: 3, title: "Database Models", status: "Correct" },
  { number: 4, title: "Database Access", status: "Wrong" },
  { number: 5, title: "Eloquent Basics", status: "Pending Review" },
  { number: 6, title: "Take Quiz", status: "Correct" },
];

const QuizPreviewComponent = () => {
  const [isActive, setIsActive] = useState();

  const handleButtonClick = (buttonType) => {
    if (buttonType === "review") {
      setIsActive(false);
    } else if (buttonType === "questions") {
      setIsActive(true);
    }
  };
  return (
    <div className="p-4 sm:pb-32 sm:px-44 bg-gray-100 w-full overflow-y-auto">
      <DashBoardHeader title="QUIZ Manager" statement="QUIZ REVIEW" />
      <div>
        <div className="flex flex-col lg:flex-row justify-between mb-6 gap-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <img
              src="/assets/coursevuejs.png"
              alt="Vue.js"
              className="w-20 h-16 rounded"
            />
            <div>
              <h1 className="text-[24px] sm:text-[32px] font-[500] text-gray-500">
                Vue.js Deploy Quiz
              </h1>
              <p className="text-[15px] font-[500] text-gray-400">
                submitted by{" "}
                <span className="text-[#2196F3] cursor-pointer">
                  Adrian Demian
                </span>
              </p>
            </div>
          </div>
          <div className="pt-2 flex justify-start sm:justify-end">
            <button className="border text-[20px] bg-white p-1 rounded mr-2">
              <MdKeyboardArrowLeft />
            </button>
            <button className="border text-[20px] bg-red-500 text-white p-1 rounded">
              <MdKeyboardArrowRight />
            </button>
          </div>
        </div>

        <div className="border bg-white rounded-lg shadow-sm mb-8">
          <div className="bg-gray-100 flex flex-col sm:flex-row">
            <button
              className={`p-3 w-full sm:w-auto ${
                isActive ? "bg-gray-100" : "bg-white"
              }`}
              onClick={() => handleButtonClick("review")}
            >
              Review
            </button>
            <button
              className={`p-3 w-full sm:w-auto ${
                isActive ? "bg-white" : "bg-gray-100"
              }`}
              onClick={() => handleButtonClick("questions")}
            >
              All Questions
            </button>
          </div>

          {isActive ? (
            <div className="bg-white text-gray-500 px-4 sm:px-6 py-4 rounded shadow">
              <ul className="space-y-2">
                {questions.map((q) => (
                  <li key={q.number} className="border-b pb-2">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-[15px] py-2">
                      <span>
                        {q.number}.{" "}
                        <span className="text-gray-600"> {q.title}</span>
                      </span>
                      <span className="text-[12px] px-2 text-white py-[1px] rounded">
                        {q.status}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="p-2">
                <h1 className="text-gray-500 text-[15px]">Total Score</h1>
                <p className="text-[15px] text-[#2196F3] font-bold">340</p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-4 p-4">
              <div className="flex flex-col lg:flex-row gap-6 border-b pb-4">
                <div>
                  <p className="font-semibold">
                    #9. What are the first three steps?
                  </p>
                  <p className="text-xs text-gray-500 mt-1 uppercase">
                    Answer:
                  </p>
                  <p className="text-sm text-gray-700 mt-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Obcaecati temporibus blanditiis iste itaque deleniti minima.
                  </p>
                </div>

                <div className="w-full lg:w-96">
                  <h1 className="text-[15px] pb-4 text-gray-400">SCORE</h1>
                  <input type="range" className="w-full mb-4" />
                  <textarea
                    className="border-gray-200 rounded w-full h-16 p-2 mb-4 text-sm"
                    placeholder="Write comment"
                  ></textarea>
                  <button className="bg-red-500 hover:bg-red-600 text-white float-right px-4 py-2 rounded">
                    Save review ✓
                  </button>
                </div>
              </div>
              <a href="#" className="block text-blue-500 text-sm mt-4">
                #12. How do you deploy?
              </a>
            </div>
          )}
        </div>

        <div>
          <h2 className="text-[23px] text-gray-500 mb-4">Review History</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-gray-500 border-t">
              <thead className="text-left">
                <tr>
                  <th className="py-2">Submitted</th>
                  <th>Student</th>
                  <th>Score</th>
                  <th>Reviewed</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((submission, index) => (
                  <tr className="border-t" key={index}>
                    <td className="py-2">{submission.submitted}</td>
                    <td className="text-[#2196F3] cursor-pointer">
                      {submission.student}
                    </td>
                    <td>{submission.score}</td>
                    <td>
                      {submission.reviewedBy ? (
                        <span>
                          {submission.reviewed} by{" "}
                          <span className="text-[#2196F3]">
                            {submission.reviewedBy}
                          </span>
                        </span>
                      ) : (
                        <span className="text-gray-500">
                          {submission.reviewed}
                        </span>
                      )}
                    </td>
                    <td>
                      <button
                        className={`border px-3 py-1 rounded text-sm ${submission.button.style}`}
                      >
                        {submission.button.text}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default QuizPreviewComponent;
