import React from "react";
import { Bebas_Neue } from "next/font/google";
import ComponentBulan from "../ComponentBulan";

const bebas_neue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  // style: "normal",
});

export default async function halMtc() {
  //   const machines = await getProductionsData();
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
        <div className="flex flex-col items-center p-7 w-[1600px] h-[1200px] bg-[#ffffff]">
          <div className="col w-full h-[150px] flex justify-center items-center">
            <div className="text-center">
              <p className=" text-[64px]">DASHBOARD CONTROL MANUFACTURING</p>
              <p className=" text-[48px]">{dayDate}</p>
            </div>
            {/* </div> */}
          </div>
          <div className="bg-[#d9d9d9] w-full h-full rounded-lg p-5 m-5 text-center">
            <div className="flex flex-row w-full m-5 gap-5 ">
              <div className="w-full m-5 gap-5 bg-[#ffffff] rounded-xl">
                <ComponentBulan bulan="Januari" />
              </div>
              <div className="w-full m-3 gap-5 bg-[#ffffff] rounded-xl">
                <ComponentBulan bulan="Januari" />
              </div>
              <div className="w-full m-5 gap-5 bg-[#ffffff] rounded-xl">
                <ComponentBulan bulan="Januari" />
              </div>
              <div className="w-full m-5 gap-5 bg-[#ffffff] rounded-xl">
                <ComponentBulan bulan="Januari" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
