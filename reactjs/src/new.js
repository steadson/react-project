import { useState, useMemo, memo, useEffect, useRef, useContext,createContext, useCallback} from "react";
import users from './user.json'

/*export default function Myform(){
    const [name, setname]=useState("")
    const handleName=(e)=>{
        setname(e.target.value);
    }

    return<>
    <label>My Name: <input type="text" onChange={handleName} value={name}/></label>
    <h1>{name}</h1>
    </>
}*/


const Todo=memo(
    
    ({todos})=>
    {
        console.log("child")
        return<>{
            todos.map((todo, key)=>{
                return <p key={key}>{todo}</p>;
            })}</>

    }
    )
   




export default function Myform(){
const [number, setnumber]=useState(0);
const[todo, settodo]=useState(["tod1", "todo2"]);

const handlenumber=()=>{
setnumber(prevnumber=>prevnumber+1)

}

return<>
<h1>todo list</h1>
<div>{< Todo todos={todo}/>}</div>
<h1>{number}</h1>
<button onClick={handlenumber}>add</button>
</>



}

//css styling
const Para={
    backgroundColor:"blue", padding:"4px solid yellow",color:"red"
}

export const Styling=()=>{

    return<>
    <h1 style={{background:"red"}}>this is a red hearder</h1>
    <p style={Para}> this is a paragraph that is style in react </p>
    </>
}

export const Changecolor=()=>{
    const mystyle={
        backgroundColor:'purple'
    }
    const nostyle={
        backgroundColor:'green',
        fontFamily: 'Arial, Helvetica, sans-serif',
        font: 100
        
    }
    const[color, setcolor]=useState(false);
const handlecolor=()=>{
    setcolor(prevcolor=>!prevcolor)
}
    return<>
    <h1 style={color?mystyle:nostyle}>color change</h1>
    <button onClick={handlecolor}>change</button>
    </>
}

export const Textcolor=()=>{
    const[text, settext]=useState('purple');
    const handlered=()=>settext('red') 
    const handleblue=()=>settext('blue')
    const handlegreen=()=>settext('green')
    const handleyellow=()=>settext('yellow')
    return<>
    <p >this is a {text} color</p>
    <button style={{backgroundColor:'red'}} onClick={handlered}>red</button>
    <button style={{backgroundColor:'blue'}} onClick={handleblue}>blue</button>
    <button style={{backgroundColor:'green'}} onClick={handlegreen}>green</button>
    <button style={{backgroundColor:'yellow'}} onClick={handleyellow}>yellow</button>
    </>
    
} 
//use state

export const State=()=>{

    const [object, setobject]=useState({Manufacturer:"toyota"
, brand:'venza', year:2022, sold:true})

const handleChange=()=>{
    
    setobject(prevobject=>{
        return{
            ...prevobject, sold:!object.sold
        }
    })
}
const [arr, setarr]=useState([{id:1,obj:'item1'}, {id:2,obj:'item2'}])
const handlelist=()=>{
    const neww=`item${arr.length+1}`
    setarr(prearr=> [...prearr,{id:arr.length+1, obj:neww} ]
        
    )
}
const delet=(d)=>{
    const newarr=arr.filter((item)=>{ return item.id!==d })
    setarr(newarr);
           
   console.log("deleted")
}

return<>
<h1>CAR INFO:</h1>
<h2>Manufacturer: {object.Manufacturer}</h2>
<h2>Brand:{object.brand}</h2>
<h2>Year:{object.year}</h2>
<h2>Availibility:{object.sold?<span>No</span>:<span>Yes</span>}</h2>
<ul>{arr.map(ele=>{return <li key={ele.id}>{ele.obj}</li>})}</ul>
<button onClick={handleChange}>color</button>
<button onClick={handlelist}>add</button>
<button onClick={()=>delet(arr.length)}>delete</button>
</>
}
//useaffect
export const Effect=()=>{
    const [effect, seteffect]=useState(0);
    const [update, setupdate]=useState("this is a text that is not updated");
    const[count, setcount]=useState(1);
    const[c,setc]=useState(1);
    const handlec=()=>{
        setc(prevc=>prevc+1);
    }
    const handlecount=()=>{
        setcount(prevcount=>prevcount+1);
    }

    useEffect(()=>{
const timer=setTimeout(() => {
seteffect(preveffect=>preveffect+1)
    
}, 1000);
console.log("effect run")
  return ()=> {console.log("clearing interval");clearTimeout(timer); console.log("cleared interval")}  },[count]   )

  useEffect(()=>{
      let no=0;
      console.log("initiating update");
      const time=setInterval(() => {
          console.log("starting updating")
          setupdate("this is a text that is updated "+(no+1))
          console.log("updated");
          
      }, 5000);

return ()=>{ console.log("clearing update");
    clearInterval(time)} 
 },[])

 const[windowsize, setwindowsize]=useState(0);
 useEffect(()=>{
     const handleresize=(e)=>{
const {width}=document.body.getBoundingClientRect();
setwindowsize(width);
console.log("resizeing to"+ width)
     }
     window.addEventListener('resize', handleresize);
     return ()=> window.removeEventListener('resize',handleresize)
 })
return<>
<p>{effect}</p>
<p>this is count no {count}</p>
<button onClick={handlecount}>count</button>
<p>this is c no {c}</p>
<button onClick={handlec}>c</button>
<p>{update}</p>
<p>this window size is {windowsize}</p>
</>


}

