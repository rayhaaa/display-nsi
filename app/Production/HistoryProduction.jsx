import React from "react";

// async function getProductionsData(line) {
//   let res = await fetch(`http://192.168.10.75:3004/api/line-${line}`, {
//     next: {
//       revalidate: 0,
//     },
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

// async function dataApi() {
//   let prodData = await getProductionsData();
//   let dataApi = prodData.payload.data;
//   let data = dataApi.map((d) => ({
//     ...d,
//   }));

//   return data;
// }

export default async function HistoryProduction(props) {
  // let Data = await dataApi(props.line);
  return (
    <>
      <div className="flex flex-row bg-[#ADBDC3] w-full text-[35px] text-center rounded-xl m-3">
        <div className={`w-full`}>{props.cam}%</div>
        <div className="w-full">{props.cnc1}%</div>
        <div className="w-full">{props.cnc2}%</div>
        <div className="w-full">{props.cnc3}%</div>
        <div className="w-full">{props.tanggal}</div>
      </div>
    </>
  );
}
