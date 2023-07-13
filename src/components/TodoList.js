// TodoList.js
import React, { useState } from 'react';
import Task from './Task';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), title: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const markTaskCompleted = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            markCompleted={markTaskCompleted}
            removeTask={removeTask}
          />
        ))}
      </ul>
      <p>Total Tasks: {tasks.length}</p>
      <p>Completed Tasks: {tasks.filter((task) => task.completed).length}</p>
    </div>
  );
};

export default TodoList;
