import HeaderSection from '@/app/header/header-section/page'
import React from 'react'
import HistoryLine from '../history-line/page'
import ListProduksiMesin from './list-produksi-mesin/page'

export default function ProductionDetail(props) {
    const nameHeader = props.searchParams.name
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
                <ListProduksiMesin />
            </div>
            <div className="col h-[100px] flex items-center justify-end gap-10 px-8">
                <p className='bg-[#9DA5EE] p-2 text-[40px] rounded'>LINE {nameHeader} PRODUCTION PRECENTAGE</p>
                <p className='bg-[#05A305] p-2 text-[48px] rounded'><span className='text-stroke'>100.00 %</span></p>
            </div>
        </div>
    </main>
  )
}
