

export default function Sidebar(){
   return (
   <div className="app-sidebar">
      <div className="app-sidebar-headre">
         <h1>Notes</h1>
         <button>Add</button>
      </div>
      <div className="app-sidebar-notes">
         <div className="app-sidebar-note">
            <div className="sidebar-note-title">
               <strong>TITLE</strong>
               <button>Delete</button>
            </div>
            <p>Note preview</p>

            <small className="note-meta" > Last modified [date]</small>
         </div>
      </div>
   </div>
      )
}