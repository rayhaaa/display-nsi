import React from "react";

export default async function ComponentBulan(props) {
  return (
    <>
      <div className="flex flex-col w-full h-full bg-[#FAF1E4] p-4 rounded-xl">
        <div className="h-4/5 rounded-xl p-9 bg-[#BB2525] text-[45px]">persentase</div>
        <div className="h-1/5 text-[35px] py-3">{props.bulan}</div>
      </div>
    </>
  );
}
