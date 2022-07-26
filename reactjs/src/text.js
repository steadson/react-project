
import React, {useState, useEffect } from "react";
import users from './user.json'
export default function Dynamic() {
   

 const random=Math.floor(Math.random()*users.length)
 const[listUser, setlistUser]=useState([ ])
const   colors=["red", "white", "green", "violet", "yellow","transparent","blue","orange","purple","black"]
const  colorRandom=Math.floor(Math.random()*colors.length) 
//handle add
const handleAdd=()=>{
   setlistUser(prev=>[...prev, users[random]]) 

}

//handle delete
const handledelete=(id)=>{
    console.log("testing delete", id);
    const n=listUser.filter(item=>{return item.id!==id})
    setlistUser(n);
  //  setlistUser(prev=>prev.filter(user=> {return user.id!==id})) 
}
 return<><div className="container">
 {listUser.map((user)=>{
      
      
     return <div className="listed" style={{background:colors[colorRandom],color:colors[colorRandom]==='black'?'white':'black'}} onClick={()=>handledelete(user.id)} key={user}>
         
         <h3>ID: {user.id}</h3>
<h3>TITLE: {user.title}</h3>
<h4>BODY:{user.body}</h4>
         

     </div>
 })}</div>
 <button onClick={handleAdd}>Add user</button>
 </>
}