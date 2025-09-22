import React, { useEffect, useState } from "react";
import { Treemap, ResponsiveContainer, Cell } from "recharts";
import { fetchTreemap } from "../data/api";

export default function TreemapPanel() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetchTreemap().then(setData);
  }, []);

  const COLORS = ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd'];

  return (
    <div style={{ height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <Treemap
          data={data}
          dataKey="size"
          aspectRatio={4 / 3}
          stroke="#fff"
          fill="#8884d8"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Treemap>
      </ResponsiveContainer>
    </div>
  );
}