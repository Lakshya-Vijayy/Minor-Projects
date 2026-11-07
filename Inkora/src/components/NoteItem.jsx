import '../styles/NoteItem.css';

function NoteItem({ note, onEditNote, onDeleteNote }) {
  const formattedDate = new Date(note.createdAt).toLocaleDateString(
    'en-IN',
    {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }
  );

  return (
    <article className="note-item">
      <div className="note-item__top">
        <span className="note-item__category">{note.category}</span>
        <span className="note-item__date">{formattedDate}</span>
      </div>

      <h3 className="note-item__title">{note.title}</h3>

      <p className="note-item__content">{note.content}</p>

      <div className="note-item__actions">
        <button
          className="note-item__edit"
          onClick={() => onEditNote(note)}
        >
          Edit
        </button>

        <button
          className="note-item__delete"
          onClick={() => onDeleteNote(note.id)}
        >
          Delete
        </button>
      </div>
    </article>
  );
}

export default NoteItem;