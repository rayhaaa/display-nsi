import HeaderSection from '@/app/header/header-section/page'
import Link from 'next/link'
import React from 'react'
import CardProduction from '../card/page'

export default function ProductionComponent(props) {
  if (props.detail == 'false') {
    return (
        <div className="w-[400px] rounded-[8px] bg-[#D9D9D9] p-[10px] flex flex-col gap-[38px] h-full">
          <HeaderSection name='PRODUCTION' />
          <div className="col h-full flex flex-col">
            <CardProduction detail='false' />
          </div>
        </div>
    )
  } else {
    return (
        <div className="w-[400px] rounded-[8px] bg-[#D9D9D9] p-[10px] flex flex-col gap-[38px] h-full">
          <HeaderSection name='PRODUCTION' />
          <div className="col h-full gap-[30px] flex flex-col">
            <CardProduction detail='true' />
          </div>
        </div>
    )
  }
}
