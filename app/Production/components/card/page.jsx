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

    if (detail == 'true') {
        return (
            <div className='col w-full h-full flex flex-col gap-[30px]'>
                <Link href={{pathname: '/Production/detail', query: {name: 'CAM'}}} className='h-full'>
                    <div className={`col h-full w-full rounded-[6px] p-[1px] ${productionCam > 80  ? 'bg-[#05A305]' : 'bg-[#FF0000]'}`}>
                        <div className="h-[60px] w-[115px] bg-[#D9D9D9] rounded-[6px]">
                            <div className="flex justify-center items-center">
                                <p className="text-[48px]">CAM</p>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <span className="text-stroke">
                                <p className="text-[64px] text-white">{productionCam} %</p>
                            </span>
                        </div>
                    </div>
                </Link>
                <Link href={{pathname: '/Production/detail', query: {name: 'CNC 1'}}} className='h-full'>
                    <div className={`col h-full w-full rounded-[6px] p-[1px] ${productionCncSatu > 90  ? 'bg-[#05A305]' : 'bg-[#FF0000]'}`}>
                        <div className="h-[60px] w-[115px] bg-[#D9D9D9] rounded-[6px]">
                            <div className="flex justify-center items-center">
                                <p className="text-[48px]">CNC 1</p>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <span className="text-stroke">
                                <p className="text-[64px] text-white">{productionCncSatu} %</p>
                            </span>
                        </div>
                    </div>
                </Link>
                <Link href={{pathname: '/Production/detail', query: {name: 'CNC 2'}}} className='h-full'>
                    <div className={`col h-full w-full rounded-[6px] p-[1px] ${productionCncDua > 90  ? 'bg-[#05A305]' : 'bg-[#FF0000]'}`}>
                        <div className="h-[60px] w-[115px] bg-[#D9D9D9] rounded-[6px]">
                            <div className="flex justify-center items-center">
                                <p className="text-[48px]">CNC 2</p>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <span className="text-stroke">
                                <p className="text-[64px] text-white">{productionCncDua} %</p>
                            </span>
                        </div>
                    </div>
                </Link>
                <Link href={{pathname: '/Production/detail', query: {name: 'CNC 3'}}} className='h-full'>
                    <div className={`col h-full w-full rounded-[6px] p-[1px] ${productionCncTiga > 90  ? 'bg-[#05A305]' : 'bg-[#FF0000]'}`}>
                        <div className="h-[60px] w-[115px] bg-[#D9D9D9] rounded-[6px]">
                            <div className="flex justify-center items-center">
                                <p className="text-[48px]">CNC 3</p>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <span className="text-stroke">
                                <p className="text-[64px] text-white">{productionCncTiga} %</p>
                            </span>
                        </div>
                    </div>
                </Link>
            </div>
        )
    } else {
        return (
            <div className='col w-full h-full flex flex-col gap-[30px]'>
                <div className={`col h-full w-full rounded-[6px] p-[1px] ${productionCam > 80  ? 'bg-[#05A305]' : 'bg-[#FF0000]'}`}>
                    <div className="h-[60px] w-[115px] bg-[#D9D9D9] rounded-[6px]">
                        <div className="flex justify-center items-center">
                            <p className="text-[48px]">CAM</p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <span className="text-stroke">
                            <p className="text-[64px] text-white">{productionCam} %</p>
                        </span>
                    </div>
                </div>
                <div className={`col h-full w-full rounded-[6px] p-[1px] ${productionCncSatu > 90  ? 'bg-[#05A305]' : 'bg-[#FF0000]'}`}>
                    <div className="h-[60px] w-[115px] bg-[#D9D9D9] rounded-[6px]">
                        <div className="flex justify-center items-center">
                            <p className="text-[48px]">CNC 1</p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <span className="text-stroke">
                            <p className="text-[64px] text-white">{productionCncSatu} %</p>
                        </span>
                    </div>
                </div>
                <div className={`col h-full w-full rounded-[6px] p-[1px] ${productionCncDua > 90  ? 'bg-[#05A305]' : 'bg-[#FF0000]'}`}>
                    <div className="h-[60px] w-[115px] bg-[#D9D9D9] rounded-[6px]">
                        <div className="flex justify-center items-center">
                            <p className="text-[48px]">CNC 2</p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <span className="text-stroke">
                            <p className="text-[64px] text-white">{productionCncDua} %</p>
                        </span>
                    </div>
                </div>
                <div className={`col h-full w-full rounded-[6px] p-[1px] ${productionCncTiga > 90  ? 'bg-[#05A305]' : 'bg-[#FF0000]'}`}>
                    <div className="h-[60px] w-[115px] bg-[#D9D9D9] rounded-[6px]">
                        <div className="flex justify-center items-center">
                            <p className="text-[48px]">CNC 3</p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <span className="text-stroke">
                            <p className="text-[64px] text-white">{productionCncTiga} %</p>
                        </span>
                    </div>
                </div>
            </div>
        )
    }


}
