import React, { useEffect, useState } from 'react';
import { fetchNotes } from '../services/noteService';

const NotesPage = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getNotes = async () => {
      const fetchedNotes = await fetchNotes();
      setNotes(fetchedNotes);
    };
    getNotes();
  }, []);

  return (
    <div>
      <h2>All Notes</h2>
      {notes.map(note => (
        <div key={note._id}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
        </div>
      ))}
    </div>
  );
};

export default NotesPage;
