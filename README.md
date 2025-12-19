# Task Board 📋

A modern, full-stack task management application built with React, Tailwind CSS, and Flask. Stay organized, track your productivity, and manage your tasks with style.

![Task Board Demo](https://via.placeholder.com/800x400?text=Task+Board+Application)

## ✨ Features

### Core Functionality
- ✅ **Create Tasks** - Add new tasks with priority levels (High, Medium, Low)
- ✅ **Complete Tasks** - Mark tasks as done with a single click
- ✅ **Delete Tasks** - Remove completed or unwanted tasks
- ✅ **Priority Management** - Change task priority on-the-fly
- ✅ **Progress Tracking** - Real-time progress bar showing completion percentage

### Advanced Features
- 🎯 **Smart Sorting** - Sort tasks by Priority, Status, or Date Added
- 🔥 **Productivity Streak** - Tracks your daily task completion streak
- 📊 **Live Statistics** - Dashboard showing completed count, total tasks, and streak status
- 🎨 **Beautiful UI** - Modern gradient design with Tailwind CSS
- ⚡ **Real-time Sync** - Frontend automatically syncs with backend every second
- 🎨 **Color-coded Priorities** - Visual indicators for task importance

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern UI library
- **Vite** - Lightning-fast build tool
- **Tailwind CSS 4** - Utility-first styling
- **PostCSS** - CSS processing

### Backend
- **Python 3.11** - Server language
- **Flask** - Lightweight web framework
- **Flask-CORS** - Cross-origin request handling

### Storage
- **JSON** - File-based task persistence

## 🚀 Getting Started

### Prerequisites
- Node.js 20+
- Python 3.11+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/task-board.git
   cd task-board
   ```

2. **Install dependencies**
   ```bash
   # Install Python backend dependencies
   pip install flask flask-cors

   # Install Node.js frontend dependencies
   npm install
   ```

3. **Start the application**
   ```bash
   # Run both backend and frontend
   python main.py & npm run dev
   ```

   Or run them separately:
   ```bash
   # Terminal 1 - Backend
   python main.py

   # Terminal 2 - Frontend
   npm run dev
   ```

4. **Access the app**
   - Frontend: http://localhost:5000
   - Backend API: http://localhost:5001

## 📖 Usage

### Adding a Task
1. Enter task description in the input field
2. Select priority (Low, Medium, High)
3. Click "Add Task"

### Managing Tasks
- **Complete**: Check the checkbox to mark complete
- **Change Priority**: Use the dropdown to adjust importance
- **Delete**: Click delete button to remove task
- **Sort**: Use the "Sort by" dropdown to organize tasks

### Tracking Progress
- View your completion percentage in the progress bar
- Check the statistics dashboard for total/completed counts
- Monitor your daily productivity streak

## 🔌 API Documentation

### Base URL
```
http://localhost:5001/api
```

### Endpoints

#### Get All Tasks
```http
GET /api/tasks
```

**Response:**
```json
{
  "tasks": [
    {
      "id": 1,
      "title": "Complete project",
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

#### Create Task
```http
POST /api/tasks
Content-Type: application/json

{
  "title": "Task description",
  "priority": "medium"
}
```

**Response:** Created task object with ID

#### Update Task
```http
PUT /api/tasks/{id}
Content-Type: application/json

{
  "completed": true,
  "priority": "high",
  "title": "Updated title"
}
```

#### Delete Task
```http
DELETE /api/tasks/{id}
```

#### Get Statistics
```http
GET /api/stats
```

**Response:**
```json
{
  "total_tasks": 5,
  "completed_tasks": 3,
  "completion_rate": 60.0,
  "by_priority": {
    "high": 2,
    "medium": 2,
    "low": 1
  },
  "streak_date": "2025-12-19"
}
```

## 📁 Project Structure

```
task-board/
├── main.py                      # Flask backend server
├── package.json                 # Node.js dependencies
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS config
├── postcss.config.js           # PostCSS configuration
├── index.html                  # HTML entry point
├── tasks.json                  # Task data persistence
├── src/
│   ├── main.jsx                # React entry point
│   ├── App.jsx                 # Main application component
│   ├── index.css               # Global styles
│   └── components/
│       ├── TaskInput.jsx       # Task creation form
│       ├── TaskList.jsx        # Task list container
│       ├── TaskItem.jsx        # Individual task component
│       ├── ProgressBar.jsx     # Progress indicator
│       └── Stats.jsx           # Statistics display
└── README.md                   # This file
```


```

##  Available Scripts

### Frontend
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

### Backend
```bash
python main.py   # Start Flask server on port 5001
```



