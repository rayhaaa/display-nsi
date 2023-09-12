import React from "react";
import { Bebas_Neue } from "next/font/google";
import ComponentBulan from "../ComponentBulan";
import Link from "next/link";

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
          </div>
          <div className="flex flex-col bg-[#d9d9d9] gap-7 w-full h-full rounded-lg p-7 m-5 text-center">
            <div className="flex flex-row h-full gap-10">
              <Link href="../Marketing/pageMarketing2">
                <div className="w-full h-full">
                  <ComponentBulan bulan="Januari" />
                </div>
              </Link>
              <div className="w-full h-full">
                <ComponentBulan bulan="Februari" />
              </div>
              <div className="w-full h-full">
                <ComponentBulan bulan="Maret" />
              </div>
              <div className="w-full h-full">
                <ComponentBulan bulan="April" />
              </div>
            </div>
            <div className="flex flex-row h-full gap-10">
              <div className="w-full h-full">
                <ComponentBulan bulan="Mei" />
              </div>
              <div className="w-full h-full">
                <ComponentBulan bulan="Juni" />
              </div>
              <div className="w-full h-full">
                <ComponentBulan bulan="Juli" />
              </div>
              <div className="w-full h-full">
                <ComponentBulan bulan="Agustus" />
              </div>
            </div>
            <div className="flex flex-row h-full gap-10">
              <div className="w-full h-full">
                <ComponentBulan bulan="September" />
              </div>
              <div className="w-full h-full">
                <ComponentBulan bulan="Oktober" />
              </div>
              <div className="w-full h-full">
                <ComponentBulan bulan="November" />
              </div>
              <div className="w-full h-full">
                <ComponentBulan bulan="Desember" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
