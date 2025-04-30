import DashBoardHeader from "../UI/DashBoardHeader";

const TakeQuiz = () => {
  const options = [
    { label: "git push", value: "push" },
    { label: 'git commit -m "message"', value: "commit" },
    { label: "git pull", value: "pull" },
  ];
  const statsData = [
    { label: "TOTAL", value: 25, color: "text-gray-800" },
    { label: "CORRECT", value: 3, color: "text-green-600" },
    { label: "WRONG", value: 5, color: "text-[#BA0000]" },
    { label: "LEFT", value: 17, color: "text-[#0097B2]" },
  ];

  const questions = [
    { number: 9, text: "Github command to deploy comits?" },
    {
      number: 10,
      text: "What's the difference between private and public repos?",
    },
    { number: 11, text: "What is the purpose of a branch?" },
    { number: 12, text: "Final Question?" },
  ];

  const activeQuestion = 9;
  return (
    <div className=" w-full sm:pb-32 bg-gray-50 flex flex-col lg:flex-row md:justify-between">
      <div className="p-6 bg-gray-50 lg:ml-40 flex flex-col gap-6 md:w-[65%] w-full">
        <DashBoardHeader title="Quiz" />
        <div className="flex flex-col md:flex-row md:justify-around bg-white rounded shadow w-full max-w-full text-center overflow-auto">
          {statsData.map((stat, index) => (
            <div
              className="border-b md:border-b-0 md:border-r p-4 w-full md:w-[280px]"
              key={index}
            >
              <div className={`text-2xl font-bold ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded shadow p-6 ">
          <h2 className="text-xl text-gray-500 font-semibold mb-4">
            #9 &nbsp; Github command to deploy comits?
          </h2>

          <div className="flex flex-col text-gray-500 gap-3 mb-6">
            {options.map((option, index) => (
              <label
                key={index}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input type="radio" name="git" value={option.value} />
                <span>{option.label}</span>
              </label>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <button className="border border-gray-300 hover:bg-gray-100 px-4 py-2 rounded w-full sm:w-auto">
              Skip
            </button>
            <button className="bg-[#BA0000] text-white px-6 py-2 rounded shadow hover:bg-red-700 w-full sm:w-auto">
              Submit &gt;
            </button>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-80 bg-white shadow min-h-screen p-4">
        <div className="mb-6 py-2">
          <h2 className="text-[15px] mb-2 text-gray-500">TIME LEFT</h2>
          <div className="flex items-center justify-between text-gray-500 text-sm font-semibold">
            <span>
              <span className="text-lg text-[#BA0000]">01</span> hrs{" "}
              <span className="text-lg text-[#BA0000]">43</span> min{" "}
              <span className="text-lg text-[#BA0000]">22</span> sec
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-xs text-gray-500 mb-2">PENDING</h2>
          <div className="space-y-2">
            {questions.map((q) => (
              <div
                key={q.number}
                className={`flex items-center gap-3 p-3 rounded cursor-pointer ${
                  q.number === activeQuestion
                    ? "bg-[#0097B2] text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                <div
                  className={`rounded-full border w-8 h-8 p-1 flex items-center justify-center ${
                    q.number === activeQuestion
                      ? "bg-white text-[#BA0000]"
                      : "text-gray-700 border-gray-400"
                  }`}
                >
                  #{q.number}
                </div>
                <span className="text-sm">{q.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default TakeQuiz;
