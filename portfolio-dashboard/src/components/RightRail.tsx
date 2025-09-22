import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { fetchPieData } from "../data/api";

export default function RightRail() {
  const [pieData, setPieData] = useState<any[]>([]);

  useEffect(() => {
    fetchPieData().then(setPieData);
  }, []);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="space-y-4">
      {/* Portfolio Summary */}
      <div className="bg-white rounded shadow-sm border">
        <div className="px-4 py-2 bg-blue-600 text-white font-medium">Portfolio Summary</div>
        <div className="p-4 space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600">Total Value:</span>
            <span className="font-semibold">$100,972</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Day Change:</span>
            <span className="font-semibold text-green-600">+$1,234 (+1.24%)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Total Return:</span>
            <span className="font-semibold text-green-600">+$12,456 (+14.1%)</span>
          </div>
        </div>
      </div>

      {/* Sector Allocation */}
      <div className="bg-white rounded shadow-sm border">
        <div className="px-4 py-2 bg-blue-600 text-white font-medium">Sector Allocation</div>
        <div className="p-4">
          <div style={{ height: 250 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: any) => [`$${value.toLocaleString()}`, 'Value']} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded shadow-sm border">
        <div className="px-4 py-2 bg-blue-600 text-white font-medium">Recent Activity</div>
        <div className="p-4 space-y-3">
          <div className="text-sm">
            <div className="flex justify-between items-center">
              <span>AAPL Buy</span>
              <span className="text-gray-500">2 days ago</span>
            </div>
            <div className="text-gray-600">+10 shares at $172.50</div>
          </div>
          <div className="text-sm">
            <div className="flex justify-between items-center">
              <span>MSFT Dividend</span>
              <span className="text-gray-500">1 week ago</span>
            </div>
            <div className="text-green-600">+$124.80</div>
          </div>
          <div className="text-sm">
            <div className="flex justify-between items-center">
              <span>GOOGL Sell</span>
              <span className="text-gray-500">2 weeks ago</span>
            </div>
            <div className="text-gray-600">-5 shares at $142.30</div>
          </div>
        </div>
      </div>
    </div>
  );
}