import React from 'react';
import uuid from "react-uuid";
import Sidebar from './Sidebar';
import "./App.css";
import Main from './Main'; 

export default function App() {
const [notes, setNotes] = React.useState([]);
const [activeNote, setActiveNote] = React.useState(false);

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


