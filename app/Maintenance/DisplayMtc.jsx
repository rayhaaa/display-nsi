import React from "react";
import DowntimeData from "./DowntimeData";

export default async function DisplayMtc() {
    return (
        <>
        <div className="text-center mt-5 text-[30px] font-bold">MAINTENANCE</div>
        {/* <div className="text-center text-[30px] font-bold">MESIN RUSAK</div> */}
        <DowntimeData url="downtime" bulan="0"/>
        <DowntimeData url="downtime-1" bulan="1"/>
        <DowntimeData url="downtime-2" bulan="2"/>
        </>
    )
}
