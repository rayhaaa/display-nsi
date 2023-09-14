"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { Tooltip } from "chart.js";
// import { useEffect, useState } from "react";

function ExampleChart() {
  // const [loading, setloading] = useState(true)
  // const [dashboard, setdashboard] = useState(null)

  // useEffect(() => {
  //   async function fetchdashboard() {
  //     const response = await fetch('http://192.168.10.75:3003/api/history-downtime')
  //     const data = await response.json()
  //     setdashboard(data)
  //     setloading(false)
  //   }
  //   fetchdashboard()
  // }, [])

  const data = [
    {
      name: "Page A",
      uv: 4000,
      // pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      // pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      // pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      // pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      // pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390, //jumlah data 
      // pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      // pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <AreaChart
      width={730}
      height={250}
      data={data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
        </linearGradient>
        {/* <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
        </linearGradient> */}
      </defs>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="uv"
        stroke="#8884d8"
        fillOpacity={1}
        fill="url(#colorUv)"
      />
      {/* <Area
        type="monotone"
        dataKey="pv"
        stroke="#82ca9d"
        fillOpacity={1}
        fill="url(#colorPv)"
      /> */}
    </AreaChart>
  );
}

export default ExampleChart;



// import React, { useEffect, useRef, useState } from "react";
// import Chart from "chart.js/auto";
// import dynamic from "next/dynamic";


// const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

// export default function ChartDowntime() {
//   return(
//     <>
//     const option = {
//         chart: {
//           id: 'apexchart-example'
//         },
//         xaxis: {
//           categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
//         }
//       }

//     const series = [{
//         name: 'series-1',
//         data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
//       }]

//     return(
//         <>
//             <ApexChart type="line" options={option} series={series} height={200} width={500} />
//         </>
//     )
//     </>
//   )
// }

// const fetcher1 = async () => {
//   const res = await fetch('http://192.168.10.75:3003/api/downtime')
//   const data = await res.json()
//   return data
// }
// const fetcher2 = async () => {
//   const res = await fetch('http://192.168.10.75:3003/api/downtime-1')
//   const data = await res.json()
//   return data
// }
// const fetcher3 = async () => {
//   const res = await fetch('http://192.168.10.75:3003/api/downtime-3')
//   const data = await res.json()
//   return data
// }

// export default function ChartDowntime() {
//   const canvasEl = useRef(null);
//   const [dashboard, setDashboard] = useState(null);

//   const colors = {
//     red: {
//       default: "rgba(255, 0, 0, 1)",
//       half: "rgba(255, 0, 0, 0.4)",
//       quarter: "rgba(255, 0, 0, 0.2)",
//       zero: "rgba(255, 0, 0, 0)",
//     },
//     indigo: {
//       default: "rgba(80, 102, 120, 1)",
//       quarter: "rgba(80, 102, 120, 0.25)",
//     },
//   };

//   useEffect(() => {
//     async function fetchdashboard() {
//       const res = await fetch("http://192.168.10.75:3003/api/downtime");
//       const data = await res.json();
//       setDashboard(data);
//     }
//     fetchdashboard();
//   }, []);

//   useEffect(() => {
//     const ctx = canvasEl.current.getContext("2d");

//     const gradient = ctx.createLinearGradient(0, 16, 0, 600);
//     gradient.addColorStop(0, colors.red.half);
//     gradient.addColorStop(0.65, colors.red.quarter);
//     gradient.addColorStop(1, colors.red.zero);

//     const weight = [
//       // {dashboard.total_downtime},
//       2100, 2000, 1992,
//     ];

//     const labels = ["Bulan 7", "Bulan 8", "Bulan 9"];
//     const data = {
//       labels: labels,
//       datasets: [
//         {
//           backgroundColor: gradient,
//           label: "downtime 2023",
//           data: weight,
//           fill: true,
//           borderWidth: 2,
//           borderColor: colors.red.default,
//           lineTension: 0.2,
//           pointBackgroundColor: colors.red.default,
//           pointRadius: 3,
//         },
//       ],
//     };
//     const config = {
//       type: "line",
//       data: data,
//     };
//     const myLineChart = new Chart(ctx, config);
//   }, []);

//   // return function cleanup() {
//   //   myLineChart.destroy();
//   // };

//   return (
//     <div className="App text-center">
//       <span className="capitalize"></span>
//       <canvas id="myChart" ref={canvasEl} />
//     </div>
//   );
// }
