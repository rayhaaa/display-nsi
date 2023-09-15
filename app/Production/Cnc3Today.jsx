import React from "react";

async function getProductionsData() {
  let res = await fetch(`http://192.168.10.75:3004/api/cnc-3`, {
    next: {
      revalidate: 0,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getDataCnc3Today() {
  let res = await fetch(`http://192.168.10.75:3004/api/line-3`, {
    next: {
      revalidate: 0,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function dataApi() {
  let cnc3Data = await getDataCnc3Today();
  let dataApi = cnc3Data.payload.data;
  let data = dataApi.map((d) => ({
    ...d,
  }));

  return data;
}

export default async function Cnc3Today(props) {
  let data = await dataApi(props.line);
  let data1 = await getProductionsData();
  let persen = data1.payload.data.percen;
  return (
    <>
      {data.length !== 0 ? (
        <div>
          <div className="overflow-y-auto h-[650px]">
            {data.map((d) => (
              <div
                key={d.id}
                className="flex flex-row text-center rounded-lg w-full bg-[#ADBDC3] text-[40px] m-3"
              >
                <div className="w-full">{d.mcn}</div>
                <div className="w-full">{d.receiveQty}</div>
                <div className="w-full">{d.planQty}</div>
                <div
                  className={`w-full ${
                    d.percen < 85 ? "bg-[#BB2525]" : "bg-[#1A5D1A]"
                  }`}
                >
                  {d.percen.toFixed(2)}%
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-row gap-5 justify-end m-5">
            <div className="bg-[#A5A3A3] text-[35px] rounded-lg p-3">
              persentase line cam hari ini
            </div>
            <div
              className={`text-white ${
                persen < 85 ? "bg-[#BB2525]" : "bg-[#1A5D1A]"
              } text-[35px] rounded-lg p-3`}
            >
              {persen.toFixed(2)}%
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="m-7 text-[30px] text-black text-opacity-60">
            \Belum ada inputan/
          </div>
          <br />
        </div>
      )}
    </>
  );
}
