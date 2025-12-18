import React from 'react'

function Stats({ completed, total, streak }) {
  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
        <p className="text-sm text-indigo-600 font-medium">Completed</p>
        <p className="text-2xl font-bold text-indigo-700">{completed}</p>
      </div>
      <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
        <p className="text-sm text-purple-600 font-medium">Total Tasks</p>
        <p className="text-2xl font-bold text-purple-700">{total}</p>
      </div>
      <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
        <p className="text-sm text-orange-600 font-medium">Streak 🔥</p>
        <p className="text-2xl font-bold text-orange-700">{streak ? 'Active' : 'No streak'}</p>
      </div>
    </div>
  )
}

export default Stats
