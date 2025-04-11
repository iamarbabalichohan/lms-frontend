const ForumItem = ({ name, message, time, avatar }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4 border-b p-4">
      <img
        src={avatar}
        alt="avatar"
        className="w-10 h-10 rounded-full mb-2 sm:mb-0"
      />
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <h2 className="font-semibold text-[13px] text-gray-800">{name}</h2>
          <span className="text-[12px] text-gray-400 mt-1 sm:mt-0">{time}</span>
        </div>
        <p className="text-sm text-gray-700 mt-1">{message}</p>
      </div>
    </div>
  );
};
export default ForumItem;
