import { Inter ,Anton } from "next/font/google";
import DisplayQc from "./QC/DisplayQc";
import DisplayProd from "./Production/DisplayProd";
import DisplayMtc from "./Maintenance/DisplayMtc";

const inter = Inter({ subsets: ['latin'], weight: ['400'] })

const anton = Anton({
  subsets: ['latin'],
  weight: ['400']
})

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
    <main className="flex flex-col items-center p-7 w-[1600px] h-[1200px] bg-[#ffffff]">
      <div className="col h-full w-full flex items-center justify-center">
        <div className="text-center">
          <div className={anton.className}>
            <p className="text-[48px]">DISPLAY ALL DEPARTMENT</p>
          </div>
          <div className={inter.className}>
            <p className="text-[30px] font-bold">{dayDate}</p>
          </div>
        </div>
      </div>
      <div className="col h-full w-full">
        <div className="flex flex-row w-full h-full gap-7 text-center">
          <div className="basis-1/4  bg-[#D9D9D9]"><DisplayProd /></div>
          <div className="basis-1/4  bg-[#D9D9D9]"><DisplayMtc /></div>
          <div className="flex flex-col basis-1/2 h-full gap-5">
            <div className="basis-2/3  bg-[#D9D9D9]"><DisplayQc/></div>
            <div className="basis-1/3  bg-[#D9D9D9]">marketing</div>
          </div>
        </div>
      </div>
    </main>
  );
}
