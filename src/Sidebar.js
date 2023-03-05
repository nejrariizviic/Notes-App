

export default function Sidebar({ notes, onAddNote }){

   return (
   <div className="app-sidebar">
      <div className="app-sidebar-header">
         <h1>Notes</h1>
         <button onClick={onAddNote}>Add</button>
      </div>
      <div className="app-sidebar-notes">
      {notes.map((note) => (
            <div className="app-sidebar-note">
            <div className="sidebar-note-title">
               <strong>{note.title}</strong>
               <button>Delete</button>
            </div>
            <p>{note.body}</p>

            <small className="note-meta" > Last modified {note.lastModified}</small>
         </div>
      ))}
      
      </div>
   </div>
      )
}