import React from "react";

// async function getProductionsData(line) {
//   let res = await fetch(`http://192.168.10.75:3004/api/${line}`, {
//     next: {
//       revalidate: 0,
//     },
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

export default async function HistoryProduction(props) {
//   let dataApi = await getProductionsData(props.line);
//   let data = dataApi.payload.data;
  return (
    <>
      <div className="flex flex-row bg-[#ADBDC3] w-full text-[35px] text-center rounded-xl m-3">
        <div className={`w-full`}>
          {props.cam}%
        </div>
        <div className="w-full">{props.cnc1}%</div>
        <div className="w-full">{props.cnc2}%</div>
        <div className="w-full">{props.cnc3}%</div>
        <div className="w-full">{props.tanggal}</div>
      </div>
      {/* </div>
      </div> */}
      {/* <div className={`card rounded-xl p-7 text-center my-8 
                                ${data.percen < 80
                                    ? "bg-[#BB2525]"
                                    : "bg-[#1A5D1A]"
                                } w-full`}>
          {props.cam}%
        </div> */}
    </>
  );
}
