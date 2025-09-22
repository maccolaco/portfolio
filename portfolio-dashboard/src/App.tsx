import React from 'react'
import Topbar from './components/Topbar'
import Sidebar from './components/Sidebar'
import DashboardLayout from './components/DashboardLayout'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Topbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <DashboardLayout />
        </main>
      </div>
    </div>
  )
}

export default App