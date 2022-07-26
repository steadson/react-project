import { useState } from "react";




export default function Test(props){

    //multiple form from w3school. bug
    const[formData, setFormData]=useState({})
    const Name=FormData.userName

    function handleForm(e){
        let names=e.target.name;
        let values=e.trget.value;
        setFormData(prevFormData=>({
                ...prevFormData,
                [names]:values
            
        }))
    }

    //text area
    const[textarea, settextarea]=useState(" ")
    const handletextarea=(e)=>{
        settextarea(e.target.value);
    }

    //multiple form from youtube tutor. good
    const [registration, setregistration]=useState({age:"", address:'',comment:""})

    const handleres=(e)=>{
        setregistration(prevreg=>{
            return {
                ...prevreg,
                [e.target.name]:e.target.value
            }
        })

    }
    //select
    const[color, setcolor]=useState('choose')
    const handlecolor=(e)=>{
        setcolor(e.target.value)
    }

    //single form entry
    const [gmail, setgmail]=useState('');
    const handleGmail=(e)=>{
        setgmail(e.target.value)
    }

    return<><form>
        <label>Enter Name: <input name="userName" type="text"
        onChange={handleForm} value={formData.userName}/></label>
        <br/>

        <label>Enter Number: <input name="number" type="text"
        onChange={handleForm} value={formData.number}/></label>
<br/>
    <label>Enter Gmail:<input onChange={handleGmail}
     value={gmail} type="text"/></label>
<br/>
      <label>Enter age: <input name="age" type="text"
        onChange={handleres} value={registration.age}/></label>
        <br/>
        <label>Enter address: <input name="address" type="text"
        onChange={handleres} value={registration.address}/></label>
        <br/>
<label>comment<textarea onChange={handleres} 
value={registration.comment} name='comment' placeholder="comment" /></label>
<select onChange={handlecolor} 
value={color}
>
    <option value=" ">--choose--</option>
    <option value="red">red</option>
    <option value="green">green</option>
    <option value="blue">blue</option>
</select>
    </form>
    <br/>
    <textarea placeholder="comment" 
    value={textarea}
     onChange={handletextarea} 
    />
    <h1>{formData.userName}</h1>
    <h1>{gmail}</h1>
        <h1>{registration.age}</h1>
        <h1>{registration.address}</h1>
        <h1>{registration.comment}</h1>
        <h1>{textarea}</h1>
        <h1>{color}</h1>
        
        </>
  
    
}