import React, { useEffect, useState } from "react";
import TaskList from "./components/TaskList";
import axios from "axios";
import "./App.css";

const API_URL = "http://localhost:5000/api/tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);

  const fetchTasks = async () => {
    const res = await axios.get(API_URL);
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleSubmit = async () => {
    if (!input.trim()) return;
    if (editId) {
      await axios.put(`${API_URL}/${editId}`, { title: input });
      setEditId(null);
    } else {
      await axios.post(API_URL, { title: input });
    }
    setInput("");
    fetchTasks();
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchTasks();
  };

  const toggleComplete = async (task) => {
    await axios.put(`${API_URL}/${task._id}`, { completed: !task.completed });
    fetchTasks();
  };

  const startEdit = (task) => {
    setEditId(task._id);
    setInput(task.title);
  };

  return (
    <div className="app-container">
      <h1 className="title">To-Do App</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter your task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSubmit}>{editId ? "Update" : "Add Task"}</button>
      </div>
      <TaskList
        tasks={tasks}
        onDelete={handleDelete}
        onToggle={toggleComplete}
        onEdit={startEdit}
      />
    </div>
  );
}

export default App;
