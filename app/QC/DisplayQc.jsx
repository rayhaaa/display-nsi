import React from "react";
import OQCData from "./OQCData";
import IPQCData from "./IPQCData";
import Link from "next/link";

export default async function DisplayQc() {
  return (
    <>
      <div className="text-center mt-5 text-[40px]"> CLAIM QC</div>
      <div className="flex flex-row p-7 gap-5">
        <div className="basis-1/2 rounded-lg bg-[#A5A3A3] p-5 ">
          <Link href="../QC/pageQC">
            <OQCData />
          </Link>
        </div>
        <div className="basis-1/2 rounded-lg bg-[#A5A3A3] p-5">
          <Link href="../QC/pageQC">
            <IPQCData />
          </Link>
        </div>
      </div>
    </>
  );
}
