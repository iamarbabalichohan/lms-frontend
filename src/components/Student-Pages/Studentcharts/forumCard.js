const ForumItem = ({ name, message, time, avatar }) => {
  return (
    <div className="flex items-start space-x-4 border-b p-4">
      <img src={avatar} alt="avatar" className="w-10 h-10 rounded-full" />
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-[13px] text-gray-800">{name}</h2>
          <span className="text-[12px] text-gray-400">{time}</span>
        </div>
        <p className="text-sm text-gray-700 mt-1">{message}</p>
      </div>
    </div>
  );
};
export default ForumItem;
