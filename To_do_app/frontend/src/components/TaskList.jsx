import React from "react";
import "./TaskList.css";

const TaskList = ({ tasks, onDelete, onToggle, onEdit }) => {
  const pendingTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  const renderTask = (task) => (
    <div key={task._id} className={`task ${task.completed ? "completed" : ""}`}>
      <span className="task-title">{task.title}</span>
      <div className="task-buttons">
        <button onClick={() => onToggle(task)}>{task.completed ? "↩" : "✔"}</button>
        <button onClick={() => onEdit(task)}>✏️</button>
        <button onClick={() => onDelete(task._id)}>🗑️</button>
      </div>
    </div>
  );

  return (
    <>
      <h3 className="section-title">🕒 Pending Tasks</h3>
      {pendingTasks.length === 0 ? (
        <p className="empty-text">🎉 All tasks are done!</p>
      ) : (
        pendingTasks.map(renderTask)
      )}

      <h3 className="section-title">✅ Completed Tasks</h3>
      {completedTasks.length === 0 ? (
        <p className="empty-text">Nothing completed yet.</p>
      ) : (
        completedTasks.map(renderTask)
      )}
    </>
  );
};

export default TaskList;
