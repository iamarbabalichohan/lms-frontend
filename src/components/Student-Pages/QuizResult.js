const QuizResult = () => {
  const questions = [
    { number: 1, title: "Installation", status: "Correct" },
    { number: 2, title: "The MVC architectural pattern", status: "Correct" },
    { number: 3, title: "Database Models", status: "Correct" },
    { number: 4, title: "Database Access", status: "Wrong" },
    { number: 5, title: "Eloquent Basics", status: "Pending Review" },
    { number: 6, title: "Take Quiz", status: "Correct" },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case "Correct":
        return "bg-[#66BB6A] ";
      case "Wrong":
        return "bg-red-500 ";
      case "Pending Review":
        return "bg-[#2196F3] ";
      default:
        return "";
    }
  };
  return (
    <div className="p-6 pb-32 px-44 bg-gray-100 w-full overflow-y-auto">
      <div>
        <div className="text-[11px] space-x-2 py-2">
          <span className="text-[#2196F3] mr-2">HOME </span>
          {"  /  "} <span className="text-gray-400">QUIZ RESULT</span>
        </div>
        <div className="flex gap-4 pt-4">
          <img
            src="/assets/coursevuejs.png"
            className="w-20 h-10 rounded mt-2"
            alt=""
          />
          <div className="">
            <h1 className="text-[32px] font-semibold text-gray-500">
              Vue.js Deploy Quiz
            </h1>
            <p className="text-[13px] text-gray-400 font-semibold">
              submited on 2nd Feb 2016
            </p>
          </div>
        </div>
      </div>
      <div className="py-6 max-w-4xl  space-y-6">
        <div className="bg-white px-4 py-2 text-gray-500 rounded shadow">
          <h2 className="text-[23px] border-b pb-4 font-[400] mb-2">Result</h2>
          <div className="flex py-2 justify-between">
            <div className="py-2">
              <h1 className="text-[15px] font-bold">5.8</h1>
              <h1 className="text-gray-400">Good</h1>
            </div>
            <button className="h-12 mt-2 px-4  bg-red-600 text-white rounded hover:bg-blue-600">
              Restart ↻
            </button>
          </div>
        </div>

        <div className="bg-white text-gray-500 px-6 py-4 rounded shadow">
          <h3 className="text-xl font-semibold border-b pb-4 mb-4">
            Questions
          </h3>
          <ul className="space-y-2">
            {questions.map((q) => (
              <li
                key={q.number}
                className="flex justify-between text-[15px] items-center border-b pb-2"
              >
                <span>
                  {q.number}. <span className="text-gray-600"> {q.title}</span>
                </span>
                <span
                  className={`text-[12px] px-2 text-white py-[1px] rounded ${getStatusClass(
                    q.status
                  )}`}
                >
                  {q.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default QuizResult;
