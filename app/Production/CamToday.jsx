import React from "react";

async function getDataCamToday(url) {
    let res = await fetch(`http://192.168.10.75:3003/api/cam`, {
      next: {
        revalidate: 0,
      },
    });
  
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
  
    return res.json();
  }

export default async function CamToday(url) {
    const data = new getDataCamToday
    return (
        <>
        </>
    )
}