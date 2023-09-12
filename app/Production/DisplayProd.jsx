import React from "react";
import ProductionData from "./ProductionData";

export default async function DisplayProd() {
    return (
        <>
        <div className="text-center mt-5 text-[30px] font-bold">PRODUCTION</div>
        {/* <div className="mx-5"> */}
        <div className="flex flex-col gap-5 p-5">
            <ProductionData name='CAM' line='cam' />
            <ProductionData name='CNC Line 1' line='cnc-1' />
            <ProductionData name='CNC Line 2' line='cnc-2' />
            <ProductionData name='CNC Line 3' line='cnc-3' />
        </div>
        </>
    )
}
