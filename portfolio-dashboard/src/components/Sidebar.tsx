import React from "react";

const menuItems = [
  { name: "Dashboard", active: true },
  { name: "Holdings", active: false },
  { name: "Performance", active: false },
  { name: "Analytics", active: false },
  { name: "Reports", active: false },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-sm border-r min-h-screen">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Portfolio</h2>
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.name}
              className={`w-full text-left px-3 py-2 rounded transition-colors ${
                item.active
                  ? "bg-blue-100 text-blue-700 font-medium"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {item.name}
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
}