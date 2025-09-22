// server/server.js
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
const PORT = 4000;

// Mock datasets per period
const holdingsByPeriod = {
  "1D": [
    { ticker: "AAPL", company: "Apple", qty: 120, price: 172, "1mReturn": 0.6, "1mGain": 80, value: 20640, valuePct: 20, gainPct: 0.4 },
    { ticker: "MSFT", company: "Microsoft", qty: 80, price: 330, "1mReturn": -0.3, "1mGain": -120, value: 26400, valuePct: 26, gainPct: -0.2 },
  ],
  "5D": [
    { ticker: "AAPL", company: "Apple", qty: 120, price: 172, "1mReturn": 2.1, "1mGain": 400, value: 20640, valuePct: 20, gainPct: 1.8 },
    { ticker: "MSFT", company: "Microsoft", qty: 80, price: 330, "1mReturn": 1.5, "1mGain": 320, value: 26400, valuePct: 26, gainPct: 1.2 },
  ],
  "1M": [
    { ticker: "AAPL", company: "Apple", qty: 120, price: 172, "1mReturn": 3.5, "1mGain": 600, value: 20640, valuePct: 20, gainPct: 3.2 },
    { ticker: "MSFT", company: "Microsoft", qty: 80, price: 330, "1mReturn": 2.1, "1mGain": 420, value: 26400, valuePct: 26, gainPct: 2.5 },
  ],
  "YTD": [
    { ticker: "AAPL", company: "Apple", qty: 120, price: 172, "1mReturn": 12.5, "1mGain": 2400, value: 20640, valuePct: 20, gainPct: 11.8 },
    { ticker: "MSFT", company: "Microsoft", qty: 80, price: 330, "1mReturn": 9.8, "1mGain": 2100, value: 26400, valuePct: 26, gainPct: 10.1 },
  ],
};

// Endpoint with filter
app.get("/api/holdings", (req, res) => {
  const { period = "1M" } = req.query;
  res.json(holdingsByPeriod[period] || holdingsByPeriod["1M"]);
});

// Treemap data
app.get("/api/treemap", (req, res) => {
  res.json([
    { name: "Tech", size: 120, fill: "#1f77b4" },
    { name: "Healthcare", size: 80, fill: "#ff7f0e" },
    { name: "Energy", size: 60, fill: "#2ca02c" },
  ]);
});

// Pie chart data
app.get("/api/pie", (req, res) => {
  res.json([
    { name: "Technology", value: 43445 },
    { name: "Healthcare", value: 40140 },
    { name: "Energy", value: 17387 },
  ]);
});

// Line chart data
app.get("/api/line", (req, res) => {
  res.json([
    { date: "2024-01", dogs: 100, sp500: 100 },
    { date: "2024-02", dogs: 102, sp500: 104 },
    { date: "2024-03", dogs: 98, sp500: 106 },
    { date: "2024-04", dogs: 110, sp500: 109 },
  ]);
});

app.listen(PORT, () => {
  console.log(`✅ Mock API running on http://localhost:${PORT}`);
});
