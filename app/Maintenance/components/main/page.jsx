import HeaderSection from '@/app/header/header-section/page'
import React from 'react'
import CardMaintenance from '../card/page'

export default function MaintenanceComponent() {
  return (
        <div className="w-[400px] rounded-[8px] bg-[#D9D9D9] p-[10px] flex flex-col gap-[38px]">
          <HeaderSection name='MAINTENANCE' />

          <div className="col h-full gap-[27px] flex flex-col">
            <CardMaintenance name='Bulan Ini' url='downtime' />
            <CardMaintenance name='1 Bulan Lalu' url='downtime-1' />
            <CardMaintenance name='2 Bulan Lalu' url='downtime-2' />
          </div>
        </div>
  )
}
