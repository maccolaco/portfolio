import React, { useEffect, useState } from "react";
import { fetchHoldings } from "../data/api";

const PERIODS = ["1D", "5D", "1M", "YTD"];

export default function HoldingsTable() {
  const [rows, setRows] = useState<any[]>([]);
  const [period, setPeriod] = useState("1M");

  useEffect(() => {
    fetchHoldings(period).then(setRows);
  }, [period]);

  return (
    <div>
      {/* Filter Buttons */}
      <div className="flex gap-2 mb-3">
        {PERIODS.map((p) => (
          <button
            key={p}
            onClick={() => setPeriod(p)}
            className={`px-3 py-1 rounded border ${
              p === period ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {p}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-auto max-h-96">
        <table className="w-full text-sm text-left border-collapse">
          <thead className="bg-gray-100 sticky top-0">
            <tr>
              <th className="p-2 border">Ticker</th>
              <th className="p-2 border">Company</th>
              <th className="p-2 border">Quantity</th>
              <th className="p-2 border">Price</th>
              <th className="p-2 border">Return</th>
              <th className="p-2 border">Gain ($)</th>
              <th className="p-2 border">Value</th>
              <th className="p-2 border">Value (%)</th>
              <th className="p-2 border">Gain (%)</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="p-2 border">{r.ticker}</td>
                <td className="p-2 border">{r.company}</td>
                <td className="p-2 border">{r.qty}</td>
                <td className="p-2 border">${r.price.toFixed(2)}</td>
                <td className={`p-2 border ${r["1mReturn"] >= 0 ? "text-green-600" : "text-red-600"}`}>
                  {r["1mReturn"].toFixed(2)}%
                </td>
                <td className={`p-2 border ${r["1mGain"] >= 0 ? "text-green-600" : "text-red-600"}`}>
                  ${r["1mGain"].toLocaleString()}
                </td>
                <td className="p-2 border">${r.value.toLocaleString()}</td>
                <td className="p-2 border">{r.valuePct}%</td>
                <td className={`p-2 border ${r.gainPct >= 0 ? "text-green-600" : "text-red-600"}`}>
                  {r.gainPct}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
