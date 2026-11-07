import { useEffect, useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import CategoryFilter from './components/CategoryFilter';
import './App.css';

function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('inkora-notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [editingNote, setEditingNote] = useState(null);

  useEffect(() => {
    localStorage.setItem('inkora-notes', JSON.stringify(notes));
  }, [notes]);

  const handleAddNote = (newNote) => {
    setNotes((prevNotes) => [newNote, ...prevNotes]);
  };

  const handleEditNote = (note) => {
    setEditingNote(note);
  };

  const handleUpdateNote = (updatedNote) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === updatedNote.id ? updatedNote : note
      )
    );

    setEditingNote(null);
  };

  const handleDeleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));

    if (editingNote?.id === id) {
      setEditingNote(null);
    }
  };

  const filteredNotes = notes.filter((note) => {
    const matchesSearch =
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      activeCategory === 'All' || note.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="app">
      <Header />

      <main className="app__main">
        <section className="app__toolbar">
          <SearchBar
            searchTerm={searchTerm}
            onSearch={setSearchTerm}
          />

          <CategoryFilter
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </section>

        <section className="app__content">
          <NoteForm
            onAddNote={handleAddNote}
            editingNote={editingNote}
            onUpdateNote={handleUpdateNote}
            onCancelEdit={() => setEditingNote(null)}
          />

          <NoteList
            notes={filteredNotes}
            onEditNote={handleEditNote}
            onDeleteNote={handleDeleteNote}
          />
        </section>
      </main>
    </div>
  );
}

export default App;