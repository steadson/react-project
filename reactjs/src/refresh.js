import { useState, useEffect } from "react";
import users from "./user.json"

export default function Refresh(){

const[list, setlist]=useState([ ])
const random=Math.floor(Math.random()*users.length)
const   colors=["red", "white", "green", "violet", "yellow","blueviolet","blue","orange","purple","black"]
const  colorRandom=Math.floor(Math.random()*colors.length) 
const first=users[random]
const user= (<div className="listed1" style={{background:colors[colorRandom] ,color:(colors[colorRandom]==='black')?'white':'black'}} key={first.id}>
     <h3>ID: {first.id}</h3>
<h3>TITLE: {first.title}</h3>
<h4>BODY:{first.body}</h4>

</div>)

const handleAdd=()=>{

  setlist(prev=>[...prev, user])
  console.log('adding');
}
const deleteUser=(id)=>{
const n=list.filter(user=>{return user!==id})
setlist(n)
console.log('deleting');
}
  return<><div className="container1">
  {list.map(user=>{
    return <div key={user}  onClick={()=>deleteUser(user)} >{user}</div>
  })}</div>
  <button onClick={handleAdd}>Add list</button>
  </>

} 