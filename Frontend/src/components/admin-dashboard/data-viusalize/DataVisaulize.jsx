import { useState } from "react";
import { useGetAllPostCountQuery } from "../../../redux/feature/doctor-crud/crud";
import { Data } from "../../../utils/data-visualize/data";
import { BarChart } from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./pieChart";
import "./visualize.css";
const DataVisualize = () => {
  useGetAllPostCountQuery();
  const [chartData] = useState({
    labels: Data.map((data) => data.year),

    datasets: [
      {
        label: "Patients ",
        data: Data.map((data) => data.patients),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#f0331a",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div>
      {/* <div>
        <h4>Total Doctor's</h4>
        {console.log("Count:", CountData.data)}
        <p>{CountData.data}</p>
      </div> */}
      <div className="App">
        <BarChart chartData={chartData} />
        <LineChart chartData={chartData} />
      </div>
      <div className="Appp">
        <PieChart chartData={chartData} />
      </div>
    </div>
  );
};

export default DataVisualize;
