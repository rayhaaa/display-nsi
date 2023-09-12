import React from "react";

async function getOQCData() {
  const res = await fetch("http://192.168.10.75:3002/report-oqc", {
    next: {
      revalidate: 0,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function dataApi() {
  let oqcData = await getOQCData();
  let dataApi = oqcData.payload.data;
  let data = dataApi.map((d) => ({
    ...d,
    percen: (d.aktual / d.target) * 100,
  }));

  return data;
}

export default async function OQCData() {
  let data = await dataApi();
  return (
    <>
      <h1 className="text-center text-[35px]">OQC</h1>
      {data.map((d) => (
        <div
          key={d.id}
          className={`card  rounded-lg text-center my-2 p-1
                                                ${
                                                  d.percen > 100
                                                    ? "bg-[#BB2525]"
                                                    : "bg-[#1A5D1A]"
                                                }`}
        >
          <p className="text-white text-[35px]">{d.section}</p>
          <p className="text-white text-[50px]">{d.percen.toFixed(2)}%</p>
        </div>
      ))}
    </>
  );
}
