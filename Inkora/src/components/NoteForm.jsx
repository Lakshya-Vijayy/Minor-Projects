
import { useEffect, useState } from 'react';
import '../styles/NoteForm.css';

function NoteForm({ onAddNote, editingNote, onUpdateNote, onCancelEdit }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('Personal');

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setContent(editingNote.content);
      setCategory(editingNote.category);
    } else {
      setTitle('');
      setContent('');
      setCategory('Personal');
    }
  }, [editingNote]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) return;

    if (editingNote) {
      onUpdateNote({
        ...editingNote,
        title: title.trim(),
        content: content.trim(),
        category
      });
    } else {
      onAddNote({
        id: Date.now(),
        title: title.trim(),
        content: content.trim(),
        category,
        createdAt: new Date().toISOString()
      });
    }

    setTitle('');
    setContent('');
    setCategory('Personal');
  };

  const handleCancel = () => {
    setTitle('');
    setContent('');
    setCategory('Personal');
    onCancelEdit();
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <div className="note-form__header">
        <h2>{editingNote ? 'Edit your note' : 'Create a note'}</h2>
        <p>
          {editingNote
            ? 'Make changes to your thoughts.'
            : 'Put your thoughts into words.'}
        </p>
      </div>

      <input
        type="text"
        placeholder="Note title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Start writing your thoughts..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows="5"
      />

      <div className="note-form__footer">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Personal">Personal</option>
          <option value="Study">Study</option>
          <option value="Work">Work</option>
          <option value="Ideas">Ideas</option>
        </select>

        <div className="note-form__buttons">
          {editingNote && (
            <button
              type="button"
              className="note-form__cancel"
              onClick={handleCancel}
            >
              Cancel
            </button>
          )}

          <button type="submit">
            {editingNote ? 'Save Changes' : '+ Add Note'}
          </button>
        </div>
      </div>
    </form>
  );
}

export default NoteForm;
