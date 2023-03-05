import React from 'react';
import uuid from "react-uuid";
import Sidebar from './Sidebar';
import "./App.css";
import Main from './Main'; 

export default function App() {
const [notes, setNotes] = React.useState([]);

const onAddNote = () => {
  const newNote = {
    id: uuid(),
    title: "Untitled Note",
    body:"",
    lastModified: Date.now(),
  };

  setNotes ([newNote, ...notes]);
};



  return (
    <div className="App">
   <Sidebar notes={notes} onAddNote={onAddNote}/>
   <Main/>
    </div>
  );
}


