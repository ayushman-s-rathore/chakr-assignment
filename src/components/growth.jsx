import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import "./growth.css";
import Chart from "./chart";

function growth() {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch("dataset.csv");
      const reader = response.body.getReader();
      const result = await reader.read();
      const decoder = new TextDecoder("utf-8");
      const csv = decoder.decode(result.value);
      const results = Papa.parse(csv, { header: true });
      const tempRows = results.data;
      const parsedRow = tempRows.map((row) => {
        return [new Date(row.Timestamp), parseFloat(row["Profit Percentage"])];
      });
      const reducedRow = getReduced(parsedRow);
      setRows(reducedRow);
    }
    getData();
  }, []);
  function getReduced(array) {
    const result = array.reduce((acc, [date, profit]) => {
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const key = `${year}-${month}`;
      if (!acc[key]) acc[key] = { sum: 0, count: 0 };
      acc[key].sum += profit;
      acc[key].count += 1;
      return acc;
    }, {});
    const averages = Object.entries(result).map(([key, { sum, count }]) => ({
      monthYear: key,
      average: sum / count,
    }));
    return averages;
  }
  return (
    <>
      <div className="growth">
        <div className="growth-layer1">
          <div>Growth</div>
          <button>
            Yearly
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
            <path d="M3.5 5.86163L7 9.36163L10.5 5.86163" stroke="#7D7D7D" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
        <div className="lineChart">

        <Chart rows={rows} />
        </div>
      </div>
    </>
  );
}
export default growth;
