import DashBoardHeader from "../UI/DashBoardHeader";
import { AiFillQuestionCircle } from "react-icons/ai";
import { IoIosArrowRoundForward } from "react-icons/io";
import { GrCircleInformation } from "react-icons/gr";

const HelpCenter = () => {
  const sections = [
    {
      title: "Introduction",
      subtitle: "Getting Started",
      items: ["Basic Setup", "Working with the Dev", "Your first deploy"],
    },
    {
      title: "API",
      subtitle: "Documentation",
      items: ["Course API Docs", "Student API Docs", "Instructor API Docs"],
    },
    {
      title: "Customization",
      subtitle: "Documentation",
      items: ["Styling with SASS", "Editing the Pages", "Saving for later"],
    },
  ];

  return (
    <div className="p-4 sm:p-6 pb-32 sm:px-44 bg-gray-100 w-full overflow-y-auto">
      <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0">
        <DashBoardHeader title="HELP CENTER" subTitle="Help Center" />
        <button className="flex gap-2 text-[14px] py-2 h-10 sm:mt-12 px-4 bg-red-500 rounded text-white self-start sm:self-auto">
          Have a Question
          <AiFillQuestionCircle className="mt-1" />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-500 bg-gray-100 mt-4">
        {sections.map((section, idx) => (
          <div
            key={idx}
            className="bg-white rounded shadow-md overflow-hidden w-full"
          >
            {/* Header */}
            <div className="flex justify-between items-center px-4 py-2 border-b">
              <div>
                <h2 className="text-[23px] text-gray-600 font-semibold">
                  {section.title}
                </h2>
                <p className="text-gray-400 uppercase text-[11px] tracking-wide">
                  {section.subtitle}
                </p>
              </div>
              <GrCircleInformation className="text-[24px] text-gray-400 cursor-pointer" />
            </div>

            {/* Items */}
            {section.items.map((item, i) => (
              <div
                key={i}
                className="flex justify-between items-center px-4 py-3 border-t hover:bg-gray-50 cursor-pointer"
              >
                <span className="text-[15px] text-gray-600 font-medium">
                  {item}
                </span>
                <IoIosArrowRoundForward className="text-[24px]" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpCenter;
