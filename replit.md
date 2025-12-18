# Task Board Application

## Project Overview
A modern, full-stack task management application built with React, Tailwind CSS, and Flask. Features a beautiful UI with task priority levels, productivity tracking, and real-time updates.

## Project Structure
```
/home/runner/workspace/
├── main.py                 # Flask backend API (port 5001)
├── package.json           # Frontend dependencies
├── vite.config.js         # Vite dev server config
├── tailwind.config.js     # Tailwind CSS config
├── index.html             # HTML entry point
├── src/
│   ├── main.jsx           # React entry point
│   ├── App.jsx            # Main app component with state management
│   ├── index.css          # Global styles with Tailwind
│   └── components/
│       ├── TaskInput.jsx  # Task creation form
│       ├── TaskList.jsx   # Task list container
│       ├── TaskItem.jsx   # Individual task component
│       ├── ProgressBar.jsx # Progress indicator
│       └── Stats.jsx      # Statistics display
├── tasks.json             # Task data persistence file
└── .replit               # Replit configuration
```

## Features Implemented

### Core Features (Required)
✅ **Add Task** - Input box with priority selector
✅ **View Tasks** - List display with title, checkbox, delete button
✅ **Complete Task** - Checkbox to mark tasks done
✅ **Delete Task** - Remove tasks from list
✅ **Progress Indicator** - Percentage-based progress bar with stats

### Backend API (Python Flask)
- `GET /api/tasks` - Fetch all tasks with progress data
- `POST /api/tasks` - Create new task with title and priority
- `PUT /api/tasks/{id}` - Update task (completion, priority, title)
- `DELETE /api/tasks/{id}` - Delete task
- `GET /api/stats` - Get comprehensive statistics

### Unique Features (Creative Additions)
1. **Priority System** - High/Medium/Low with visual indicators (color-coded dots and badges)
2. **Smart Sorting** - Filter tasks by Priority, Status, or Date Added
3. **Productivity Streak Tracking** - Displays when tasks completed today (🔥 indicator)
4. **Live Statistics Dashboard** - Shows completion count, total tasks, and streak
5. **Beautiful Gradient UI** - Modern design with Tailwind CSS
6. **Real-time Updates** - Frontend polls backend every second for live sync

## Technology Stack
- **Frontend**: React 19, Vite 7, Tailwind CSS 4, PostCSS
- **Backend**: Flask, Flask-CORS
- **Storage**: JSON file-based persistence
- **Styling**: Tailwind CSS with responsive design

## How to Use

### Start Application
The app runs automatically via workflow:
```bash
npm run dev           # Frontend on http://localhost:5000
python main.py        # Backend on http://localhost:5001
```

### Task Management
1. Enter task title in input box
2. Select priority (Low/Medium/High)
3. Click "Add Task"
4. Check checkbox to mark complete
5. Change priority via dropdown
6. Delete button to remove task
7. Sort dropdown to organize tasks

## Data Persistence
Tasks are stored in `tasks.json` and persist during the session.

## Design Highlights
- Clean, professional UI with gradient background
- Color-coded priority indicators
- Responsive layout
- Smooth transitions and interactions
- Clear visual feedback for all actions
- Accessible form controls

## API Response Example
```json
{
  "tasks": [
    {
      "id": 1,
      "title": "Complete project documentation",
      "priority": "high",
      "completed": false,
      "created_at": "2025-12-18T14:10:15.583199",
      "completed_date": null
    }
  ],
  "progress": 0.0,
  "completed": 0,
  "total": 1,
  "streak_date": null
}
```

## Workflow Status
- ✅ Frontend (Vite) running on port 5000
- ✅ Backend (Flask) running on port 5001
- ✅ CORS enabled for cross-origin requests
- ✅ Real-time synchronization working
