import '../styles/TaskForm.css';

function TaskForm({ onAddTask }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const newTask = {
      id: Date.now(),
      title: form.title.value.trim(),
      description: form.description.value.trim(),
      dueDate: form.dueDate.value,
      completed: false,
    };

    if (!newTask.title) return;

    onAddTask(newTask);

    form.reset();
  };

  return (
    <section className="task-form-section">
      <h3>Add a New Task</h3>

      <form className="task-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="What needs to be done?"
          required
        />

        <textarea
          name="description"
          placeholder="Add a description..."
          rows="3"
        />

        <div className="task-form__bottom">
          <input
            type="date"
            name="dueDate"
          />

          <button type="submit">
            + Add Task
          </button>
        </div>
      </form>
    </section>
  );
}

export default TaskForm;