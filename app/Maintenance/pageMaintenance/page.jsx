import Link from "next/link";
import React from "react";

async function getDataMachines() {
  const res = await fetch(`http://192.168.10.75:3003/data-downtime`, {
    next: {
      revalidate: 0,
    },
  });
  // console.log(res)
  return res.json();
}
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
  let kompil = machines.payload.data;
  // console.log(kompil);

  Object.keys(kompil).forEach((key) => {
    let data = kompil[key];
    let dateObject = new Date(data.start);
    let tgl = dateObject.getDate();
    let bln = monthArr[dateObject.getMonth()];
    let thn = dateObject.getFullYear();
    kompil[key].start = `${tgl} ${bln} ${thn}`;
  });

  let now = new Date();
  let day = now.getDate();
  let month = now.getMonth();
  let bulan = `${monthArr[month]}`;
  let year = now.getFullYear();
  let dayDate = `${day} ${bulan} ${year}`;
  return (
    <div className="flex flex-col items-center p-7 w-[1600px] h-[1200px] bg-[#ffffff]">
      <Link href={"/"}>
        <button className=" bg-slate-300 p-2 rounded-md col-span-1">
          home
        </button>
      </Link>
      <div className="text-[30px] ">DISPLAY ALL DEPARTMENT</div>
      <div className="text-[25px]">{dayDate}</div>
      <br></br>
      {/* <div className="grid grid-cols-3 p-3"> */}
      {/*         
        <div className="text-[25px] ml-20 mt-0  w-full col-span-2">
          DISPLAY ALL DEPARTMENT
        </div>
      </div>
      <div className="text-[20px] text-center w-full">{dayDate}</div>
      <br></br> */}
      <div className="flex flex-row bg-[#D9D9D9] p-7 mt-5 gap-7 rounded-lg w-full">
        <div className="basis-1/3 bg-[#9AAD8E] rounded-lg">chart</div>
        <div className="basis-2/3 bg-[#FAF1E4] rounded-lg p-7">
          <div>
            <div className="text-center text-[30px]">Tabel Mesin Rusak</div>
            {/* <div> */}
              <table
                className="table-auto text-[20px] text-center bg-white rounded-lg mt-5 p-3 w-full overflow-scroll block"
                style={{ height: "750px" }}
              >
                <thead>
                  <th className="border border-gray-600">No.</th>
                  <th className="border border-gray-600">No. Mesin</th>
                  <th className="border border-gray-600">Tanggal Kerusakan</th>
                  <th className="border border-gray-600">Status Aktivitas</th>
                  <th className="border border-gray-600">Status Mesin</th>
                  <th className="border border-gray-600">PIC</th>
                  <th className="border border-gray-600">Total Downtime</th>
                </thead>
                <tbody>
                  {kompil.map((kompilasi) => {
                    {
                      console.log(kompilasi);
                    }
                    <tr key={kompilasi.id}>
                      <td className="border border-gray-600">{kompilasi.id}</td>
                      <td className="border border-gray-600">
                        {kompilasi.no_mesin}
                      </td>
                      <td className="border border-gray-600">
                        {kompilasi.tgl_kerusakan}
                      </td>
                      <td className="border border-gray-600">
                        {kompilasi.status_aktivitas}
                      </td>
                      <td className="border border-gray-600">
                        {kompilasi.status_mesin}
                      </td>
                      <td className="border border-gray-600">
                        {kompilasi.pic}
                      </td>
                      <td className="border border-gray-600">
                        {kompilasi.total_downtime}
                      </td>
                    </tr>;
                  })}
                </tbody>
              </table>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}
