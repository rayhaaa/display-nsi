import HeaderSection from '@/app/header/header-section/page'
import React from 'react'
import DepartementQC from '../departements/page'

export default function QualityComponent() {
  return (
        <div className="col h-[510px] rounded-[8px] bg-[#D9D9D9] p-[10px] flex flex-col gap-[38px]">
            <HeaderSection name='QUALITY' />

            <div className="col h-full flex gap-[10px]">
              <DepartementQC name='IPQC' url='report-ipqc' />
              <DepartementQC name='OQC' url='report-oqc' />
            </div>
        </div>
  )
}
