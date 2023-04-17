import { useState } from "react";
import Chart from "react-apexcharts";

const RadarChart = () => {
  const [chartOptions] = useState({
    chart: {
      id: "Radar",
    },

    plotOptions: {
      radar: {
        size: 70,
        offsetY: 24,
        polygons: {
          strokeColor: "#e8e8e8",
          fill: {
            colors: ["#f8f8f8", "#fff"],
          },
        },
      },
    },

    xaxis: {
      categories: ["Outwear", "Shoes", "Jeans", "Accessories", "T-shirts"],
      labels: {
        show: true,
        style: {
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      show: false,
    },

    fill: {
      opacity: 0.5,
      colors: ["#7CA9EC"],
    },
  });
  const [chartSeries] = useState([
    {
      name: "income",
      data: [800, 700, 850, 650, 750],
    },
  ]);
  return (
    <div className="flex flex-col shadow-lg bg-white rounded-xl w-[30%] px-4 py-4 h-fit">
      <p className="font-medium text-base text-gray-400">
        Top Selling Categories
      </p>{" "}
      <Chart options={chartOptions} series={chartSeries} type="radar" />
    </div>
  );
};

export default RadarChart;
