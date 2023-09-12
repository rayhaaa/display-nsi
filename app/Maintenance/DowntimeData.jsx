import React from "react";

async function getDataDowntime(url) {
  let res = await fetch(`http://192.168.10.75:3003/api/${url}`, {
    next: {
      revalidate: 0,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

function subtractMonths(date, months) {
  date.setMonth(date.getMonth() - months);

  return date;
}

function setBulan(bulan) {
  let now = subtractMonths(new Date(), bulan);
  let month = now.toLocaleString("default", { month: "long", year: "numeric" });
  return month;
}

export default async function DowntimeData(props) {
  let dataApi = await getDataDowntime(props.url);
  let percen = (dataApi.payload.data.total_downtime / 7200000) * 100;

    let bulan = setBulan(props.bulan)
    return (
        <div className={`card border rounded-xl m-5 p-7 text-center
                            ${percen > 80 ? 'bg-[#BB2525]' : 'bg-[#1A5D1A]'}`
                        }>
            <p className='text-white text-[40px]'>{bulan}</p>
            <p className='text-white text-[50px]'>{percen.toFixed(2)}%</p>
        </div>
    )
}
