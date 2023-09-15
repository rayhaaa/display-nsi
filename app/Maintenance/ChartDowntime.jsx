'use client'

import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

export default function ChartDowntime() {
  const canvasEl = useRef(null);
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

  const [months, setMonths] = useState([])
  const [downtime, setDowntime] = useState([])

  async function getDowntime() {
    try {
      const res = await fetch('http://192.168.10.75:3003/api/history-downtime');
      const resCurrentDt = await fetch('http://192.168.10.75:3003/api/downtime');
      if ((!res.ok) || (!resCurrentDt.ok)) {
        throw new Error('Failed to fetch data');
      }
      const dataApiCurrentDt = await resCurrentDt.json()
      const dataApi = await res.json();

      const dataCurrentDt = dataApiCurrentDt.payload.data
      const dataDt = dataApi.payload.data;

      const currentMonth = dataCurrentDt.bulan_downtime
      const currentDt = dataCurrentDt.total_downtime

      const months = dataDt.map(item => item.bulan_downtime);
      const downtime = dataDt.map(item => item.total_downtime);

      months.reverse()
      downtime.reverse()

      months.push(currentMonth)
      downtime.push(currentDt)

      setMonths(months);
      setDowntime(downtime);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getDowntime()
  }, [])

  useEffect(() => {
    const ctx = canvasEl.current.getContext("2d");

    const gradient = ctx.createLinearGradient(0, 16, 0, 600);
    gradient.addColorStop(0, colors.red.half);
    gradient.addColorStop(0.65, colors.red.quarter);
    gradient.addColorStop(1, colors.red.zero);

    const dataChart = {
      labels: months,
      datasets: [
        {
          backgroundColor: gradient,
          label: "downtime",
          data: downtime,
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
      data: dataChart,
    };

    const myLineChart =  new Chart(ctx, config);

    return function cleanup() {
      myLineChart.destroy();
    };
  }, [months, downtime])

  return (
    <div className="App text-center">
      <span className="capitalize"></span>
      <canvas id="myChart" ref={canvasEl} height="100" />
    </div>
  );
}
