

export default function Main( {activeNote }){
const onEditField=(key, value) => {};


   return (
   <div className="app-main">
      <div className="app-main-note-edit">
         <input type="text" 
         id="title" 
         value={activeNote.title} 
         onChange={(e) => onEditField("title", e.target.value)}
         autoFocus></input>
    
     <textarea id="body" 
     placeholder="Write your note here . . ." 
     onChange={(e) => onEditField("body", e.target.value)}
     value={activeNote.body}
     ></textarea>
      </div>

      <div className="app-mainnote-preview">
         <h1 className="preview-title">{activeNote.title}</h1>
         <div className="markdown-preview">{activeNote.body}</div>
      </div>

   </div>
      )
}