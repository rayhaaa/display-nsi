import React from 'react'

async function getDataDowntimes(url) {
    const res = await fetch(`http://192.168.10.75:3003/${url}`, {next: {revalidate: 0}})

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function CardMaintenance(props) {
    const dataApi = await getDataDowntimes(props.url)
    let data = dataApi.payload.data.total_downtime
    let percen = parseFloat((data / 7200000) * 100).toFixed(2)

    return (
        <div className={`col h-full rounded-[6px] flex flex-col border ${percen < 80 ? 'border-[#05A305]' : 'border-[#FF0000]'}`}>
            <div className="col text-center">
                <p className="text-[40px]">{props.name}</p>
            </div>
            <div className={`col h-full rounded-[6px] flex justify-center items-center ${percen < 80 ? 'bg-[#05A305]' : 'bg-[#FF0000]'}`}>
                <div className="text-center">
                    <span className="text-stroke"><p className="text-[64px]">{percen} %</p></span>
                </div>
            </div>
        </div>
    )
}

