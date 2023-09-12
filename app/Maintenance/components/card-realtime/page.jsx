'use client'

import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'

const socket = io('http://192.168.10.75:3003')

export default function CardMaintenanceRealTime() {
    const [downtime, setDowntime] = useState('')
    const target = 7200000

    useEffect(() => {
        socket.on('currentDowntime', (data) => {
            setDowntime(data.total_downtime)
        })

        return () => {
            socket.off('connection')
        }
    }, [])
    let percen = ((parseInt(downtime) / target) * 100).toFixed(2)
    return (
        <div className={`col h-full rounded-[6px] flex flex-col border ${percen < 80 ? 'border-[#05A305]' : 'border-[#FF0000]'}`}>
            <div className="col text-center">
                <p className="text-[40px]">Bulan Ini</p>
            </div>
            <div className={`col h-full rounded-[6px] flex justify-center items-center ${percen < 80 ? 'bg-[#05A305]' : 'bg-[#FF0000]'}`}>
                <div className="text-center">
                    <span className="text-stroke"><p className="text-[64px]">{percen} %</p></span>
                </div>
            </div>
        </div>
    )
}
