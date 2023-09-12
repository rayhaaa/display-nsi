import React from "react";
import DowntimeData from "./DowntimeData";
import Link from "next/link";

export default async function DisplayMtc() {
  return (
    <>
      <div className="text-center mt-5 text-[40px] font-bold">DOWNTIME</div>
      <div className="text-center text-[40px] font-bold">MESIN RUSAK</div>
      <div className="mt-5">
        <Link href="../Maintenance/pageMaintenance">
          <DowntimeData url="downtime" bulan="0" />
        </Link>
        <Link href="../Maintenance/pageMaintenance">
          <DowntimeData url="downtime-1" bulan="1" />
        </Link>
        <Link href="../Maintenance/pageMaintenance">
          <DowntimeData url="downtime-2" bulan="2" />
        </Link>
      </div>
    </>
  );
}
