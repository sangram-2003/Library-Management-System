import React from 'react'

function Dashboard() {
  return (
        <div className="flex-1 px-6 py-3 bg-gray-100 min-h-screen">

      
      <h1 className="text-2xl font-semibold text-gray-700 mb-4">
        Dashboard
      </h1>
      <div className="grid grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-xl shadow-sm flex justify-between items-center">
          <div>
            <p className="text-gray-500">Total Books</p>
            <h2 className="text-3xl font-bold text-black">999</h2>
          </div>

          <div className="bg-blue-100 text-blue-600 p-3 rounded-lg text-xl">
            📘
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm flex justify-between items-center">
          <div>
            <p className="text-gray-500">Available</p>
            <h2 className="text-3xl font-bold text-green-600">xxx</h2>
          </div>

          <div className="bg-green-100 text-green-600 p-3 rounded-lg text-xl">
            ✔
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm flex justify-between items-center">
          <div>
            <p className="text-gray-500">Students</p>
            <h2 className="text-3xl font-bold text-purple-600">xxx</h2>
          </div>

          <div className="bg-purple-100 text-purple-600 p-3 rounded-lg text-xl">
            👤
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm flex justify-between items-center">
          <div>
            <p className="text-gray-500">Pending</p>
            <h2 className="text-3xl font-bold text-yellow-600">xxx</h2>
          </div>

          <div className="bg-yellow-100 text-yellow-600 p-3 rounded-lg text-xl">
            ⏰
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm flex justify-between items-center">
          <div>
            <p className="text-gray-500">Active Loans</p>
            <h2 className="text-3xl font-bold text-pink-600">xxx</h2>
          </div>

          <div className="bg-pink-100 text-pink-600 p-3 rounded-lg text-xl">
            📈
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm flex justify-between items-center">
          <div>
            <p className="text-gray-500">Returned</p>
            <h2 className="text-3xl font-bold text-teal-600">xxx</h2>
          </div>

          <div className="bg-teal-100 text-teal-600 p-3 rounded-lg text-xl">
            ⚠
          </div>
        </div>

      </div>

    </div>
    
  )
}

export default Dashboard