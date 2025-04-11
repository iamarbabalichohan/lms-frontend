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
    { label: "WRONG", value: 5, color: "text-red-500" },
    { label: "LEFT", value: 17, color: "text-blue-500" },
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
    <div className=" w-full fixed bg-gray-50 flex justify-between">
      <div className="p-6 bg-gray-50 ml-40 flex flex-col gap-6">
        <DashBoardHeader title="Quiz" />
        <div className="flex gap-6 bg-white   rounded shadow  w-full max-w-4xl justify-around text-center">
          {statsData.map((stat, index) => (
            <div className="border-r p-4 w-[280px]" key={index}>
              <div className={`text-2xl font-bold ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded shadow p-6 w-full max-w-4xl">
          <h2 className="text-xl text-gray-500 font-semibold mb-4">
            #9 &nbsp; Github command to deploy comits?
          </h2>

          <div className="flex flex-col text-gray-500 gap-3 mb-6">
            {options.map((option, index) => (
              <label
                key={index}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="git"
                  value={option.value}
                  // checked={selectedOption === option.value}
                  // onChange={() => setSelectedOption(option.value)}
                />
                <span>{option.label}</span>
              </label>
            ))}
          </div>

          <div className="flex justify-between">
            <button className="border border-gray-300 hover:bg-gray-100 px-4 py-2 rounded">
              Skip
            </button>
            <button className="bg-red-600 text-white px-6 py-2 rounded shadow hover:bg-red-700">
              Submit &gt;
            </button>
          </div>
        </div>
      </div>
      <div className="w-80 bg-white shadow min-h-screen p-4 float-right">
        <div className="mb-6 py-2">
          <h2 className="text-[15px] mb-2 text-gray-500">TIME LEFT</h2>
          <div className="flex items-center justify-between text-gray-500 text-sm  font-semibold">
            <span>
              <span className="text-lg text-red-600 ">01</span> hrs{" "}
              <span className="text-lg text-red-600">43</span> min{" "}
              <span className="text-lg text-red-600">22</span> sec
            </span>
            {/* <FaCog className="text-gray-600" /> */}
          </div>
        </div>

        {/* Pending */}
        <div>
          <h2 className="text-xs text-gray-500 mb-2">PENDING</h2>
          <div className="space-y-2">
            {questions.map((q) => (
              <div
                key={q.number}
                className={`flex items-center gap-3 p-3 rounded cursor-pointer ${
                  q.number === activeQuestion
                    ? "bg-[#2196F3] text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                <div
                  className={`rounded-full border w-8 h-8 p-1 flex items-center justify-center ${
                    q.number === activeQuestion
                      ? "bg-white text-red-600"
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
