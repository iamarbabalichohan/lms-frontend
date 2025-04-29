import { useNavigate } from "react-router-dom";

const CommunityList = ({ show }) => {
  const navigate = useNavigate();
  const listData = [
    "Forum",
    "Discussion",
    "Ask Question",
    "Student Profile-Courses",
    "Student Profile-Posts",
    "Instructor Profile",
  ];

  // const handleClick = (item) => {
  //   if (item === "Forum") {
  //     navigate("/Community-Forum");
  //   }
  //   if (item === "Discussion") {
  //     navigate("/Community-Discussion");
  //   }
  //   if (item === "Ask Question") {
  //     navigate("/Community-Ask Question");
  //   }
  //   if (item === "Student Profile-Posts") {
  //     navigate("/Community-Student Profile-Posts");
  //   }
  //   if (item === "Instructor Profile") {
  //     navigate("/Community-Instructor Profile");
  //   }
  // };

  return (
    <div
      className={`transition-all duration-300 ease-in-out overflow-hidden ${
        show ? "max-h-56 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="pl-6 sm:pl-8 bg-[#0097B2] text-white text-xs sm:text-sm py-2 space-y-1">
        <ul>
          {listData.map((item, index) => (
            <li
              key={index}
              className="hover:text-gray-300 pl-1 sm:pl-2 py-2 cursor-pointer"
              // onClick={() => handleClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommunityList;
