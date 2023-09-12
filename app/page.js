import DisplayQc from "./QC/DisplayQc";
import DisplayProd from "./Production/DisplayProd";
import DisplayMtc from "./Maintenance/DisplayMtc";
import { Bebas_Neue } from "next/font/google";

const bebas_neue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  style: "normal",
});

export default function Home() {
  var arrMonth = [
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
  let bulan = `${arrMonth[month]}`;
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
          <div className="flex flex-row w-full h-full gap-7 text-center m-7">
            <div className="basis-1/4 bg-[#D9D9D9] rounded-xl">
              <DisplayProd />
            </div>
            <div className="basis-1/4  bg-[#D9D9D9] rounded-xl">
              <DisplayMtc />
            </div>
            <div className="flex flex-col basis-1/2 h-full gap-5">
              <div className="basis-2/3  bg-[#D9D9D9] rounded-xl">
                <DisplayQc />
              </div>
              <div className="basis-2/3  bg-[#D9D9D9] rounded-xl basis-1/3  bg-[#D9D9D9]">marketing</div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