//use context
export const Component1=()=>{
    const [coon, setcoon]=useState({name:"john", age:25});
    return<>
    <p>Component 1 and the username is {coon.name} and age is {coon.age}</p>
    <Component2 user={coon} />
    </>

}
 const Component2=(props)=>{
    return<>
    <p>Component 2 and username is {props.user.name} and the age is {props.user.age}</p>
    <Component3 user={props.user} />
    </>

}
 const Component3=({user, age})=>{

    return<>
    <p>Component 3 and the userName is {user.name} and the age is {user.age}</p>
    <Component4 user={user.name} age={user.age} />
    </>

}
  const Component4=(props)=>{
     console.log("component 4 rendering");
    return<>
    <p>Component 4</p>
    <p>Username: {props.user}</p>
    <p>age:{props.age}</p>
    </>

}

const user=createContext();
export const Context1=()=>{
    const[details, setdetails]=useState({name:" ", age:" "})
    const handledetails=(e)=>{
        setdetails(prevdetails=>{
            return{
                ...prevdetails, [e.target.name]:e.target.value
            }
        
    })
    console.log("setting details: "+ details.name + details.age                                                        )
    }

    return<>
     <p style={{backgroundColor:"red"}}>enter first component details below</p>
        <h2>USERNAME</h2>
        <input onChange={handledetails} type="text" name="name" value={details.name} />
        <br/>
        <h1>AGE</h1>
<input onChange={handledetails} type="text" name="age" value={details.age} />        
        <hr/> 
    <user.Provider value={details}>
        <Comp2/>
    </user.Provider>

    </>
    
}
    const Comp2=()=>{
       const  user1=useContext(user)
        return<div style={{backgroundColor:"yellowgreen", padding:"20px"}}>
        {((user1.age%2)==0)?<h1>USER QUALIFIED. PROCEED TO NEXT PHASE</h1>:<h1>EXIT</h1>}
        <Comp3/>
        </div>

      
       
    }
    const Comp3=()=>{
        const user2=useContext(user)
        return<>
        {(user2.name.length<10)?<h1>NAME TOO SHORT</h1>:<h2>PROCCED TO NEXT PHASE</h2>}
        <Comp4/>
        </>
    }

    const Comp4=()=>{
        const user3=useContext(user)
        return<div style={{backgroundColor:"black",color:"white", padding:"10px"}}>
        {user3.age>20&&<h1>{`age:${user3.age}`}</h1>}
        {user3.name.length>12&&<h1>{`name:${user3.name}`}</h1>}
        
        
        </div>

    }
//useref

export const Ref=()=>{

    const[word, setword]=useState(0);
   const handlecount=(e)=>{
       setword(e.target.value)
   }
   const count=useRef(0)
   useEffect(()=>{
       count.current=count.current + 1 + word  ;
       console.log("render no" + count.current)
       

   })
    //accessing dom element
 const inputElement=useRef(0);
 const focusInput=()=>{
     inputElement.current.focus();
   
 }

 //tracking state changes
 const [innput, setinnput]=useState('');
 const refference=useRef("");
 const handleinput=(e)=>{
     setinnput(e.target.value)
 }
useEffect(() => {
  refference.current=innput;
  var vv=refference.current
  if(vv.length==7){
      console.log('maximum: '+ vv);
      
  }
console.log("New Input:");
 
}, [innput])
return<>
<input type="text" onChange={handleinput} value={innput}/>
<p>render no {refference.current}</p>

</>
}

