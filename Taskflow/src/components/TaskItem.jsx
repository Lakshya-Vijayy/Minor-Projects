import '../styles/TaskItem.css';

function TaskItem({ task, onToggle, onDelete, onEdit }) {
  return (
    <article className={`task-item ${task.completed ? 'completed' : ''}`}>

      <div className="task-item__content">

        <div className="task-item__title-row">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
          />

          <h3>{task.title}</h3>

          <span className={`task-status ${task.completed ? 'status-completed' : 'status-pending'}`}>
            {task.completed ? 'Completed' : 'Pending'}
          </span>
        </div>

        {task.description && (
          <p className="task-item__description">
            {task.description}
          </p>
        )}

        {task.dueDate && (
          <p className="task-item__date">
            Due: {task.dueDate}
          </p>
        )}

      </div>

      <div className="task-item__actions">

        <button
          className="edit-btn"
          onClick={() => onEdit(task)}
          disabled={task.completed}
        >
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>

      </div>

    </article>
  );
}

export default TaskItem;