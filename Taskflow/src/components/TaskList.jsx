import TaskItem from './TaskItem';
import '../styles/TaskList.css';

function TaskList({ tasks, onToggle, onDelete, onEdit }) {
  return (
    <section className="task-list-section">

      <div className="task-list__header">
        <h3>Your Tasks</h3>
        <span>{tasks.length} Tasks</span>
      </div>

      <div className="task-list">

        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={onToggle}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))
        ) : (
          <div className="task-empty">
            <h3>No tasks yet!</h3>
            <p>Add a new task to get your day started.</p>
          </div>
        )}

      </div>

    </section>
  );
}

export default TaskList;