import React, { useState, useEffect } from 'react'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import ProgressBar from './components/ProgressBar'
import Stats from './components/Stats'

// Use backend API through relative path - Vite proxy handles routing
const API_BASE = '/api'

function App() {
  const [tasks, setTasks] = useState([])
  const [progress, setProgress] = useState(0)
  const [completed, setCompleted] = useState(0)
  const [total, setTotal] = useState(0)
  const [streak, setStreak] = useState(null)
  const [sortBy, setSortBy] = useState('priority') // unique feature: sorting
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchTasks()
    const interval = setInterval(fetchTasks, 1000)
    return () => clearInterval(interval)
  }, [])

  const fetchTasks = async () => {
    try {
      const response = await fetch(`${API_BASE}/tasks`)
      const data = await response.json()
      setTasks(data.tasks)
      setProgress(data.progress)
      setCompleted(data.completed)
      setTotal(data.total)
      setStreak(data.streak_date)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching tasks:', error)
      setLoading(false)
    }
  }

  const handleAddTask = async (title, priority) => {
    try {
      const response = await fetch(`${API_BASE}/tasks`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, priority })
      })
      if (response.ok) {
        await fetchTasks()
      }
    } catch (error) {
      console.error('Error adding task:', error)
    }
  }

  const handleToggleComplete = async (id, completed) => {
    try {
      const response = await fetch(`${API_BASE}/tasks/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed: !completed })
      })
      if (response.ok) {
        await fetchTasks()
      }
    } catch (error) {
      console.error('Error updating task:', error)
    }
  }

  const handleDeleteTask = async (id) => {
    try {
      await fetch(`${API_BASE}/tasks/${id}`, { method: 'DELETE' })
      await fetchTasks()
    } catch (error) {
      console.error('Error deleting task:', error)
    }
  }

  const handleUpdatePriority = async (id, priority) => {
    try {
      const response = await fetch(`${API_BASE}/tasks/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priority })
      })
      if (response.ok) {
        await fetchTasks()
      }
    } catch (error) {
      console.error('Error updating task:', error)
    }
  }

  const getSortedTasks = () => {
    const sorted = [...tasks]
    if (sortBy === 'priority') {
      const priorityOrder = { high: 0, medium: 1, low: 2 }
      sorted.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority])
    } else if (sortBy === 'status') {
      sorted.sort((a, b) => (a.completed ? 1 : -1) - (b.completed ? 1 : -1))
    } else if (sortBy === 'date') {
      sorted.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    }
    return sorted
  }

  if (loading) {
    return <div className="flex items-center justify-center h-screen text-xl text-gray-600">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Task Board</h1>
          <p className="text-gray-600 mb-6">Stay organized and track your productivity</p>

          <Stats completed={completed} total={total} streak={streak} />

          <ProgressBar progress={progress} completed={completed} total={total} />

          <TaskInput onAddTask={handleAddTask} />

          <div className="mb-6 flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">Sort by:</label>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="priority">Priority</option>
              <option value="status">Status</option>
              <option value="date">Date Added</option>
            </select>
          </div>

          <TaskList
            tasks={getSortedTasks()}
            onToggleComplete={handleToggleComplete}
            onDeleteTask={handleDeleteTask}
            onUpdatePriority={handleUpdatePriority}
          />
        </div>
      </div>
    </div>
  )
}

export default App
