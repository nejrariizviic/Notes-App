import React, { useEffect } from 'react';
import uuid from "react-uuid";
import Sidebar from './Sidebar';
import "./App.css";
import Main from './Main'; 

export default function App() {
const [notes, setNotes] = React.useState(JSON.parse(localStorage.notes) || []);
const [activeNote, setActiveNote] = React.useState(false);


useEffect(() => {
  localStorage.setItem("notes", JSON.stringify(notes));
}, [notes]);


const onAddNote = () => {
  const newNote = {
    id: uuid(),
    title: "Untitled Note",
    body:"",
    lastModified: Date.now(),
  };

  setNotes ([newNote, ...notes]);
};

const onDeleteNote = (idToDelete) => {
  setNotes(notes.filter((note) => note.id !== idToDelete));
};


const getActiveNote = () => {
  return notes.find((note) => note.id === activeNote);
};

const onUpdateNote = (updateNote) => {
  const updateNotesArray=notes.map((note) => {
    if(note.id === activeNote) {
      return updateNote;
    }

    return note;
  })
  setNotes(updateNotesArray);
}


  return (
    <div className="App">
   <Sidebar notes={notes}
            onAddNote={onAddNote}
            onDeleteNote={onDeleteNote}
            activeNote={activeNote}
            setActiveNote={setActiveNote}/>
   
   <Main  activeNote={getActiveNote()}
   onUpdateNote={onUpdateNote}/>
    </div>
  );
}


