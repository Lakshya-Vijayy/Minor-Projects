import { useEffect, useState, useRef } from 'react';
import '../styles/TaskForm.css';

function TaskForm({ onAddTask, editingTask, onUpdateTask, onCancelEdit }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const formSectionRef = useRef(null);
  const titleInputRef = useRef(null);

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description || '');
      setDueDate(editingTask.dueDate || '');

      formSectionRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    } else {
      setTitle('');
      setDescription('');
      setDueDate('');
    }
  }, [editingTask]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim()) return;

    if (editingTask) {
      onUpdateTask({
        ...editingTask,
        title: title.trim(),
        description: description.trim(),
        dueDate,
      });
    } else {
      onAddTask({
        id: Date.now(),
        title: title.trim(),
        description: description.trim(),
        dueDate,
        completed: false,
      });
    }

    setTitle('');
    setDescription('');
    setDueDate('');
    titleInputRef.current?.blur();
  };

  const handleCancel = () => {
    onCancelEdit();
  };

  return (
    <section
      className={`task-form-section ${editingTask ? 'editing' : ''}`}
      ref={formSectionRef}
    >
      <h3>{editingTask ? 'Edit Task' : 'Add a New Task'}</h3>

      <form className="task-form" onSubmit={handleSubmit}>
        <input
          ref={titleInputRef}
          type="text"
          name="title"
          placeholder="What needs to be done?"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />

        <textarea
          name="description"
          placeholder="Add a description..."
          rows="3"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <div className="task-form__bottom">
          <input
            type="date"
            name="dueDate"
            value={dueDate}
            onChange={(event) => setDueDate(event.target.value)}
          />

          <div className="task-form__buttons">
            <button type="submit">
              {editingTask ? 'Update Task' : '+ Add Task'}
            </button>

            {editingTask && (
              <button
                type="button"
                className="cancel-btn"
                onClick={handleCancel}
              >
                Cancel
              </button>
            )}
          </div>
        </div>
      </form>
    </section>
  );
}

export default TaskForm;