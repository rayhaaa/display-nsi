import React from "react";

async function getDataMachines() {
  const res = await fetch(`http://192.168.10.75:3003/api/data-downtime`, {
    next: {
      revalidate: 0,
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  
  return res.json();
}

async function dataApis() {
  let mtcData = await getDataMachines();
  let dataApi = mtcData.payload.data;
  let data = dataApi.map((d) => ({
    ...d,
  }));

  return data;
}

export default async function DataMesinRusak() {
  const machine = await dataApis();
  return (
    <>
      {machine.map((d) => (
        <div key={d.id} className="text-center my-3 ">
          <div className="flex flex-row text-[35px] bg-[#D9D9D9] rounded-xl border">
            <div className="w-full">{d.no_mesin}</div>
            <div className="w-full">{d.status_aktifitas}</div>
            <div className="w-full">{d.tgl_kerusakan}</div>
            <div className="w-full">{d.total_downtime} jam</div>
          </div>
        </div>
      ))}
    </>
  );
}
