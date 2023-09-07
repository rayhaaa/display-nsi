import Header from "./header/header-main/page";
import MaintenanceComponent from "./Maintenance/components/main/page";
import ProductionComponent from "./Production/components/main/page";
import QualityComponent from "./QC/components/main/page";

export default function Home() {

  return (
    // <main className="flex flex-col h-[1200px] w-[1600px] p-[50px] bg-[#9DA5EE] gap-[25px]">
    <main className="flex flex-col h-[1200px] w-[1600px] p-[30px] bg-[#9DA5EE] gap-[25px]">
      <Header />

      {/* main layout */}
      {/* <div className="col w-full h-[925px] flex gap-[50px]"> */}
      <div className="col w-full h-[925px] flex gap-[30px]">

        {/* production */}
        <ProductionComponent />

        {/* maintenance */}
        <MaintenanceComponent />

        {/* quality & sales */}
        <div className="w-[680px] rounded-[8px] flex flex-col gap-[10px]">

          {/* quality */}
          <QualityComponent />

          {/* sales */}
          <div className="col border h-[400px] rounded-[8px]"></div>
        </div>
      </div>
    </main>
  );
}
