import React from "react";
import { Bebas_Neue } from "next/font/google";

const bebas_neue = Bebas_Neue({
    weight: "400",
    subsets: ["latin"],
  });

export default function Loading() {
  return (
    <main className="h-full w-full flex justify-center items-center">
      <div className={bebas_neue.className}>
        <h2 className=" text-[98px]">
          <span className="text-stroke w-full h-full">Loading...</span>
        </h2>
      </div>
    </main>
  );
}
