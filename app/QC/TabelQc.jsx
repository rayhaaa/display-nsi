import React from "react";

async function getOqcData(line) {
  let res = await fetch(`http://192.168.10.75:3002/report-oqc`, {
    next: {
      revalidate: 0,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getIpqcData(line) {
  let res = await fetch(`http://192.168.10.75:3002/report-ipqc`, {
    next: {
      revalidate: 0,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function dataApisO() {
  let ipqcData = await getOqcData();
  let dataApi = ipqcData.payload.data;
  let data = dataApi.map((d) => ({
    ...d,
  }));

  return data;
}

async function dataApisIp() {
  let ipqcData = await getIpqcData();
  let dataApi = ipqcData.payload.data;
  let data = dataApi.map((d) => ({
    ...d,
  }));

  return data;
}

export default async function TabelQc() {
  const data1 = await dataApisO;
  // const data2 = await dataApisIp;

  return (
    <>
      {data1.map((d) => (
        <div key={d.id}>
          <table className="table-auto w-full h-full">
            <thead className="text-[30px]">
              <th className="border border-gray-600"></th>
              <th className="border border-gray-600" colSpan="2">
                OQC
              </th>
              <th className="border border-gray-600" colSpan="2">
                IPQC
              </th>
            </thead>
            <tbody>
              <tr className="text-[40px]">
                <td className="border border-gray-600"></td>
                <td className="border border-gray-600">Target</td>
                <td className="border border-gray-600">Aktual</td>
                <td className="border border-gray-600">Target</td>
                <td className="border border-gray-600">Aktual</td>
              </tr>
              <tr className="text-[45px]">
                <td className="border border-gray-600">CAM</td>
                <td className="border border-gray-600">6</td>
                <td className="border border-gray-600">3</td>
                <td className="border border-gray-600">7</td>
                <td className="border border-gray-600">0</td>
              </tr>
              <tr className="text-[45px]">
                <td className="border border-gray-600">CNC</td>
                <td className="border border-gray-600">12</td>
                <td className="border border-gray-600">4</td>
                <td className="border border-gray-600">6</td>
                <td className="border border-gray-600">9</td>
              </tr>
              <tr className="text-[45px] ">
                <td className="border border-gray-600">MFG</td>
                <td className="border border-gray-600">5</td>
                <td className="border border-gray-600">1</td>
                <td className="border border-gray-600">5</td>
                <td className="border border-gray-600">0</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </>
  );
}
