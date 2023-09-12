import React from 'react'

async function getListProdMachine(url) {
  const res = await fetch(`http://192.168.10.75:3004/api/${url}`, {next: {revalidate: 0}})

  if (!res.ok) {
    throw new Error('failed to fetch data')
  }

  return res.json()
}

export default async function ListProduksiMesin(props) {
    let url = props.url
    let minimum = 90
    if (url == 'cam') {
      url = 'line-cam'
      minimum = 80
    }
    if (url == 'cnc-1') {
      url = 'line-1'
    }
    if (url == 'cnc-2') {
      url = 'line-2'
    }
    if (url == 'cnc-3') {
      url = 'line-3'
    }
    let dataApi = await getListProdMachine(url)
    let data = dataApi.payload.data

    if (data === null) {
      return (
        <>
          <div className="bg-red-300 h-[80px] p-3 mt-3 rounded flex justify-center items-center gap-3">
            <div className="h-full rounded bg-white text-[40px] flex justify-center items-center px-10">Maaf, belum ada lot yang sudah dibuat</div>
          </div>
        </>
      )
    }
    if (data !== null) {
      return (
          <>
            {data.map((element) => (
              <div className="bg-red-300 h-[80px] p-3 mt-3 rounded flex flex-row justify-center items-center gap-3">
                <div className="basis-1/4 h-full rounded bg-white text-[40px] flex justify-center items-center">{element.mcn}</div>
                <div className="basis-1/4 h-full rounded bg-white text-[40px] flex justify-center items-center">{element.planQty}</div>
                <div className="basis-1/4 h-full rounded bg-white text-[40px] flex justify-center items-center">{element.receiveQty}</div>
                <div className={`basis-1/4 h-full rounded ${element.percen > minimum  ? 'bg-[#05A305]' : 'bg-[#FF0000]'} text-[40px] flex justify-center items-center`}>
                  <span className="text-stroke">
                    <p className="text-[40px] text-white">{element.percen.toFixed(2)} %</p>
                  </span>
                </div>
              </div>
            ))}
          </>
      )
    }
}
