import React, { useState } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { name: "Task 1", status: "done" },
    { name: "Task 2", status: "not done" },
    { name: "Task 3", status: "done" }
  ]);

  const toggleStatus = (taskName) => {
    setTasks(tasks.map(task =>
      task.name === taskName ? { ...task, status: task.status === "done" ? "not done" : "done" } : task
    ));
  };

  return (
    <div>
      <h1>Employee Task Management</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task.name} - {task.status}</span>
            <button onClick={() => toggleStatus(task.name)}>
              Toggle Status
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
