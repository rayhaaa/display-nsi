import React from "react";
import { Bebas_Neue } from "next/font/google";
// import Link from "next/link";

async function getProductionsData(line) {
  let res = await fetch(`http://192.168.10.75:3004/api/${line}`, {
    next: {
      revalidate: 0,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const bebas_neue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  // style: "normal",
});

export default async function ProductionData(props) {
  let dataApi = await getProductionsData(props.line);
  let data = dataApi.payload.data;

  return (
    <>
      <div
        className={`card rounded-lg p-5 text-center my-8 
                                ${
                                  data.percen < 80
                                    ? "bg-[#BB2525]"
                                    : "bg-[#1A5D1A]"
                                }`}
      >
        <p className="text-white text-[35px]">{props.name}</p>
        <div
          className={`text-white text-[50px] font-[${bebas_neue.className}]`}
        >
          {data.percen.toFixed(2)}%
        </div>
      </div>
    </>
  );
}
