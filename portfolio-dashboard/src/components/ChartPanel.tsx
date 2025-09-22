import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend } from "recharts";
import { fetchLineData } from "../data/api";

export default function ChartPanel() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetchLineData().then(setData);
  }, []);

  return (
    <div style={{ height: 320 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="dogs" stroke="#1E90FF" name="Dogs of the Dow" />
          <Line type="monotone" dataKey="sp500" stroke="#FF6347" name="S&P 500" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
