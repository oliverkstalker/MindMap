import React, { useState } from 'react';
import NotesPage from './pages/NotesPage';
import NoteForm from './components/NoteForm';

function App() {
  const [notes, setNotes] = useState([]);

  const handleNoteCreated = (newNote) => {
    setNotes(prevNotes => [...prevNotes, newNote]);
  };

  return (
    <div className="App">
      <h1>My Note-Taking App</h1>
      <NoteForm onNoteCreated={handleNoteCreated} />
      <NotesPage />
    </div>
  );
}

export default App;
