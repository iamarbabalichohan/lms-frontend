import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Sample data (same as what would be in lineData)
const lineData = [
  { name: "Tue", value: 150 },
  { name: "Wed", value: 20 },
  { name: "Thu", value: 130 },
  { name: "Fri", value: 200 },
  { name: "Sat", value: 120 },
  { name: "Sun", value: 190 },
  { name: "Mon", value: 80 },
];

const data = {
  labels: lineData.map((item) => item.name),
  datasets: [
    {
      label: "Sales",
      data: lineData.map((item) => item.value),
      borderColor: "#0088FE",
      backgroundColor: "rgba(136, 132, 216, 0.2)",
      borderWidth: 4,
      pointBackgroundColor: "#8884d8",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "#8884d8",
      tension: 0.6, // smooth line
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
  },
  scales: {
    x: {
      grid: { display: false },
    },
    y: {
      grid: { color: "rgba(0,0,0,0.1)" },
      ticks: { stepSize: 50 },
    },
  },
};

const LineChartComponent = () => {
  return (
    <div className="w-full h-[200px] sm:h-[250px] md:h-[300px]">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChartComponent;
