import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register bar chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

// Use radar data but in bar chart layout
const data = {
  labels: [
    "JavaScript",
    "HTML",
    "Flinto",
    "Vue.js",
    "Sketch",
    "Priciple",
    "CSS",
    "Angular",
  ],
  datasets: [
    {
      label: "Skill Level",
      data: [90, 85, 70, 75, 60, 65, 80, 88],
      backgroundColor: "#0097B2", // Your preferred accent color
      borderRadius: 6,
      barThickness: 18,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: true },
  },
  scales: {
    x: {
      ticks: {
        font: { size: 13 },
        color: "#333",
      },
      grid: { display: false },
      categoryPercentage: 0.9,
      barPercentage: 0.9,
    },
    y: {
      min: 0,
      max: 100,
      ticks: { stepSize: 20 },
      grid: {
        color: "rgba(0, 0, 0, 0.1)",
      },
    },
  },
};

const BarChartComponent = () => {
  return (
    <div className="w-full mt-12 sm:w-[400px] md:w-[400px] mx-auto h-[300px] sm:h-[404px]">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChartComponent;
