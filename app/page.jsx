import Link from "next/link";
import Header from "./header/header-main/page";
import MaintenanceComponent from "./Maintenance/components/main/page";
import ProductionComponent from "./Production/components/main/page";
import QualityComponent from "./QC/components/main/page";

export default function Home() {

  return (
      <>
        {/* production */}
        <Link href='/Production' prefetch={false}>
          <ProductionComponent detail='false' />
        </Link>

        {/* maintenance */}
        <Link href='/Maintenance' prefetch={false}>
          <MaintenanceComponent />
        </Link>

        {/* quality & sales */}
        <div className="w-[680px] rounded-[8px] flex flex-col gap-[10px]">

          {/* quality */}
          <Link href='/QC' prefetch={false}>
            <QualityComponent />
          </Link>

          {/* sales */}
          <div className="col border h-[400px] rounded-[8px]"></div>
        </div>
      </>
  );
}
