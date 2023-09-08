import React from "react";

export default async function DataMesinRusak(props) {
  return (
    <>
      <div className="text-center my-3 ">
        <div className="flex flex-row text-[35px] bg-[#D9D9D9] rounded-xl border">
          <div className="basis-1/4">{props.partnum}</div>
          <div className="basis-1/4">{props.stataktv}</div>
          <div className="basis-1/4">{props.pic}</div>
          <div className="basis-1/4">{props.totaldt}</div>
        </div>
      </div>
    </>
  );
}
