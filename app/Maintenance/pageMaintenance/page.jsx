import Link from "next/link";
import React from "react";
import { Bebas_Neue } from "next/font/google";
import ChartDowntime from "../ChartDowntime";
import DataMesinRusak from "../DataMesinRusak";

async function getDataMachines() {
  const res = await fetch(`http://192.168.10.75:3003/api/data-downtime`, {
    next: {
      revalidate: 0,
    },
  });
  // console.log(res)
  return res.json();
}

const bebas_neue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  // style: "normal",
});

export default async function halMtc() {
  const machines = await getDataMachines();
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
  // let kompil = machines.payload.data;
  // console.log(kompil);

  // Object.keys(kompil).forEach((key) => {
  //   let data = kompil[key];
  //   let dateObject = new Date(data.start);
  //   let tgl = dateObject.getDate();
  //   let bln = monthArr[dateObject.getMonth()];
  //   let thn = dateObject.getFullYear();
  //   kompil[key].start = `${tgl} ${bln} ${thn}`;
  // });

  let now = new Date();
  let day = now.getDate();
  let month = now.getMonth();
  let bulan = `${monthArr[month]}`;
  let year = now.getFullYear();
  let dayDate = `${day} ${bulan} ${year}`;
  return (
    <>
      <div className="flex flex-col items-center p-7 w-[1600px] h-[1200px] bg-[#ffffff]">
        <div className="col w-full h-[150px] flex justify-center items-center">
          <div className="text-center">
            <div className={bebas_neue.className}>
              <p className=" text-[64px]">DASHBOARD CONTROL MANUFACTURING</p>
              <p className=" text-[48px]">{dayDate}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-full w-full bg-[#D9D9D9] p-7 m-5 gap-7 rounded-xl ">
          <div className=" bg-[#ffffff] rounded-lg p-3">
            <div className={bebas_neue.className}>
              <div className="text-center text-[40px]">daftar Mesin Rusak</div>
              <div className="flex flex-row capitalize rounded-xl p-1 bg-[#A5A3A3] text-white text-[35px] text-center">
                <div className="w-full">No Mesin</div>
                <div className="w-full">Status Mesin</div>
                <div className="w-full">PIC</div>
                <div className="w-full">total downtime</div>
              </div>
              <div className="overflow-y-auto h-[230px] ">
                <DataMesinRusak
                  partnum="KST 003"
                  stataktv="stop"
                  pic="Lintang"
                  totaldt="4 jam"
                />
                <DataMesinRusak
                  partnum="KSS 001"
                  stataktv="waiting sparepart"
                  pic="bayu"
                  totaldt="4 jam"
                />
                <DataMesinRusak
                  partnum="CG 008"
                  stataktv="on repair"
                  pic="lintang"
                  totaldt="2725 jam"
                />
                <DataMesinRusak
                  partnum="CG 012A"
                  stataktv="waiting sparepart"
                  pic="DEDE"
                  totaldt="0 jam"
                />
                <DataMesinRusak
                  partnum="BUFFING 001"
                  stataktv="waiting sparepart"
                  pic="anon"
                  totaldt="18 jam"
                />
                {/* <div className="p-5 ">
                <div className="capitalize rounded-lg w-full text-center bg-[#D9D9D9] text-[35px]">
                  part number - status aktivitas - person in charge - total
                  downtime
                </div>
                <div className="capitalize rounded-lg mt-5 w-full text-center bg-[#D9D9D9] text-[35px]">
                  part number - status aktivitas - person in charge - total
                  downtime
                </div>
                <div className="capitalize rounded-lg mt-5 w-full text-center bg-[#D9D9D9] text-[35px]">
                  part number - status aktivitas - person in charge - total
                  downtime
                </div>
                <div className="capitalize rounded-lg mt-5 w-full text-center bg-[#D9D9D9] text-[35px]">
                  part number - status aktivitas - person in charge - total
                  downtime
                </div>
                <div className="capitalize rounded-lg mt-5 w-full text-center bg-[#D9D9D9] text-[35px]">
                  part number - status aktivitas - person in charge - total
                  downtime
                </div>
                <div className="capitalize rounded-lg mt-5 w-full text-center bg-[#D9D9D9] text-[35px]">
                  part number - status aktivitas - person in charge - total
                  downtime
                </div>
              </div> */}
              </div>
            </div>
          </div>
          <div className=" bg-[#ffffff] rounded-lg p-3">
            <ChartDowntime />
          </div>
        </div>
      </div>
    </>
  );
}
