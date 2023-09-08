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
    // <main className="flex min-h-screen flex-col items-center justify-between p-10"></main>
    <main className="flex flex-col items-center p-7 w-[1600px] h-[1200px] bg-[#ffffff]">
      <div className={`text-[30px] font-bold {bebas_neue}`}>DISPLAY ALL DEPARTMENT</div>
      <div className="text-[25px] font-bold">{dayDate}</div>
      <br></br>
      <br></br>
      <div className="flex flex-row w-full h-full gap-7 text-center">
        <div className="basis-1/4  bg-[#D9D9D9]"><DisplayProd /></div>
        <div className="basis-1/4  bg-[#D9D9D9]"><DisplayMtc /></div>
        <div className="flex flex-col basis-1/2 h-full gap-5">
          <div className="basis-2/3  bg-[#D9D9D9]"><DisplayQc/></div>
          <div className="basis-1/3  bg-[#D9D9D9]">marketing</div>
        </div>
      </div>
    </main>
  );
}
