import React from "react";

export default async function DataMesinRusak(props) {
  return (
    <>
      <div className="text-center my-3 ">
        <div className="flex flex-row text-[35px] bg-[#D9D9D9] rounded-xl border">
          <div className="w-full">{props.partnum}</div>
          <div className="w-full">{props.stataktv}</div>
          <div className="w-full">{props.pic}</div>
          <div className="w-full">{props.totaldt}</div>
        </div>
      </div>
    </>
  );
}
