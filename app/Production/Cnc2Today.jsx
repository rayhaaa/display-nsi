import React from "react";

async function getDataCnc2Today(line) {
  let res = await fetch(`http://192.168.10.75:3004/api/line-2`, {
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
  let cnc2Data = await getDataCnc2Today();
  let dataApi = cnc2Data.payload.data;
  let data = dataApi.map((d) => ({
    ...d,
    // percen: (d.aktual / d.target) * 100,
  }));

  return data;
}

export default async function Cnc2Today(props) {
  let data = await dataApi(props.line);
  return (
    <>
      <div className="overflow-y-auto h-[650px]">
        {data.map((d) => (
          <div
            key={d.id}
            className="flex flex-row text-center rounded-lg w-full bg-[#ADBDC3] text-[40px] m-3"
          >
            <div className="w-full">{d.mcn}</div>
            <div className="w-full">{d.itemCode}</div>
            <div className="w-full">{d.planQty}</div>
            <div
              className={`w-full ${
                d.percen < 80 ? "bg-[#BB2525]" : "bg-[#1A5D1A]"
              }`}
            >
              {d.percen.toFixed(2)}%
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
