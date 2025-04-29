import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import DashBoardHeader from "../UI/DashBoardHeader";
import NextPreviousButton from "./buttons/NextPrevious";

const EarningComponent = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const chart = new Chart(canvasRef.current, {
      type: "bar",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Earnings",
            data: [
              23000, 19000, 29000, 22000, 16000, 9000, 18000, 25000, 27000,
              24000, 19000, 23000,
            ],
            backgroundColor: "#0097B2",
            borderRadius: 10,
            barThickness: 10,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          title: {
            display: true,
            text: "EARNINGS",
            font: { size: 14 },
            color: "#666",
            padding: { top: 10, bottom: 10 },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 30000,
            ticks: {
              stepSize: 10000,
              callback: (value) => `$${value / 1000}k`,
            },
          },
        },
      },
    });

    return () => chart.destroy();
  }, []);

  return (
    <div className="p-6 pb-32 px-44 bg-gray-100 w-full overflow-y-auto">
      <DashBoardHeader title="EARNINGS" subTitle="Earnings" />

      <div className="w-full max-w-[944px] mx-auto">
        <div className="bg-white rounded shadow-sm border border-gray-200 mb-6">
          <div className="p-5">
            <div className="flex flex-wrap items-center justify-between mb-4">
              <select className="text-sm border border-gray-200 rounded px-3 py-2 shadow-inner bg-white">
                <option>2015</option>
                <option>2014</option>
                <option>2013</option>
                <option>2012</option>
              </select>
              <div className="text-xs text-gray-500 flex items-center">
                <span className="flex items-center px-2 py-1 border border-gray-200 rounded">
                  <span className="w-2 h-2 bg-[#0097B2] rounded-full mr-1"></span>
                  Sales
                </span>
              </div>
            </div>
            <div className="relative h-[300px]">
              <canvas ref={canvasRef} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded shadow-sm border border-gray-200 mb-6">
          <div className="px-5 py-3 border-b border-gray-200">
            <h5 className="text-base text-gray-700">
              Total <span className="text-[#0097B2]">$19,239</span>
            </h5>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-gray-700 border-collapse">
              <thead className="bg-gray-100 text-xs text-gray-400 uppercase">
                <tr>
                  <th className="px-3 py-2 text-left border-b">Course</th>
                  <th className="px-3 py-2 text-center border-b">Fees</th>
                  <th className="px-3 py-2 text-center border-b">Revenue</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    title: "Angular Routing In-Depth",
                    sales: "34 Sales",
                    image:
                      "https://learnplus.demo.frontendmatter.com/assets/images/vuejs.png",
                    fees: "$120 USD",
                    revenue: "$8,737 USD",
                  },
                  {
                    title: "Angular Unit Testing",
                    sales: "38 Sales",
                    image:
                      "https://learnplus.demo.frontendmatter.com/assets/images/vuejs.png",
                    fees: "---",
                    revenue: "$2,521 USD",
                  },
                  {
                    title: "Introduction to TypeScript",
                    sales: "8 Sales",
                    image:
                      "https://learnplus.demo.frontendmatter.com/assets/images/github.png",
                    fees: "---",
                    revenue: "$1,413 USD",
                  },
                  {
                    title: "Learn Angular Fundamentals",
                    sales: "31 Sales",
                    image:
                      "https://learnplus.demo.frontendmatter.com/assets/images/gulp.png",
                    fees: "---",
                    revenue: "$1,234 USD",
                  },
                ].map((course, index) => (
                  <tr key={index} className="border-t border-gray-200">
                    <td className="px-3 py-2">
                      <div className="flex items-center">
                        <img
                          src={course.image}
                          alt="course"
                          className="w-16 h-10 rounded mr-4 object-cover"
                        />
                        <div>
                          <strong>{course.title}</strong>
                          <div className="text-xs text-gray-400">
                            {course.sales}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-2 text-center text-gray-600">
                      {course.fees}
                    </td>
                    <td className="px-3 py-2 text-center text-gray-600">
                      {course.revenue}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <NextPreviousButton />
      </div>
    </div>
  );
};

export default EarningComponent;
