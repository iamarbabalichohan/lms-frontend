const QuizResults = () => {
  const quizzes = [
    {
      title: "Title of quiz goes here?",
      course: "Basics of HTML",
      status: "Good",
      score: 5.8,
      color: "text-gray-700",
    },
    {
      title: "Directives & Routing",
      course: "Angular in Steps",
      status: "Great",
      score: 9.8,
      color: "text-green-600",
    },
    {
      title: "Responsive & Retina",
      course: "Bootstrap Foundations",
      status: "Failed",
      score: 2.8,
      color: "text-red-500",
    },
  ];

  return (
    <div className="w-full md:w-[59%] text-gray-600 bg-white rounded-md shadow-md overflow-hidden mt-10 md:mt-0">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 border-b gap-2">
        <div>
          <h2 className="text-[20px] sm:text-[23px]">Quizzes</h2>
          <p className="text-[12px] text-gray-400">YOUR PERFORMANCE</p>
        </div>
        <button className="bg-[#BA0000] hover:bg-red-700 text-white px-4 py-2 rounded text-[13px] w-full sm:w-auto">
          Quiz results
        </button>
      </div>

      {quizzes.map((quiz, index) => (
        <div
          key={index}
          className={`flex flex-col sm:flex-row sm:justify-between sm:items-center px-4 py-4 gap-2 ${
            index < quizzes.length - 1 ? "border-b" : ""
          }`}
        >
          <div>
            <h3 className="text-gray-800 text-[16px]">{quiz.title}</h3>
            <p className="text-[13px] text-gray-400">
              COURSE{" "}
              <span className="text-[#0097B2] underline cursor-pointer">
                {quiz.course}
              </span>
            </p>
          </div>
          <div className="flex gap-2 justify-between sm:justify-end text-right">
            <p className="text-sm pt-1 text-gray-500">{quiz.status}</p>
            <p className={`text-xl font-semibold ${quiz.color}`}>
              {quiz.score}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuizResults;
