// Task.js
import React from 'react';

const Task = ({ task, markCompleted, removeTask }) => {
  const { id, title, completed } = task;

  return (
    <li>
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {title}
      </span>
      <button onClick={() => markCompleted(id)}>
        {completed ? 'Mark Incomplete' : 'Mark Complete'}
      </button>
      <button onClick={() => removeTask(id)}>Remove</button>
    </li>
  );
};

export default Task;
