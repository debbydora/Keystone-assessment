import { useState } from "react";
import Chart from "react-apexcharts";

const AreaChart = () => {
  const [chartOptions] = useState({
    chart: {
      id: "area",
    },
    dataLabels: {
      enabled: false,
    },

    xaxis: {
      categories: [
        "jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "oct",
        "Nov",
        "Dec",
      ],
    },
    colors: ["#E775AA", "#7CA9EC"],
    yaxis: {
      tooltip: {
        enabled: true,
        offsetX: 0,
      },
    },

    legend: {
      position: "top",
      horizontalAlign: "center",
      offsetX: -15,
    },
  });
  const [chartSeries] = useState([
    {
      name: "income",
      data: [300, 400, 750, 650, 750, 500, 700, 700, 678, 598, 600, 700],
    },
    {
      name: "Expenses",
      data: [500, 590, 356, 768, 345, 769, 235, 786, 345, 675, 800, 390],
    },
  ]);

  return (
    <div>
      {" "}
      <Chart
        options={chartOptions}
        series={chartSeries}
        height="260"
        type="area"
      />
    </div>
  );
};

export default AreaChart;
