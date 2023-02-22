import React from "react";
import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import { Chart as ChartJS } from "chart.js/auto";

export const BarChart = (props) => {
  console.log("props", props);
  return (
    <div className="chart-container">
      <Bar
        data={props.chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Disease against patients 2016-2022",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
      {}
    </div>
  );
};
