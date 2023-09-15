import React from "react";

async function getDowntimeMonthly() {
    const res = await fetch('http://192.168.10.75:3003/api/history-downtime', {
        next: {
            revalidate: 0
        }
    })

    if(!res.ok) {
        throw new Error('failed to fetch data')
    }
    return res.json()
}

export default async function DowntimeMonthly() {
  const dataApi = await getDowntimeMonthly();
  const data = dataApi.payload.data;
  return (
    <>
      {data.map((e) => (
        <div
          className={`flex flex-col p-3 rounded-xl text-center ${
            e.total_downtime > 100 ? "bg-[#BB2525]" : "bg-[#1A5D1A]"
          }`}
        >
          <div className="w-full h-full text-white text-[35px]">
            {e.bulan_downtime}
          </div>
          <div className="w-full h-full text-white text-[40px]">
            {e.total_downtime}%
          </div>
        </div>
      ))}
    </>
  );
}
