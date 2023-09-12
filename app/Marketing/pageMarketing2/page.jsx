import React from "react";
import { Bebas_Neue } from "next/font/google";
import ComponentBulan from "../ComponentBulan";
import DataJualBulanan from "../DataJualBulanan";

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
          {/* div head */}
          <div className="col w-full h-[150px] flex justify-center items-center">
            <div className="text-center">
              <p className=" text-[64px]">DASHBOARD CONTROL MANUFACTURING</p>
              <p className=" text-[48px]">{dayDate}</p>
            </div>
          </div>
          {/* end of div head */}
          {/* div body */}
          <div className="bg-[#d9d9d9] w-full h-full p-5 m-5 rounded-lg">
            <div className="text-center text-[45px]">
              <h1>PENJUALAN BULAN X</h1>
            </div>
              <div className="flex flex-row w-full bg-[#A5A3A3] text-[35px] text-center">
                <div className="w-full">Nama Customer</div>
                <div className="w-full">Target Beli</div>
                <div className="w-full">Total Beli</div>
                <div className="w-full">Persentase</div>
              </div>
            <div className="overflow-y-auto h-[800px]">
              <div className="flex flex-col w-full">
                <div className="w-full">
                  <DataJualBulanan
                    customer="Ihara"
                    targetbeli="USD2222"
                    totalbeli="USD1192"
                    persen="53%"
                  />
                </div>
                <div className="w-full">
                  <DataJualBulanan
                    customer="Patco"
                    targetbeli="USD2345"
                    totalbeli="USD2346"
                    persen="100%"
                  />
                </div>
                <div className="w-full">
                  <DataJualBulanan
                    customer="Kyowa"
                    targetbeli="USD4124"
                    totalbeli="USD1020"
                    persen="23%"
                  />
                </div>
                <div className="w-full">
                  <DataJualBulanan
                    customer="Ihara"
                    targetbeli="USD2222"
                    totalbeli="USD1192"
                    persen="53%"
                  />
                </div>
                <div className="w-full">
                  <DataJualBulanan
                    customer="Patco"
                    targetbeli="USD2345"
                    totalbeli="USD2346"
                    persen="100%"
                  />
                </div>
                <div className="w-full">
                  <DataJualBulanan
                    customer="Kyowa"
                    targetbeli="USD4124"
                    totalbeli="USD1020"
                    persen="23%"
                  />
                </div>
                <div className="w-full">
                  <DataJualBulanan
                    customer="Ihara"
                    targetbeli="USD2222"
                    totalbeli="USD1192"
                    persen="53%"
                  />
                </div>
                <div className="w-full">
                  <DataJualBulanan
                    customer="Patco"
                    targetbeli="USD2345"
                    totalbeli="USD2346"
                    persen="100%"
                  />
                </div>
                <div className="w-full">
                  <DataJualBulanan
                    customer="Kyowa"
                    targetbeli="USD4124"
                    totalbeli="USD1020"
                    persen="23%"
                  />
                </div>
                <div className="w-full">
                  <DataJualBulanan
                    customer="Ihara"
                    targetbeli="USD2222"
                    totalbeli="USD1192"
                    persen="53%"
                  />
                </div>
                <div className="w-full">
                  <DataJualBulanan
                    customer="Patco"
                    targetbeli="USD2345"
                    totalbeli="USD2346"
                    persen="100%"
                  />
                </div>
                <div className="w-full">
                  <DataJualBulanan
                    customer="Kyowa"
                    targetbeli="USD4124"
                    totalbeli="USD1020"
                    persen="23%"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* end of div body */}
        </div>
      </div>
    </>
  );
}
