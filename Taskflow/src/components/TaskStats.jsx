function TaskStats({ tasks }) {
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const pendingTasks = tasks.filter(
    (task) => !task.completed
  ).length;

  return (
    <section className="task-stats">

      <div className="stat-card">
        <span className="stat-label">Total Tasks</span>
        <h2>{totalTasks}</h2>
      </div>

      <div className="stat-card">
        <span className="stat-label">Pending</span>
        <h2>{pendingTasks}</h2>
      </div>

      <div className="stat-card">
        <span className="stat-label">Completed</span>
        <h2>{completedTasks}</h2>
      </div>

    </section>
  );
}

export default TaskStats;