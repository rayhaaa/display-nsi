import React from "react";

export default async function DataJualBulanan(props) {
  return (
    <>
      <div className="text-center my-3 ">
        <div className="flex flex-row text-[35px] bg-[#9AAD8E] rounded-xl">
          <div className="w-full">{props.customer}</div>
          <div className="w-full">{props.targetbeli}</div>
          <div className="w-full">{props.totalbeli}</div>
          <div className="w-full">{props.persen}</div>
        </div>
      </div>
    </>
  );
}
