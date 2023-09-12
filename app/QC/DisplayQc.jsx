import React from "react";
import OQCData from "./OQCData";
import IPQCData from "./IPQCData";

export default async function DisplayQc() {
  return (
    <>
      <div className="text-center mt-5 text-[30px] font-bold">QUALITY CONTROL (QC)</div>
        <div className="flex flex-row p-7 gap-5">
          <div className="basis-1/2 rounded-lg bg-[#9AAD8E] p-5 ">
            <OQCData />
          </div>
          <div className="basis-1/2 rounded-lg bg-[#9AAD8E] p-5">
            <IPQCData />
          </div>
        </div>

    </>
  );
}
