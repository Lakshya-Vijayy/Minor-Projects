import NoteItem from './NoteItem';
import '../styles/NoteList.css';

function NoteList({ notes, onEditNote, onDeleteNote }) {
  return (
    <section className="note-list">
      <div className="note-list__header">
        <h2>Your Notes</h2>
        <span>{notes.length} {notes.length === 1 ? 'note' : 'notes'}</span>
      </div>

      {notes.length === 0 ? (
        <div className="note-list__empty">
          <span>✎</span>
          <h3>No notes yet</h3>
          <p>Your ideas deserve a place. Create your first note!</p>
        </div>
      ) : (
        <div className="note-list__grid">
          {notes.map((note) => (
            <NoteItem
              key={note.id}
              note={note}
              onEditNote={onEditNote}
              onDeleteNote={onDeleteNote}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default NoteList;