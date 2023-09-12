import HeaderSection from '@/app/header/header-section/page'
import Link from 'next/link'
import React from 'react'
import CardProduction from '../card/page'

export default function ProductionComponent(props) {
  if (props.detail == 'false') {
    return (
        <div className="w-[400px] rounded-[8px] bg-[#D9D9D9] p-[10px] flex flex-col gap-[38px] h-full">
          <HeaderSection name='PRODUCTION' />
          <div className="col h-full gap-[30px] flex flex-col">
            <CardProduction line='CAM' url='cam' />
            <CardProduction line='CNC 1' url='cnc-1' />
            <CardProduction line='CNC 2' url='cnc-2' />
            <CardProduction line='CNC 3' url='cnc-3' />
          </div>
        </div>
    )
  } else {
    return (
        <div className="w-[400px] rounded-[8px] bg-[#D9D9D9] p-[10px] flex flex-col gap-[38px] h-full">
          <HeaderSection name='PRODUCTION' />
          <div className="col h-full gap-[30px] flex flex-col">
            <Link href={{pathname: '/Production/detail', query: {name: 'CAM'}}} className='h-full'>
              <CardProduction line='CAM' url='cam' />
            </Link>
            <Link href={{pathname: '/Production/detail', query: {name: 'CNC 1'}}} className='h-full'>
              <CardProduction line='CNC 1' url='cnc-1' />
            </Link>
            <Link href={{pathname: '/Production/detail', query: {name: 'CNC 2'}}} className='h-full'>
              <CardProduction line='CNC 2' url='cnc-2' />
            </Link>
            <Link href={{pathname: '/Production/detail', query: {name: 'CNC 3'}}} className='h-full'>
              <CardProduction line='CNC 3' url='cnc-3' />
            </Link>
          </div>
        </div>
    )
  }
}
