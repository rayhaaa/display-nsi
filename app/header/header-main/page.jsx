'use client'

import { usePathname } from 'next/navigation'

import React from 'react'

export default function Header() {
    var arrMonth = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
    ];
    let now = new Date();
    let day = now.getDate();
    let month = now.getMonth();
    let bulan = `${arrMonth[month]}`;
    let year = now.getFullYear();
    let dayDate = `${day} ${bulan} ${year}`;

    const pathName = usePathname()

    return (
        <div className="col w-full h-[150px] flex flex-row justify-center items-center">
            {/* <div className="basis-1/12 h-150 bg-red-700">Back</div> */}
            <div className="basis-10/12 text-center">
                <p className=" text-[64px]">DASHBORD CONTROL MANUFACTURING</p>
                <p className=" text-[48px]">{dayDate}</p>
            </div>
            {/* <div className="basis-1/12"></div> */}
        </div>
    )
}
