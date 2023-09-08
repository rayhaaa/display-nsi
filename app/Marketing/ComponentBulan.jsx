import React from "react";

export default async function ComponentBulan(props) {
  return (
    <>
      <div className="">
        <div className=" rounded-xl m-5 bg-[#BB2525] text-[35px] p-7">persentase</div>
        <div className="text-[30px]">{props.bulan}</div>
      </div>
    </>
  );
}
