const CourseCard = ({ title, progress, icon, bgColor, barColor }) => {
  return (
    <div className="flex h-[60px] text-[13px] items-center justify-between px-4 border-b">
      <div className="flex items-center space-x-4">
        <div className="flex bg-[#000] justify-center w-10 h-8 items-center">
          <img src={icon} alt="icon" className="w-6 h-6 rounded" />
        </div>
        <div>
          <h2 className=" font-semibold">{title}</h2>
          <div className="flex">
            <div
              className="h-2 mt-2 w-48 rounded-full "
              style={{ backgroundColor: bgColor }}
            >
              <div
                className="h-2 rounded-full "
                style={{ width: `${progress}%`, backgroundColor: barColor }}
              ></div>
            </div>
            <p className=" text-gray-600 mt-1">{progress}%</p>
          </div>
        </div>
      </div>
      <div className="text-gray-400 text-[20px] font-bold">⋮</div>
    </div>
  );
};
export default CourseCard;
