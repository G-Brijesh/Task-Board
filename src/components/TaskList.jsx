import React from 'react'
import TaskItem from './TaskItem'

function TaskList({ tasks, onToggleComplete, onDeleteTask, onUpdatePriority }) {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No tasks yet. Add one to get started!</p>
      </div>
    )
  }

  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onDeleteTask={onDeleteTask}
          onUpdatePriority={onUpdatePriority}
        />
      ))}
    </div>
  )
}

export default TaskList
