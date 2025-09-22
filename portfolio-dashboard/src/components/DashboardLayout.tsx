import React from "react";
import HoldingsTable from "./HoldingsTable";
import ChartPanel from "./ChartPanel";
import RightRail from "./RightRail";
import TreemapPanel from "./TreemapPanel";

export default function DashboardLayout() {
  return (
    <div className="grid grid-cols-12 gap-4">
      {/* left-center area */}
      <div className="col-span-8 space-y-4">
        <div className="bg-white rounded shadow-sm border">
          <div className="px-4 py-2 bg-blue-600 text-white font-medium">Holdings Map</div>
          <div className="p-4">
            <TreemapPanel />
          </div>
        </div>

        <div className="bg-white rounded shadow-sm border">
          <div className="px-4 py-2 bg-blue-600 text-white font-medium">Holdings Performance</div>
          <div className="p-4">
            <HoldingsTable />
          </div>
        </div>

        <div className="bg-white rounded shadow-sm border">
          <div className="px-4 py-2 bg-blue-600 text-white font-medium">Chart for Dogs of the Dow</div>
          <div className="p-4">
            <ChartPanel />
          </div>
        </div>
      </div>

      {/* right rail */}
      <div className="col-span-4">
        <RightRail />
      </div>
    </div>
  );
}
