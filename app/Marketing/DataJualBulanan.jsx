import React from "react";

export default async function DataJualBulanan(props) {
  return (
    <>
      <div className="text-center my-3 ">
        <div className="flex flex-row text-[35px] bg-[#9AAD8E] rounded-xl">
          <div className="w-full">{props.customer}</div>
          <div className="w-full">{props.targetbeli}</div>
          <div className="w-full">{props.totalbeli}</div>
          <div
            className={`${
              props.persen < 90 ? "bg-[#BB2525]" : "bg-[#1A5D1A]"
            } w-full`}
          >
            {props.persen}
          </div>
        </div>
      </div>
    </>
  );
}
