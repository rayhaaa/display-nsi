"use client";

import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

// async function getDataMachines() {
//   const res = await fetch(`http://192.168.10.75:3003/data-downtime`, {
//     next: {
//       revalidate: 0,
//     },
//   });
//   // console.log(res)
//   return res.json();
// }

// export default async function ChartDowntime() {
export default function ChartDowntime() {
  const canvasEl = useRef(null);
//   const data = await getDataMachines();

//   Object.keys(kompil).forEach((key) => {
//     let data = kompil[key];
//     let dateObject = new Date(data.start);
//     let tgl = dateObject.getDate();
//     let bln = monthArr[dateObject.getMonth()];
//     let thn = dateObject.getFullYear();
//     kompil[key].start = `${tgl} ${bln} ${thn}`;
//   });

  const colors = {
    red: {
      default: "rgba(255, 0, 0, 1)",
      half: "rgba(255, 0, 0, 0.4)",
      quarter: "rgba(255, 0, 0, 0.2)",
      zero: "rgba(255, 0, 0, 0)",
    },
    indigo: {
      default: "rgba(80, 102, 120, 1)",
      quarter: "rgba(80, 102, 120, 0.25)",
    },
  };

  useEffect(() => {
    const ctx = canvasEl.current.getContext("2d");
    // const ctx = document.getElementById("myChart");

    const gradient = ctx.createLinearGradient(0, 16, 0, 600);
    gradient.addColorStop(0, colors.red.half);
    gradient.addColorStop(0.65, colors.red.quarter);
    gradient.addColorStop(1, colors.red.zero);

    const weight = [
      2000, 2000, 1992, 1900, 1982, 2056, 1858, 1801, 1864, 1907, 2067, 1848,
    ];

    const labels = [
      "Bulan 1",
      "Bulan 2",
      "Bulan 3",
      "Bulan 4",
      "Bulan 5",
      "Bulan 6",
      "Bulan 7",
      "Bulan 8",
      "Bulan 9",
      "Bulan 10",
      "Bulan 11",
      "Bulan 12",
    ];
    const data = {
      labels: labels,
      datasets: [
        {
          backgroundColor: gradient,
          label: "downtime 2023",
          data: weight,
          fill: true,
          borderWidth: 2,
          borderColor: colors.red.default,
          lineTension: 0.2,
          pointBackgroundColor: colors.red.default,
          pointRadius: 3,
        },
      ],
    };
    const config = {
      type: "line",
      data: data,
    };
    const myLineChart = new Chart(ctx, config);

    return function cleanup() {
      myLineChart.destroy();
    };
  });

  return (
    <div className="App text-center">
      <span className="capitalize"></span>
      <canvas id="myChart" ref={canvasEl} height="100" />
    </div>
  );
}
