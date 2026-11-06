
import { useState, useEffect } from 'react';

import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FilterButtons from './components/FilterButtons';
import TaskStats from './components/TaskStats';

import './styles/global.css';
import './styles/Dashboard.css';

function App() {
  // Load saved tasks from Local Storage
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Store the currently selected filter
  const [activeFilter, setActiveFilter] = useState('All');

  // Store the task currently being edited
  const [editingTask, setEditingTask] = useState(null);

  // Save tasks whenever the task list changes
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task
  const addTask = (newTask) => {
    setTasks((previousTasks) => [...previousTasks, newTask]);
  };

  // Complete or uncomplete a task
  const toggleTask = (taskId) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  // Delete a task
  const deleteTask = (taskId) => {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== taskId)
    );

    if (editingTask?.id === taskId) {
      setEditingTask(null);
    }
  };

  // Find a task to edit
  const editTask = (task) => {
    const selectedTask = tasks.find(
      (item) => item.id === task.id
    );

    if (selectedTask) {
      setEditingTask(selectedTask);
    }
  };

  // Update an existing task
  const updateTask = (updatedTask) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );

    setEditingTask(null);
  };

  // Display tasks according to the selected filter
  const filteredTasks = tasks.filter((task) => {
    if (activeFilter === 'Completed') {
      return task.completed;
    }

    if (activeFilter === 'Pending') {
      return !task.completed;
    }

    return true;
  });

  return (
    <div className="app">
      <Header />

      <main className="dashboard">
        <div className="dashboard__intro">
          <h2>My Tasks</h2>
          <p>Stay organized and get things done.</p>
        </div>

        <TaskStats tasks={tasks} />

        <TaskForm
          onAddTask={addTask}
          editingTask={editingTask}
          onUpdateTask={updateTask}
        />

        <FilterButtons
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        <TaskList
          tasks={filteredTasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
          onEdit={editTask}
        />
      </main>
    </div>
  );
}

export default App;
