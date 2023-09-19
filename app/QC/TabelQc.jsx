"use client";
import React, { useEffect, useState } from "react";

// async function getOqcData(line) {
//   let res = await fetch(`http://192.168.10.75:3002/report-oqc`, {
//     next: {
//       revalidate: 0,
//     },
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }
// async function dataApisO() {
//   let ipqcData = await getOqcData();
//   let dataApi = ipqcData.payload.data;
//   let data = dataApi.map((d) => ({
//     ...d,
//   }));

//   return data;
// }

// async function getIpqcData(line) {
//   let res = await fetch(`http://192.168.10.75:3002/report-ipqc`, {
//     next: {
//       revalidate: 0,
//     },
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

// async function dataApisIp() {
//   let ipqcData = await getIpqcData();
//   let dataApi = ipqcData.payload.data;
//   let data = dataApi.map((d) => ({
//     ...d,
//   }));

//   return data;
// }

// export default async function TabelQc() {
//   const data1 = dataApisO;
//   // const data2 = await dataApisIp;

//   return (
//     <>
//       {data1.map((d) => (
//         <div key={d.id}>
// <table className="table-auto w-full h-full">
//   <thead className="text-[30px]">
//     <th className="border border-gray-600"></th>
//     <th className="border border-gray-600" colSpan="2">
//       OQC
//     </th>
//     <th className="border border-gray-600" colSpan="2">
//       IPQC
//     </th>
//   </thead>
//   <tbody>
//     <tr className="text-[40px]">
//       <td className="border border-gray-600"></td>
//       <td className="border border-gray-600">Target</td>
//       <td className="border border-gray-600">Aktual</td>
//       <td className="border border-gray-600">Target</td>
//       <td className="border border-gray-600">Aktual</td>
//     </tr>
//     <tr className="text-[45px]">
//       <td className="border border-gray-600">CAM</td>
//       <td className="border border-gray-600">6</td>
//       <td className="border border-gray-600">3</td>
//       <td className="border border-gray-600">7</td>
//       <td className="border border-gray-600">0</td>
//     </tr>
//     <tr className="text-[45px]">
//       <td className="border border-gray-600">CNC</td>
//       <td className="border border-gray-600">12</td>
//       <td className="border border-gray-600">4</td>
//       <td className="border border-gray-600">6</td>
//       <td className="border border-gray-600">9</td>
//     </tr>
//     <tr className="text-[45px] ">
//       <td className="border border-gray-600">MFG</td>
//       <td className="border border-gray-600">5</td>
//       <td className="border border-gray-600">1</td>
//       <td className="border border-gray-600">5</td>
//       <td className="border border-gray-600">0</td>
//     </tr>
//   </tbody>
// </table>
//         </div>
//       ))}
//     </>
//   );
// }

const TabelQc = () => {
  // useEffect(() => {
  //   fetch("http://192.168.10.75:3002/report-oqc")
  //     .then((res) => res.json())
  //     .then((json) => setFillers(json))
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);
  const [fillers, setFillers] = useState([]);

  const fetchData = async () => {
    const res = await fetch(`http://192.168.10.75:3002/report-oqc`);
    const dataApi = await res.json();
    let data = dataApi.payload.data;
    setFillers(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <table className="table-auto w-full h-full">
        <thead className="text-[30px]">
          <th className="border border-gray-600"></th>
          <th className="border border-gray-600 w-full" colSpan="2">
            OQC
          </th>
          <th className="border border-gray-600 w-full" colSpan="2">
            IPQC
          </th>
          <tr>
            <td className="border border-gray-600 w-full"></td>
            <td className="border border-gray-600 w-full">Target</td>
            <td className="border border-gray-600 w-full">Aktual</td>
            <td className="border border-gray-600 w-full">Target</td>
            <td className="border border-gray-600 w-full">Aktual</td>
          </tr>
        </thead>
        <tbody>
          {fillers.map((filler) => (
            <tr className="text-[45px] w-full" key={filler.id}>
              <td className="border border-gray-600 w-full">
                {filler.section}
              </td>
              <td className="border border-gray-600 w-full">{filler.target}</td>
              <td className="border border-gray-600 w-full">{filler.aktual}</td>
              <td className="border border-gray-600 w-full">7</td>
              <td className="border border-gray-600 w-full">0</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TabelQc;
