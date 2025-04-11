import React from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

// Register the chart components
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

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
      backgroundColor: "rgba(223, 233, 242, 0.2)",
      borderColor: "#0088FE",
      borderWidth: 4,
      pointBackgroundColor: "#0088FE",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "#0088FE",
    },
  ],
};

const options = {
  scales: {
    r: {
      suggestedMin: 0,
      suggestedMax: 100,
      angleLines: { color: "rgba(0, 0, 0, 0.1)" },
      grid: { color: "rgba(0, 0, 0, 0.1)" },

      ticks: {
        display: false,
        stepSize: 40,
      },
      pointLabels: {
        font: {
          size: 16, // Increase font size of labels like "JavaScript"
        },
        color: "#333", // Optional: changes text color
      },
    },
  },
  plugins: {
    legend: { display: false },
  },
};

const RadarChartComponent = () => {
  return (
    <div className="flex h-[350px] justify-center w-full">
      <Radar data={data} options={options} />
    </div>
  );
};

export default RadarChartComponent;
