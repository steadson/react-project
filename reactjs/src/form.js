import { useState } from "react"
export function Form(){

const[name, setname]=useState('');
const[number, setnumber]=useState('');
const Myname=name;
const Mynum=number;
const handlesubmit=(e)=>e.preventDefault(); 
const handlechange=(e)=>setnumber(e.target)

return<>
<form onSubmit={handlesubmit}>
<label>Name: 
    <input type="text" onChange={(e)=>setname(e.target.value)}/>
</label>
<label>Number: 
    <input type="number" onChange={(e)=>setnumber(e.target.value)}/>
</label>
</form>
<p>{Myname} {Mynum}</p>
</>
}