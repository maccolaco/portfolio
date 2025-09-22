import React from "react";

const periods = ["1 Day", "5 Day", "10 Day", "1 Month", "3 Month", "YTD", "1 Year"];

export default function Topbar() {
  const [selected, setSelected] = React.useState("1 Month");
  return (
    <header className="bg-brandBlue text-white px-4 py-2 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button className="bg-white/20 px-3 py-1 rounded">Portfolios</button>
        <h1 className="text-lg font-semibold">Dashboard</h1>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm mr-2">Return:</span>
        <div className="flex gap-2">
          {periods.map((p) => (
            <button
              key={p}
              onClick={() => setSelected(p)}
              className={`px-3 py-1 rounded border ${selected === p ? "bg-white text-brandBlue" : "bg-white/10"}`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
