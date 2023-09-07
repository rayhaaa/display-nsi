import { Inter, Anton, Bebas_Neue } from "next/font/google";
import DisplayQc from "./QC/DisplayQc";
import DisplayProd from "./Production/DisplayProd";
import DisplayMtc from "./Maintenance/DisplayMtc";

const inter = Inter({ subsets: ['latin'], weight: ['400'] })

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400']
})

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
    <main className="flex flex-col h-[1200px] w-[1600px] p-[50px] bg-[#9DA5EE] gap-[25px]">
      {/* name apps */}
      <div className="col w-full h-[150px] flex justify-center items-center">
        <div className="text-center">
          <div className={bebasNeue.className}>
            <p className=" text-[64px]">DASHBORD CONTROL MANUFACTURING</p>
            <p className=" text-[48px]">{dayDate}</p>
          </div>
        </div>
      </div>

      {/* main layout */}
      <div className="col w-full h-[925px] flex gap-[50px]">

        {/* production */}
        <div className="w-[400px] rounded-[8px] bg-[#D9D9D9] p-[10px] flex flex-col gap-[38px]">
          <div className="col h-[50px]">
            <div className={bebasNeue.className}>
              <div className="text-center">
                <p className="text-[48px]">PRODUCTION</p>
              </div>
            </div>
          </div>
          <div className="col h-full gap-[30px] flex flex-col">
            <div className="col h-full rounded-[6px] bg-[#FF0000] p-[1px]">
              <div className="h-[60px] w-[115px] bg-[#D9D9D9] rounded-[6px]">
                <div className="flex justify-center items-center">
                  <div className={bebasNeue.className}>
                    <p className="text-[48px]">CAM</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className={bebasNeue.className}>
                  <span className="text-stroke">
                    <p className="text-[64px] text-white">0.00 %</p>
                  </span>
                </div>
              </div>
            </div>
            <div className="col h-full rounded-[6px] bg-[#FF0000] p-[1px]">
              <div className="h-[60px] w-[115px] bg-[#D9D9D9] rounded-[6px]">
                <div className="flex justify-center items-center">
                  <div className={bebasNeue.className}>
                    <p className="text-[48px]">CNC 1</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className={bebasNeue.className}>
                  <span className="text-stroke">
                    <p className="text-[64px] text-white">0.00 %</p>
                  </span>
                </div>
              </div>
            </div>
            <div className="col h-full rounded-[6px] bg-[#05A305] p-[1px]">
              <div className="h-[60px] w-[115px] bg-[#D9D9D9] rounded-[6px]">
                <div className="flex justify-center items-center">
                  <div className={bebasNeue.className}>
                    <p className="text-[48px]">CNC 2</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className={bebasNeue.className}>
                  <span className="text-stroke">
                    <p className="text-[64px] text-white">90.00 %</p>
                  </span>
                </div>
              </div>
            </div>
            <div className="col h-full rounded-[6px] bg-[#05A305] p-[1px]">
              <div className="h-[60px] w-[115px] bg-[#D9D9D9] rounded-[6px]">
                <div className="flex justify-center items-center">
                  <div className={bebasNeue.className}>
                    <p className="text-[48px]">CNC 3</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className={bebasNeue.className}>
                  <span className="text-stroke">
                    <p className="text-[64px] text-white">90.99 %</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* maintenance */}
        <div className="w-[450px] rounded-[8px] bg-[#D9D9D9] p-[10px] flex flex-col gap-[38px]">
          <div className="col h-[50px]">
            <div className={bebasNeue.className}>
              <div className="text-center">
                <p className="text-[48px]">MAINTENANCE</p>
              </div>
            </div>
          </div>
          <div className="col h-full gap-[27px] flex flex-col">
            <div className="col h-full border border-[#05A305] rounded-[6px] flex flex-col">
              <div className="col text-center">
                <div className={bebasNeue.className}>
                  <p className="text-[40px]">Bulan Ini</p>
                </div>
              </div>
              <div className="col bg-[#05A305] h-full rounded-[6px] flex justify-center items-center">
                <div className="text-center">
                  <div className={bebasNeue.className}>
                    <span className="text-stroke"><p className="text-[55px]">40.00 %</p></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col h-full border border-[#FF0000] rounded-[6px] flex flex-col">
              <div className="col text-center">
                <div className={bebasNeue.className}>
                  <p className="text-[40px]">1 Bulan Lalu</p>
                </div>
              </div>
              <div className="col bg-[#FF0000] h-full rounded-[6px] flex justify-center items-center">
                <div className="text-center">
                  <div className={bebasNeue.className}>
                    <span className="text-stroke"><p className="text-[55px]">90.00 %</p></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col h-full border border-[#FF0000] rounded-[6px] flex flex-col">
              <div className="col text-center">
                <div className={bebasNeue.className}>
                  <p className="text-[40px]">2 Bulan Lalu</p>
                </div>
              </div>
              <div className="col bg-[#FF0000] h-full rounded-[6px] flex justify-center items-center">
                <div className="text-center">
                  <div className={bebasNeue.className}>
                    <span className="text-stroke"><p className="text-[55px]">90.00 %</p></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* quality & sales */}
        <div className="w-[550px] rounded-[8px] flex flex-col gap-[10px]">

          {/* quality */}
          <div className="col h-[510px] rounded-[8px] bg-[#D9D9D9] p-[10px] flex flex-col gap-[38px]">
            <div className="col h-[50px]">
              <div className={bebasNeue.className}>
                <div className="text-center">
                  <p className="text-[48px]">QUALITY</p>
                </div>
              </div>
            </div>
            <div className="col h-full flex gap-[10px]">
              <div className="basis-1/2 rounded-[4px] h-full border border-black flex flex-col p-[10px] gap-[20px]">
                <div className="col h-[50px]">
                  <div className={bebasNeue.className}>
                    <div className="text-center">
                      <p className="text-[48px]">IPQC</p>
                    </div>
                  </div>
                </div>
                <div className="col h-full flex flex-col gap-[10px]">
                  <div className="col h-full rounded border border-[#05A305] flex flex-row">
                    <div className="basis-1/2 h-full flex justify-center items-center">
                      <div className={bebasNeue.className}>
                        <p className="text-[48px]">CAM</p>
                      </div>
                    </div>
                    <div className="basis-1/2 h-full rounded bg-[#05A305] flex justify-center items-center">
                      <div className={bebasNeue.className}>
                        <span className="text-stroke"><p className="text-[56px]">30 %</p></span>
                      </div>
                    </div>
                  </div>
                  <div className="col h-full rounded border border-[#FF0000] flex flex-row">
                    <div className="basis-1/2 h-full flex justify-center items-center">
                      <div className={bebasNeue.className}>
                        <p className="text-[48px]">CNC</p>
                      </div>
                    </div>
                    <div className="basis-1/2 h-full rounded bg-[#FF0000] flex justify-center items-center">
                      <div className={bebasNeue.className}>
                        <span className="text-stroke"><p className="text-[56px]">30 %</p></span>
                      </div>
                    </div>
                  </div>
                  <div className="col h-full rounded border border-[#05A305] flex flex-row">
                    <div className="basis-1/2 h-full flex justify-center items-center">
                      <div className={bebasNeue.className}>
                        <p className="text-[48px]">MFG2</p>
                      </div>
                    </div>
                    <div className="basis-1/2 h-full rounded bg-[#05A305] flex justify-center items-center">
                      <div className={bebasNeue.className}>
                        <span className="text-stroke"><p className="text-[56px]">30 %</p></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 rounded-[4px] h-full border border-black flex flex-col p-[10px] gap-[20px]">
                <div className="col h-[50px]">
                  <div className={bebasNeue.className}>
                    <div className="text-center">
                      <p className="text-[48px]">OQC</p>
                    </div>
                  </div>
                </div>
                <div className="col h-full flex flex-col gap-[10px]">
                  <div className="col h-full rounded border border-[#05A305] flex flex-row">
                    <div className="basis-1/2 h-full flex justify-center items-center">
                      <div className={bebasNeue.className}>
                        <p className="text-[48px]">CAM</p>
                      </div>
                    </div>
                    <div className="basis-1/2 h-full rounded bg-[#05A305] flex justify-center items-center">
                      <div className={bebasNeue.className}>
                        <span className="text-stroke"><p className="text-[56px]">30 %</p></span>
                      </div>
                    </div>
                  </div>
                  <div className="col h-full rounded border border-[#FF0000] flex flex-row">
                    <div className="basis-1/2 h-full flex justify-center items-center">
                      <div className={bebasNeue.className}>
                        <p className="text-[48px]">CNC</p>
                      </div>
                    </div>
                    <div className="basis-1/2 h-full rounded bg-[#FF0000] flex justify-center items-center">
                      <div className={bebasNeue.className}>
                        <span className="text-stroke"><p className="text-[56px]">30 %</p></span>
                      </div>
                    </div>
                  </div>
                  <div className="col h-full rounded border border-[#05A305] flex flex-row">
                    <div className="basis-1/2 h-full flex justify-center items-center">
                      <div className={bebasNeue.className}>
                        <p className="text-[48px]">MFG2</p>
                      </div>
                    </div>
                    <div className="basis-1/2 h-full rounded bg-[#05A305] flex justify-center items-center">
                      <div className={bebasNeue.className}>
                        <span className="text-stroke"><p className="text-[56px]">30 %</p></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* sales */}
          <div className="col border h-[400px] rounded-[8px]"></div>
        </div>
      </div>
    </main>
  );
}

  // <main className="flex flex-col items-center p-7 w-[1600px] h-[1200px] bg-[#ffffff]">
  //   <div className="col h-full w-full flex items-center justify-center">
  //     <div className="text-center">
  //       <div className={anton.className}>
  //         <p className="text-[48px]">DISPLAY ALL DEPARTMENT</p>
  //       </div>
  //       <div className={inter.className}>
  //         <p className="text-[30px] font-bold">{dayDate}</p>
  //       </div>
  //     </div>
  //   </div>
  //   <div className="col h-full w-full">
  //     <div className="flex flex-row w-full h-full gap-8 text-center">
  //       <div className="basis-1/4  bg-[#D9D9D9] rounded-md">
  //         <DisplayProd />
  //       </div>
  //       <div className="basis-1/4  bg-[#D9D9D9] rounded-md">
  //         <DisplayMtc />
  //       </div>
  //       <div className="flex flex-col basis-1/2 h-full gap-5">
  //         <div className="basis-2/3  bg-[#D9D9D9] rounded-md"><DisplayQc/></div>
  //         <div className="basis-1/3  bg-[#D9D9D9] rounded-md">marketing</div>
  //       </div>
  //     </div>
  //   </div>
  // </main>
