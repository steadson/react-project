import React from "react";
import { useState, useEffect } from "react";

export default function NoteEditor(){
const [allnotes, setallnotes]=useState([])
const[idd, setidd]=useState(1)
const [currentNote, setcurrentNote]=useState(allnotes[0] ||{value:"newnote 0", name:"note 0", id:0 })
const[noteDisplay, setnoteDisplay]=useState(" ")
const[update, setupdate]=useState('')
const[display2, setdisplay2]=useState("")



function createNew(){
 setidd(idd+1)

 const noteitem={
  value:"new note "+idd,name:"note "+idd, id:idd
}

setallnotes(prev=>{return [...prev, noteitem]})
setcurrentNote(prev=>{
   return  {...prev, value:noteitem.value, name:noteitem.name,id:noteitem.id}}
)
setupdate(noteitem.value)
console.log(currentNote);
 }
//const notes=allnotes.map(note=>{return<div>
 //   <h3 key={note.id}>{note.name}</h3>
    
   //  </div>
   // })
 
   function updateValue(e){
   // setupdate(e.target.value)
   // setdisplay2(update)
  
   setallnotes(prev=>prev.map(ele=>{return ele.id===currentNote.id?{...ele, value:e}:ele}))
   console.log("ruuning update");

   }

   function displayValue(id){
      
      allnotes.map(ele=>{
         if(ele.id===id){
            setnoteDisplay(ele.value)
            setcurrentNote(prev=>{
               return  {...prev, value:ele.value, name:ele.name,id:ele.id}}
            )
           

         }
         else{
            return ele
         }
         console.log(currentNote.value, currentNote.id, currentNote.name);
      })
   }
   return <>
     <button className="note-btn" onClick={createNew}>Add note</button>
     
   {allnotes.map(note=>{return <div key={note.id} >
      
    <h1 key={note.id} onClick={(e)=>displayValue(note.id)}>{note.name} </h1>
       </div>}
        
      )}
 <div>{noteDisplay}</div>
 <input type='text' onChange={()=>updateValue(Event.target.value )} value={currentNote.value}/>
 <h3>{display2}</h3>
   </>

}