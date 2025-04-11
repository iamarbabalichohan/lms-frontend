const CourseCard = ({ title, progress, icon, bgColor, barColor }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:h-[60px] text-[13px] items-start sm:items-center justify-between px-4 py-2 border-b">
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 w-full">
        <div className="flex bg-[#000] justify-center w-10 h-8 items-center mb-2 sm:mb-0">
          <img src={icon} alt="icon" className="w-6 h-6 rounded" />
        </div>
        <div className="flex flex-col w-full">
          <h2 className="font-semibold">{title}</h2>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
            <div
              className="h-2 mt-2 sm:mt-0 sm:w-48 w-full rounded-full"
              style={{ backgroundColor: bgColor }}
            >
              <div
                className="h-2 rounded-full"
                style={{ width: `${progress}%`, backgroundColor: barColor }}
              ></div>
            </div>
            <p className="text-gray-600 mt-1 sm:mt-0">{progress}%</p>
          </div>
        </div>
      </div>
      <div className="text-gray-400 text-[20px] font-bold mt-2 sm:mt-0 sm:ml-4 self-end sm:self-center">
        ⋮
      </div>
    </div>
  );
};
export default CourseCard;
