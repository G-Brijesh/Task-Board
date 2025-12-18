import React from 'react'

const priorityColors = {
  high: 'bg-red-100 border-red-300 text-red-800',
  medium: 'bg-yellow-100 border-yellow-300 text-yellow-800',
  low: 'bg-green-100 border-green-300 text-green-800'
}

const priorityDots = {
  high: 'bg-red-500',
  medium: 'bg-yellow-500',
  low: 'bg-green-500'
}

function TaskItem({ task, onToggleComplete, onDeleteTask, onUpdatePriority }) {
  return (
    <div className={`flex items-center gap-3 p-4 border rounded-lg transition-all ${task.completed ? 'bg-gray-50 border-gray-200' : 'bg-white border-gray-200 hover:border-indigo-300'}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleComplete(task.id, task.completed)}
        className="w-5 h-5 text-indigo-600 rounded focus:ring-2 focus:ring-indigo-500 cursor-pointer"
      />

      <div className="flex-1">
        <p className={`text-lg ${task.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
          {task.title}
        </p>
      </div>

      <div className="flex items-center gap-2">
        <div className={`w-3 h-3 rounded-full ${priorityDots[task.priority]}`} title={`${task.priority} priority`} />
        
        <select
          value={task.priority}
          onChange={(e) => onUpdatePriority(task.id, e.target.value)}
          className={`px-2 py-1 text-xs font-medium border rounded cursor-pointer ${priorityColors[task.priority]}`}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <button
          onClick={() => onDeleteTask(task.id)}
          className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default TaskItem