//usereducer


   //useCallback
   const    Todos=({todos, addTodo})=>{
       console.log("child render");
       return<>
       <h2>My Todos</h2>
       {todos.map((todo, index)=>{
           return <p key={index}>{todo}</p>
       })}
       <button onClick={addTodo}>add</button>
       </>    
   }
    
   export const Callback=()=>{
       const [count, setcount]=useState(0);
       const[todos, setodos]=useState([]);
        const increment=()=>{
            console.log("parent component");
            setcount((c)=>c+1);
        }
        const addtodo=useCallback(()=>{
            setodos((t)=>[...t, "new todos"]);
        },[todos])
        return(
            <>
            <Todos todos={todos} addTodo={addtodo}/>
            <hr/>
            <div>

                count:{count}
                <button onClick={increment}>+</button>
            </div>
            </>
        )
   }
   const Childcomponet=(props)=>{
     console.log("child component rendered");
      
           return<>
           <h1>{props.number }</h1>
           <button onClick={props.handleadd}>child</button>
           </>
       
   }
   export const Newcall=()=>{
       const [list, setlist]=useState([]);
       const [a, seta]=useState(1);
 const handlelist=()=>{
       
           setlist(prevlist=>[...list, `netlist ${a}`])
           console.log("component rerenders")
       }
            
const handle=useCallback(()=>{
    seta(a+1) 
},[a])
      

       return<>
       <Childcomponet number={a} handleadd={handle}/>
       <ul>{list.map((ele, index)=>{return <li key={index}>{ele}</li>})}</ul>
       <button onClick={handlelist}>add</button>
       </>

   }


   //usem emo
  export const Usem=()=>{
       const[count, setcount]=useState(0);
       const[todos, setodos]=useState([]);
       const calculation = useMemo(()=> expensiveCalculation(count),[count])
        const increment=()=>{
            setcount((c)=>c+1);
        }
        const addTodo=()=>{
            setodos((t)=>[...t, "new todos"]);
        };
        return (
            <div>
                <div>
                    <h2>My todos</h2>
                    {todos.map((todo, index)=>{
                        return <p key={index}>{todo}</p>
                    })}
                    <button onClick={addTodo}>add todo</button>
                </div>
                <hr/>
                <div>
                    count:{count}
                    <button onClick={increment}>+</button>
                    <h2>expensiveCalculation</h2>
                    {calculation}
                </div>
            </div>
        )
   }
   const expensiveCalculation=(num)=>{
       console.log("calculating...")
       for (let i=0; i<1000000000; i++){
           num+=1
          
       }
       return num;
   }
  export  const Userss=()=>{
    const [choo, setchoo]=useState(0)
     const user=users.map((ele)=>{
         return ele
         
     })
console.log(user[1].body)
const userId=user.map((ele)=>{
    return ele.userId
})
const id=user.map((ele)=>{
    return ele.id
})
const body=user.map((ele)=>{
    return ele.body
})
const title=user.map((ele)=>{
    return ele.title
})
const [series, setseries]=useState([])
const handleNewUser=()=>{
    setchoo(choo +1);
    setseries(preseries=>[preseries, (<div key={id[choo]} style={{width:"25%",
     border:"1px solid red" }}>
        <span>ID: {id[choo]}</span><br/>
        <span>USER ID:{userId[choo]}</span><br/>
        <span>TITLE: {title[choo]}</span><br/>
        <span>MESSAGE: {body[choo]}</span><br/>
        <hr style={{width:"50%", float:"left"}}/>
        <br/>
    </div>)])
   

}


    return<>

    <div 
>{series.map(ele=>{ return <div style={{display:"flex",
flexDirection:"row", width:"700px", height:"700px", border:"1px solid green",
flexWrap:"wrap", alignItems:"flex-start"}}>{ele}</div>})}</div>
    <button onClick={handleNewUser}>add new</button>
    </>
}