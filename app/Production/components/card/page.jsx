'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'

const socket = io('http://192.168.10.75:3004')

export default function CardProduction(props) {
    const detail = props.detail
    const [productionCam, setProductionCam] = useState('0.00')
    const [productionCncSatu, setProductionCncSatu] = useState('0.00')
    const [productionCncDua, setProductionCncDua] = useState('0.00')
    const [productionCncTiga, setProductionCncTiga] = useState('0.00')

    useEffect(() => {
        socket.on('data', (data) => {
          setProductionCam(data.production.cam.percen)
          setProductionCncSatu(data.production.cncSatu.percen)
          setProductionCncDua(data.production.cncDua.percen)
          setProductionCncTiga(data.production.cncTiga.percen)
        })

        return () => {
            socket.disconnect()
        }
    }, [])

    let cam = parseFloat(productionCam).toFixed(2)
    let cncSatu = parseFloat(productionCncSatu).toFixed(2)
    let cncDua = parseFloat(productionCncDua).toFixed(2)
    let cncTiga = parseFloat(productionCncTiga).toFixed(2)
    console.log(productionCam, productionCncSatu, productionCncDua, productionCncTiga)

    if (detail == 'true') {
        return (
            <div className='col w-full h-full flex flex-col gap-[30px]'>
                <Link href={{pathname: '/Production/detail', query: {name: 'CAM', url: 'cam'}}} className='h-full'>
                    <div className={`col h-full w-full rounded-[6px] p-[1px] ${cam > 80  ? 'bg-[#05A305]' : 'bg-[#FF0000]'}`}>
                        <div className="h-[60px] w-[115px] bg-[#D9D9D9] rounded-[6px]">
                            <div className="flex justify-center items-center">
                                <p className="text-[48px]">CAM</p>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <span className="text-stroke">
                                <p className="text-[64px] text-white">{cam} %</p>
                            </span>
                        </div>
                    </div>
                </Link>
                <Link href={{pathname: '/Production/detail', query: {name: 'CNC 1', url: 'cnc-1'}}} className='h-full'>
                    <div className={`col h-full w-full rounded-[6px] p-[1px] ${cncSatu > 90  ? 'bg-[#05A305]' : 'bg-[#FF0000]'}`}>
                        <div className="h-[60px] w-[115px] bg-[#D9D9D9] rounded-[6px]">
                            <div className="flex justify-center items-center">
                                <p className="text-[48px]">CNC 1</p>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <span className="text-stroke">
                                <p className="text-[64px] text-white">{cncSatu} %</p>
                            </span>
                        </div>
                    </div>
                </Link>
                <Link href={{pathname: '/Production/detail', query: {name: 'CNC 2', url: 'cnc-2'}}} className='h-full'>
                    <div className={`col h-full w-full rounded-[6px] p-[1px] ${cncDua > 90  ? 'bg-[#05A305]' : 'bg-[#FF0000]'}`}>
                        <div className="h-[60px] w-[115px] bg-[#D9D9D9] rounded-[6px]">
                            <div className="flex justify-center items-center">
                                <p className="text-[48px]">CNC 2</p>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <span className="text-stroke">
                                <p className="text-[64px] text-white">{cncDua} %</p>
                            </span>
                        </div>
                    </div>
                </Link>
                <Link href={{pathname: '/Production/detail', query: {name: 'CNC 3', url: 'url-3'}}} className='h-full'>
                    <div className={`col h-full w-full rounded-[6px] p-[1px] ${cncTiga > 90  ? 'bg-[#05A305]' : 'bg-[#FF0000]'}`}>
                        <div className="h-[60px] w-[115px] bg-[#D9D9D9] rounded-[6px]">
                            <div className="flex justify-center items-center">
                                <p className="text-[48px]">CNC 3</p>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <span className="text-stroke">
                                <p className="text-[64px] text-white">{cncTiga} %</p>
                            </span>
                        </div>
                    </div>
                </Link>
            </div>
        )
    } else {
        return (
            <div className='col w-full h-full flex flex-col gap-[30px]'>
                <div className={`col h-full w-full rounded-[6px] p-[1px] ${cam > 80  ? 'bg-[#05A305]' : 'bg-[#FF0000]'}`}>
                    <div className="h-[60px] w-[115px] bg-[#D9D9D9] rounded-[6px]">
                        <div className="flex justify-center items-center">
                            <p className="text-[48px]">CAM</p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <span className="text-stroke">
                            <p className="text-[64px] text-white">{cam} %</p>
                        </span>
                    </div>
                </div>
                <div className={`col h-full w-full rounded-[6px] p-[1px] ${cncSatu > 90  ? 'bg-[#05A305]' : 'bg-[#FF0000]'}`}>
                    <div className="h-[60px] w-[115px] bg-[#D9D9D9] rounded-[6px]">
                        <div className="flex justify-center items-center">
                            <p className="text-[48px]">CNC 1</p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <span className="text-stroke">
                            <p className="text-[64px] text-white">{cncSatu} %</p>
                        </span>
                    </div>
                </div>
                <div className={`col h-full w-full rounded-[6px] p-[1px] ${cncDua > 90  ? 'bg-[#05A305]' : 'bg-[#FF0000]'}`}>
                    <div className="h-[60px] w-[115px] bg-[#D9D9D9] rounded-[6px]">
                        <div className="flex justify-center items-center">
                            <p className="text-[48px]">CNC 2</p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <span className="text-stroke">
                            <p className="text-[64px] text-white">{cncDua} %</p>
                        </span>
                    </div>
                </div>
                <div className={`col h-full w-full rounded-[6px] p-[1px] ${cncTiga > 90  ? 'bg-[#05A305]' : 'bg-[#FF0000]'}`}>
                    <div className="h-[60px] w-[115px] bg-[#D9D9D9] rounded-[6px]">
                        <div className="flex justify-center items-center">
                            <p className="text-[48px]">CNC 3</p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <span className="text-stroke">
                            <p className="text-[64px] text-white">{cncTiga} %</p>
                        </span>
                    </div>
                </div>
            </div>
        )
    }


}
