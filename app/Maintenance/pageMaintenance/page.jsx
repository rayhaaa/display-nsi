import React from "react";
import { Bebas_Neue } from "next/font/google";
import ChartDowntime from "../ChartDowntime";
import DataMesinRusak from "../DataMesinRusak";
import Link from "next/link";
import DowntimeMonthly from "../DowntimeMonthly";
import { FaArrowLeft } from "react-icons/fa6";

const bebas_neue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default async function halMtc() {
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
            <div className="flex flex-row ">
              <Link href="javascript:history.back()">
                <div className="absolute top-7 left-7">
                  <FaArrowLeft size={38} />
                </div>
              </Link>
              <div className="text-center">
                <p className=" text-[64px]">DASHBOARD CONTROL MANUFACTURING</p>
                <p className=" text-[48px]">{dayDate}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row h-full w-full bg-[#D9D9D9] p-7 m-5 gap-7 rounded-xl ">
            <div className="basis-1/2 w-full h-full bg-[#ffffff] rounded-lg p-3">
              <div className="text-center text-[40px]">daftar Mesin Rusak</div>
              <div className="flex flex-row capitalize rounded-xl p-1 bg-[#A5A3A3] text-white text-[35px] text-center">
                <div className="w-full">No Mesin</div>
                <div className="w-full">Status</div>
                <div className="w-full">Tgl Rusak</div>
                <div className="w-full">downtime</div>
              </div>
              <div className="overflow-auto h-[730px] ">
                <DataMesinRusak />
              </div>
            </div>
            <div className="flex flex-col basis-1/2 gap-7">
              <div className="overflow-x-auto h-[830px] h-full bg-[#ffffff] rounded-lg p-3">
                <ChartDowntime />
              </div>
              <div className="grid grid-cols-3 gap-3 w-full h-full bg-[#ffffff] rounded-lg p-3">
                <DowntimeMonthly />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
