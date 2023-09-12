import { Bebas_Neue } from "next/font/google";
import React from "react";
import OQCData from "../OQCData";
import IPQCData from "../IPQCData";

async function getProductionsData(line) {
  let res = await fetch(`http://192.168.10.75:3004/api/line`, {
    next: {
      revalidate: 0,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const bebas_neue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  // style: "normal",
});

export default async function halMtc() {
  const machines = await getProductionsData();
  var monthArr = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  let now = new Date();
  let day = now.getDate();
  let month = now.getMonth();
  let bulan = `${monthArr[month]}`;
  let year = now.getFullYear();
  let dayDate = `${day} ${bulan} ${year}`;

  return (
    <>
      <div className={bebas_neue.className}>
        <div className="flex flex-col items-center p-8 w-[1600px] h-[1200px] bg-[#ffffff]">
          <div className="col w-full h-[150px] flex justify-center items-center">
            <div className="text-center">
              <p className=" text-[64px]">DASHBOARD CONTROL MANUFACTURING</p>
              <p className=" text-[48px]">{dayDate}</p>
            </div>
          </div>
          <div className="flex flex-col h-full w-full bg-[#D9D9D9]  p-7 gap-7 rounded-xl">
            <div className="h-full bg-[#ffffff] text-center">
              <table className="table-auto w-full h-full">
                <thead className="text-[30px]">
                  <th className="border border-gray-600"></th>
                  <th className="border border-gray-600" colSpan="2">
                    OQC
                  </th>
                  <th className="border border-gray-600" colSpan="2">
                    IPQC
                  </th>
                </thead>
                <tbody>
                  <tr className="text-[40px]">
                    <td className="border border-gray-600"></td>
                    <td className="border border-gray-600">Target</td>
                    <td className="border border-gray-600">Aktual</td>
                    <td className="border border-gray-600">Target</td>
                    <td className="border border-gray-600">Aktual</td>
                  </tr>
                  <tr className="text-[45px]">
                    <td className="border border-gray-600">CAM</td>
                    <td className="border border-gray-600">6</td>
                    <td className="border border-gray-600">3</td>
                    <td className="border border-gray-600">7</td>
                    <td className="border border-gray-600">0</td>
                  </tr>
                  <tr className="text-[45px]">
                    <td className="border border-gray-600">CNC</td>
                    <td className="border border-gray-600">12</td>
                    <td className="border border-gray-600">4</td>
                    <td className="border border-gray-600">6</td>
                    <td className="border border-gray-600">9</td>
                  </tr>
                  <tr className="text-[45px] ">
                    <td className="border border-gray-600">MFG</td>
                    <td className="border border-gray-600">5</td>
                    <td className="border border-gray-600">1</td>
                    <td className="border border-gray-600">5</td>
                    <td className="border border-gray-600">0</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex flex-row h-full gap-7 text-center ">
              <div className="text-center w-full h-full bg-[#ffffff] rounded-xl">
                <div className="text-center font-bold text-[30px] uppercase">
                  bulan ini
                </div>
                <div>
                  <div className="flex flex-row p-5 gap-5 ">
                    <div className="w-full rounded-lg bg-[#A5A3A3] p-5 ">
                      <OQCData />
                    </div>
                    <div className="w-full rounded-lg bg-[#A5A3A3] p-5">
                      <IPQCData />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center w-full h-full bg-[#ffffff] rounded-xl">
                <div className="text-center font-bold text-[30px] uppercase">
                  bulan lalu
                </div>
                <div>
                  <div className="flex flex-row p-5 gap-5 ">
                    <div className="w-full rounded-xl bg-[#A5A3A3] p-5 ">
                      <OQCData />
                    </div>
                    <div className="w-full rounded-xl bg-[#A5A3A3] p-5">
                      <IPQCData />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
