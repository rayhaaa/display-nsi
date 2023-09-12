import HeaderSection from '@/app/header/header-section/page'
import React from 'react'
import HistoryLine from '../history-line/page'
import ListProduksiMesin from './list-produksi-mesin/page'

async function getDataProd(url) {
    const res = await fetch(`http://192.168.10.75:3004/api/${url}`, {next: {revalidate: 0}})

    if (!res.ok) {
        throw new Error('failed to fetch data')
    }

    return res.json()
}

export default async function ProductionDetail(props) {
    const nameHeader = props.searchParams.name
    const url = props.searchParams.url
    const dataApi = await getDataProd(url)
    const data = dataApi.payload.data.percen.toFixed(2)
    let minimum = 90
    if (url == 'cam') {
        minimum = 80
    }
  return (
    <main className='bg-[#D9D9D9] w-full h-full rounded-lg flex flex-col justify-center items-center gap-[38px]'>
        <HeaderSection name={`HISTORY PRODUCTION LINE ${nameHeader}`} />
        <div className="col h-full w-full flex flex-col gap-1 p-2">
            <div className='col h-[80px] flex flex-row rounded bg-[#9DA5EE] justify-center'>
                <div className="basis-1/4 flex justify-center items-center h-full text-[48px]">No Mesin</div>
                <div className="basis-1/4 flex justify-center items-center h-full text-[48px]">Plan QTY</div>
                <div className="basis-1/4 flex justify-center items-center h-full text-[48px]">Receive Qty</div>
                <div className="basis-1/4 flex justify-center items-center h-full text-[48px]">Percen</div>
            </div>
            <div className="col h-[620px] overflow-y-auto">
                <ListProduksiMesin url={url} />
            </div>
            <div className="col h-[100px] flex items-center justify-end gap-10 px-8">
                <p className='bg-[#9DA5EE] p-2 text-[40px] rounded'>LINE {nameHeader} PRODUCTION PRECENTAGE</p>
                <p className={`${data > minimum  ? 'bg-[#05A305]' : 'bg-[#FF0000]'} p-2 text-[48px] rounded`}><span className='text-stroke'>{data} %</span></p>
            </div>
        </div>
    </main>
  )
}
