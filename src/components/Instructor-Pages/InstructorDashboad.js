import DashBoardHeader from "../UI/DashBoardHeader";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { CgNotes } from "react-icons/cg";
import { RiExpandUpDownFill } from "react-icons/ri";
import { MdInsertEmoticon } from "react-icons/md";
import { IoMdAttach } from "react-icons/io";
import { IoMdSend } from "react-icons/io";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement);

const InstructorDashboard = () => {
  const chartData = {
    labels: ["3/04", "4/04", "5/04", "6/04", "7/04", "8/04", "9/04", "10/04"],
    datasets: [
      {
        label: "Earnings",
        data: [170, 60, 130, 250, 120, 150, 220, 55],
        backgroundColor: "#0097B2",
        borderRadius: 12,
        color: "gray",
        barThickness: 18,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 100, // This defines the interval for y-axis values
        },
      },
    },
    plugins: { legend: { display: false } },
  };

  return (
    <div className="p-6 pb-32 px-6 sm:px-8 lg:px-44 bg-gray-100 w-full overflow-y-auto">
      <DashBoardHeader title="DASHBOARD" subTitle="Dashboard" />
      <div className="bg-gray-100 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {/* Earnings Chart */}
        <div className=" gap-6 sm:">
          <div className="bg-white p-4 rounded shadow">
            <div className="flex justify-between mb-2">
              <h2 className="font-[400] text-[23px] text-gray-600">Earnings</h2>
              <button className="text-white bg-[#0097B2] h-8 p-2 font-medium">
                <HiArrowTrendingUp />
              </button>
            </div>
            <p className="text-xs text-[12px] border-b text-gray-400 pb-4">
              Last 7 days
            </p>
            <div className=" py-4 text-gray-400">
              <button className="border px-2 py-1">Earnings</button>
            </div>
            <Bar data={chartData} options={chartOptions} className="pt-4" />
          </div>

          {/* Transactions */}
          <div className="bg-white p-4 mt-4 rounded shadow col-span-1">
            <div className="flex justify-between mb-2">
              <h2 className="font-[400] text-[23px] text-gray-700">
                Transactions
              </h2>
              <button className="py-1 px-2 bg-[#0097B2] rounded text-white">
                <CgNotes />
              </button>
            </div>
            <p className="text-[12px] text-gray-400 mb-4">
              Latest Transactions
            </p>
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="text-gray-500  uppercase text-xs border-b">
                  <th className="flex gap-2 py-2 w-full bg-gray-100">
                    Course{" "}
                    <span>
                      <RiExpandUpDownFill className="text-[14px] ml-1 mr-2" />
                    </span>{" "}
                    Document{" "}
                    <RiExpandUpDownFill className="text-[14px] ml-1 mr-2" />{" "}
                    Amount{" "}
                    <RiExpandUpDownFill className="text-[14px] mr-2 ml-1" />{" "}
                    Date
                    <RiExpandUpDownFill className="text-[14px] ml-1" />
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                {[
                  [
                    "Learn Angular Fundamentals",
                    "#8737",
                    "89 USD",
                    "15 NOV 2018",
                    "/assets/coursegulp.png",
                  ],
                  [
                    "Introduction to TypeScript",
                    "#8736",
                    "89 USD",
                    "14 NOV 2018",
                    "/assets/coursegithub.png",
                  ],
                  [
                    "Angular Unit Testing",
                    "#8735",
                    "89 USD",
                    "13 NOV 2018",
                    "/assets/coursevuejs.png",
                  ],
                  [
                    "Angular Routing In-Depth",
                    "#8734",
                    "89 USD",
                    "12 NOV 2018",
                    "/assets/coursevuejs.png",
                  ],
                ].map(([course, invoice, amount, date, icon], idx) => (
                  <tr key={idx} className="flex justify-between border-b">
                    <td className="flex items-center gap-4 py-3">
                      <img src={icon} alt="" className="w-10 h-8" />
                      <div>
                        <div className="text-[15px]">{course}</div>
                        <div className="text-[12px] text-gray-400">
                          Invoice {invoice} - {amount}
                        </div>
                      </div>
                    </td>

                    <span className="text-right text-[12px] mt-4 text-gray-400">
                      {date}
                    </span>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          {/* Sales Today */}
          <div className="bg-white p-4 h-[40%] rounded shadow">
            <div className="flex justify-between mb-2">
              <h2 className="font-[400] text-[23px] text-gray-600">
                Sales today
              </h2>
              <span className=" text-white px-3 py-1 h-8 flex  justify-center items-center bg-[#BA0000] rounded text-xs">
                Earnings
              </span>
            </div>
            <p className="text-[12px] text-gray-400 mb-4 border-b pb-4">
              By Course
            </p>
            <div className="space-y-3">
              {[
                ["Basics of HTML", "15", "bg-[#0097B2]"],
                ["Angular in Steps", "50", "bg-green-500"],
                ["Bootstrap Foundations", "14", "bg-yellow-500"],
                ["GitHub Basics", "14", "bg-[#BA0000]"],
              ].map(([title, count, color], idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center py-2 border-b"
                >
                  <span className="text-gray-600">{title}</span>
                  <span
                    className={`text-white text-xs px-2 py-1 rounded-full ${color}`}
                  >
                    {count}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Comments */}
          <div className="bg-white p-4 mt-4 rounded shadow col-span-1">
            <div className="flex justify-between mb-2">
              <h2 className="font-[400] text-[23px] text-gray-600">Comments</h2>
              <div className="space-x-2">
                <button className="border px-3 border-[#0097B2] py-1 rounded text-[#0097B2] hover:border-none hover:bg-red-500 hover:text-white">
                  ‹
                </button>
                <button className="border px-3 border-[#0097B2] py-1 rounded text-[#0097B2] hover:bg-red-500 hover:border-none hover:text-white">
                  ›
                </button>
              </div>
            </div>
            <p className="text-[12px] pb-4 text-gray-400 mb-4 border-b">
              Latest Comments
            </p>

            <div className="mb-4 border-b">
              <div className="flex items-center gap-3">
                <img
                  src="https://i.pravatar.cc/40"
                  className="w-8 h-8 rounded-full"
                  alt="user"
                />
                <div>
                  <p className="text-gray-700 text-[15px] font-semibold">
                    Laza Bogdan
                  </p>
                  <p className="text-[15px] text-gray-400">
                    on{" "}
                    <span className="text-gray-400 underline">
                      Data Visualization With Chart.js
                    </span>
                  </p>
                  <p className="text-[15px] text-gray-500 mt-1">
                    How can I load Charts on a page?
                  </p>
                </div>
                <span className=" text-[12px] mb-10 ml-auto text-gray-400">
                  27 min ago
                </span>
              </div>

              <div className="flex gap-2 bg-gray-50 p-3 m-6 rounded mt-4 text-sm text-gray-700">
                <div>
                  <img
                    src="https://i.pravatar.cc/40"
                    className="w-12 h-8 rounded-full"
                    alt="user"
                  />
                </div>
                <div>
                  <strong className="block mb-1 text-gray-700">
                    Frontend Matter
                  </strong>
                  Hi Bogdan, <br />
                  Thank you for purchasing our course! <br />
                  <br />
                  Please have a look at the charts library documentation{" "}
                  <span className="text-[#BA0000] underline">here</span> and
                  follow the instructions.
                </div>
                <h1 className="text-[13px] text-gray-400 w-28">just now</h1>
              </div>
            </div>

            <div className="flex mt-4 border">
              <input
                className="w-full rounded px-4 py-2 text-sm"
                placeholder="Quick Reply"
              />
              <span className="flex mt-2 mr-4 gap-2">
                <MdInsertEmoticon />
                <IoMdAttach />
                <IoMdSend />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InstructorDashboard;
