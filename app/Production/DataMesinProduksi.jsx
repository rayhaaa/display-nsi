import React from "react";

export default async function DataMesinProduksi(props) {
  return (
    <>
      <div className="text-center  my-5">
        <div className="flex flex-row text-[40px] p-3 bg-[#8E9775] rounded-xl">
          <div className="w-full h-full">{props.namaMesin}</div>
          <div className="w-full h-full">{props.grupMesin}</div>
          <div className="w-full h-full">{props.planQty}</div>
          <div className="w-full h-full">{props.receiveQty}</div>
          <div className="w-full h-full">{props.percen}</div>
        </div>
      </div>
    </>
  );
}
