import { Bebas_Neue } from "next/font/google";
import React from "react";

const bebas_neue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default async function halProd() {
  //   const machines = await getDataMachines();
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
          <div className="bg-[#d9d9d9] w-full h-full rounded-lg text-center p-7 m-5">
            <div className="text-[35px]"> PRODUKSI CNC LINE 3 HARI INI</div>
            <div className="m-5">
                <div className="flex flex-row w-full bg-[#4A503D] text-[35px] text-white rounded-xl">
                    <div className="w-full">No Mesin</div>
                    <div className="w-full">Seri Mesin</div>
                    <div className="w-full">Plan Quantity</div>
                    <div className="w-full">Persentase</div>
                </div>
                <div>
                    
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
