import { Bebas_Neue } from "next/font/google";
import React from "react";
import OQCData from "../OQCData";
import IPQCData from "../IPQCData";
import TabelQc from "../TabelQc";
import Arrow from "@/app/Production/Arrow";
import Link from "next/link";

const bebas_neue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  // style: "normal",
});

export default async function halQc() {
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
            <Link href="/">
              <div className="absolute top-7 left-7">
                <Arrow />
              </div>
            </Link>
            <div className="text-center">
              <p className=" text-[64px]">DASHBOARD CONTROL MANUFACTURING</p>
              <p className=" text-[48px]">{dayDate}</p>
            </div>
            </div>
          </div>
          <div className="flex flex-col h-full w-full bg-[#D9D9D9] p-7 m-5 gap-7 rounded-xl">
            <div className="h-full bg-[#ffffff] text-center">
              <TabelQc />
            </div>
            <div className="flex flex-row h-full gap-7 text-center ">
              <div className="text-center w-full h-full bg-[#ffffff] rounded-xl">
                <div className="text-center font-bold text-[30px] uppercase">
                  bulan ini
                </div>
                <div>
                  <div className="flex flex-row p-5 gap-5 ">
                    <div className="w-full rounded-lg bg-[#d9d9d9] p-5 ">
                      <OQCData />
                    </div>
                    <div className="w-full rounded-lg bg-[#d9d9d9] p-5">
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
                    <div className="w-full rounded-xl bg-[#d9d9d9] p-5 ">
                      <OQCData />
                    </div>
                    <div className="w-full rounded-xl bg-[#d9d9d9] p-5">
                      <IPQCData />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
