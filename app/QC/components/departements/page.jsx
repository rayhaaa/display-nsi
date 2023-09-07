import React from 'react'

async function getDataQuality(url) {
    const res = await fetch(`http://192.168.10.75:3002/${url}`, {next: {revalidate: 0}})

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function DepartementQC(props) {
    const dataApi = await getDataQuality(props.url)
    const data = dataApi.payload.data
    console.log(data)
    return (
        <div className="basis-1/2 rounded-[4px] h-full border border-black flex flex-col p-[10px] gap-[20px]">
            <div className="col h-[50px]">
                <div className="text-center">
                    <p className="text-[48px]">{props.name}</p>
                </div>
            </div>
            <div className="col h-full flex flex-col gap-[10px]">
                {data.map((section) => (
                    <div className={`col h-full rounded flex flex-row border ${((section.aktual / section.target) * 100) > 80 ? 'border-[#FF0000]' : 'border-[#05A305]'}`}>
                        <div className="basis-4/12 h-full flex justify-center items-center">
                            <p className="text-[46px]">{section.section}</p>
                        </div>
                        <div className={`basis-8/12 h-full rounded ${((section.aktual / section.target) * 100) > 80 ? 'bg-[#FF0000]' : 'bg-[#05A305]'}`}>
                            <span className="text-stroke"><p className="text-[56px] ms-2">{((section.aktual / section.target) * 100).toFixed(1)} %</p></span>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}
