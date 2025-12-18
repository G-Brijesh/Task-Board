#!/usr/bin/env python3
import os
import json
from datetime import datetime
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

TASKS_FILE = "tasks.json"
tasks = []
last_completed_date = None

def load_tasks():
    global tasks
    if os.path.exists(TASKS_FILE):
        try:
            with open(TASKS_FILE, "r") as f:
                tasks = json.load(f)
        except:
            tasks = []
    return tasks

def save_tasks():
    with open(TASKS_FILE, "w") as f:
        json.dump(tasks, f, indent=2)

def update_streak():
    global last_completed_date
    today = datetime.now().strftime("%Y-%m-%d")
    
    # Check if any task was completed today
    any_completed_today = any(t.get("completed_date") == today for t in tasks)
    
    if any_completed_today:
        last_completed_date = today
    
    return last_completed_date

@app.route("/api/tasks", methods=["GET"])
def get_tasks():
    load_tasks()
    update_streak()
    completed = sum(1 for t in tasks if t.get("completed"))
    total = len(tasks)
    progress = (completed / total * 100) if total > 0 else 0
    
    return jsonify({
        "tasks": tasks,
        "progress": progress,
        "completed": completed,
        "total": total,
        "streak_date": last_completed_date
    })

@app.route("/api/tasks", methods=["POST"])
def add_task():
    data = request.json
    task = {
        "id": max((t.get("id", 0) for t in tasks), default=0) + 1,
        "title": data.get("title", "Untitled"),
        "priority": data.get("priority", "medium"),
        "completed": False,
        "completed_date": None,
        "created_at": datetime.now().isoformat()
    }
    tasks.append(task)
    save_tasks()
    return jsonify(task), 201

@app.route("/api/tasks/<int:task_id>", methods=["PUT"])
def update_task(task_id):
    global last_completed_date
    data = request.json
    task = next((t for t in tasks if t["id"] == task_id), None)
    
    if not task:
        return jsonify({"error": "Task not found"}), 404
    
    if "completed" in data:
        task["completed"] = data["completed"]
        if data["completed"]:
            task["completed_date"] = datetime.now().strftime("%Y-%m-%d")
            last_completed_date = task["completed_date"]
        else:
            task["completed_date"] = None
    
    if "title" in data:
        task["title"] = data["title"]
    
    if "priority" in data:
        task["priority"] = data["priority"]
    
    save_tasks()
    return jsonify(task)

@app.route("/api/tasks/<int:task_id>", methods=["DELETE"])
def delete_task(task_id):
    global tasks
    tasks = [t for t in tasks if t["id"] != task_id]
    save_tasks()
    return "", 204

@app.route("/api/stats", methods=["GET"])
def get_stats():
    load_tasks()
    update_streak()
    total = len(tasks)
    completed = sum(1 for t in tasks if t.get("completed"))
    
    priority_counts = {"low": 0, "medium": 0, "high": 0}
    for t in tasks:
        priority_counts[t.get("priority", "medium")] += 1
    
    return jsonify({
        "total_tasks": total,
        "completed_tasks": completed,
        "completion_rate": (completed / total * 100) if total > 0 else 0,
        "by_priority": priority_counts,
        "streak_date": last_completed_date
    })

if __name__ == "__main__":
    load_tasks()
    app.run(host="0.0.0.0", port=5001, debug=False)
