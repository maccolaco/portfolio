// src/data/api.ts
export async function fetchHoldings(period = "1M") {
  const res = await fetch(`http://localhost:4000/api/holdings?period=${period}`);
  return res.json();
}

export async function fetchTreemap() {
  const res = await fetch("http://localhost:4000/api/treemap");
  return res.json();
}

export async function fetchPieData() {
  const res = await fetch("http://localhost:4000/api/pie");
  return res.json();
}

export async function fetchLineData() {
  const res = await fetch("http://localhost:4000/api/line");
  return res.json();
}
