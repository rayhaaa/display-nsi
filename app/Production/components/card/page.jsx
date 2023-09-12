import React from 'react'

async function getDataProductions(url) {
    const res = await fetch(`http://192.168.10.75:3004/api/${url}`, {next: {revalidate: 0}})

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function CardProduction(props) {
    const dataApi = await getDataProductions(props.url)
    let data = dataApi.payload.data.percen.toFixed(2)
  return (
    <div className={`col h-full rounded-[6px] p-[1px] ${data > 80 ? 'bg-[#05A305]' : 'bg-[#FF0000]'}`}>
        <div className="h-[60px] w-[115px] bg-[#D9D9D9] rounded-[6px]">
            <div className="flex justify-center items-center">
                <p className="text-[48px]">{props.line}</p>
            </div>
        </div>
        <div className="flex justify-center">
            <span className="text-stroke">
                <p className="text-[64px] text-white">{data} %</p>
            </span>
        </div>
    </div>
  )
}
