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

    return (
        <div className="col w-full h-[150px] flex justify-center items-center">
            <div className="text-center">
                <p className=" text-[64px]">DASHBORD CONTROL MANUFACTURING</p>
                <p className=" text-[48px]">{dayDate}</p>
            </div>
        </div>
    )
}
