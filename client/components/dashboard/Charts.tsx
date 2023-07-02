"use client";
import { useState } from "react";
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });


const Charts = () => {
  const [data, setData] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ['Biobaku', "Jaja", "Mariere", "Sodeinde", "Eni Njoku", "El Kanemi"],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 70],
      },
    ],
  });
  return (
    <div className="app">
      <div className="row">
        <h3>Complaints by Hostels: </h3>
        <div>
          <Chart
            options={data.options}
            series={data.series}
            type={'bar'}
          />
        </div>
      </div>
    </div>
  );
};

export default Charts;
