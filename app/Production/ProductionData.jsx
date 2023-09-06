import React from 'react'

async function getProductionsData(line) {
    let res = await fetch(`http://192.168.10.75:3004/${line}`, {
        next: {
            revalidate: 0
        }
    })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function ProductionData(props) {
    let dataApi = await getProductionsData(props.line)
    let data = dataApi.payload.data
    return (
        <>
            <div className={`card rounded-xl p-9 text-center my-8 
                                ${data.percen < 80 ? 'bg-[#BB2525]' : 'bg-[#1A5D1A]'}`
                            }>
                <p className='text-white text-[30px]'>{props.name}</p>
                <p className='text-white text-[50px]'>{data.percen.toFixed(2)}%</p>
            </div>
        </>
    )
}