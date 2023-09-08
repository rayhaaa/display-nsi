import { Bebas_Neue } from "next/font/google";
import React from "react";
import DataMesinProduksi from "../DataMesinProduksi";

const bebas_neue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  // style: "normal",
});

export default async function halMtc() {
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
      <div className="flex flex-col items-center p-7 w-[1600px] h-[1200px] bg-[#ffffff]">
        <div className="col w-full h-[150px] flex justify-center items-center">
          <div className="text-center">
            <div className={bebas_neue.className}>
              <p className=" text-[64px]">DASHBOARD CONTROL MANUFACTURING</p>
              <p className=" text-[48px]">{dayDate}</p>
            </div>
          </div>
        </div>
        <div className="bg-[#d9d9d9] w-full h-full rounded-lg p-5 m-5">
          <div className={bebas_neue.className}>
            <div className="text-[40px] text-center uppercase">
              daftar mesin produksi
            </div>
            <div className=" m-5">
              <div className="flex flex-row capitalize rounded-md p-3 bg-[#4A503D] text-white text-[35px] text-center">
                <div className="w-full">Nama Mesin</div>
                <div className="w-full">Grup Mesin</div>
                <div className="w-full">Plan Quantity</div>
                <div className="w-full">Receive Quantity</div>
                <div className="w-full">Percen</div>
              </div>
              <div className="overflow-y-auto h-[750px]">
                <DataMesinProduksi
                  namaMesin="mesin1"
                  grupMesin="CNC line 2"
                  planQty="2000"
                  receiveQty="1944"
                  percen="98%"
                />
                <DataMesinProduksi
                  namaMesin="mesin1"
                  grupMesin="CNC line 2"
                  planQty="2000"
                  receiveQty="1944"
                  percen="69%"
                />

                <DataMesinProduksi
                  namaMesin="mesin1"
                  grupMesin="CNC line 2"
                  planQty="2000"
                  receiveQty="1944"
                  percen="94%"
                />
                <DataMesinProduksi
                  namaMesin="mesin1"
                  grupMesin="CNC line 2"
                  planQty="2000"
                  receiveQty="1944"
                  percen="49%"
                />
                <DataMesinProduksi
                  namaMesin="mesin1"
                  grupMesin="CNC line 2"
                  planQty="2000"
                  receiveQty="1944"
                  percen="53%"
                />
                <DataMesinProduksi
                  namaMesin="mesin1"
                  grupMesin="CNC line 2"
                  planQty="2000"
                  receiveQty="1944"
                  percen="78%"
                />
                <DataMesinProduksi
                  namaMesin="mesin1"
                  grupMesin="CNC line 2"
                  planQty="2000"
                  receiveQty="1944"
                  percen="68%"
                />
                <DataMesinProduksi
                  namaMesin="mesin1"
                  grupMesin="CNC line 2"
                  planQty="2000"
                  receiveQty="1944"
                  percen="53%"
                />
                <DataMesinProduksi
                  namaMesin="mesin1"
                  grupMesin="CNC line 3"
                  planQty="2000"
                  receiveQty="1944"
                  percen="78%"
                />
                <DataMesinProduksi
                  namaMesin="mesin1"
                  grupMesin="CNC line 3"
                  planQty="2000"
                  receiveQty="1944"
                  percen="68%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
