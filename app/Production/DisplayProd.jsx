import React from "react";
import ProductionData from "./ProductionData";
import Link from "next/link";

export default async function DisplayProd() {
  return (
    <>
      <div className="text-center mt-5 text-[40px] ">PRODUKSI</div>
      <div className="mx-5">
        <Link href="../Production/pageProduction">
          <ProductionData name="CAM" line="cam" />
        </Link>
        <Link href="../Production/pageProduction">
          <ProductionData name="CNC Line 1" line="cnc-1" />
        </Link>
        <Link href="../Production/pageProduction">
          <ProductionData name="CNC Line 2" line="cnc-2" />
        </Link>
        <Link href="../Production/pageProduction">
          <ProductionData name="CNC Line 3" line="cnc-3" />
        </Link>
      </div>
    </>
  );
}
