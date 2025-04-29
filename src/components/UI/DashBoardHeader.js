const DashBoardHeader = ({ title, subTitle, statement }) => {
  return (
    <div>
      <div className="text-[11px] space-x-2 py-2">
        <span className="text-[#0097B2] mr-2">HOME </span>
        {"  /  "} <span className="text-gray-400">{title}</span>
        {"  /  "} <span className="text-gray-400">{statement}</span>
      </div>
      <div>
        <h1 className="text-[32px] font-[500] tracking-tight text-gray-600 py-6">
          {subTitle}
        </h1>
      </div>
    </div>
  );
};
export default DashBoardHeader;
