
export default function Car (props){
    return <h1 className={props.className}>"hello dear i am a {props.object} component"</h1>;
}

export function Manufacturer(props){return<>
<Car className="myalt" object='Car'/>
<h1>{props.manufacturer}</h1>
</>
} 
function O(props){
return(
    <>
    
<span>{props.brand}</span>

    </>
)}

export function Obj(){
    const contactinfo={
        name:'steadson',
        age:22,
        occupation:'software developer',
        YearsOfExperience:`${3}years`
    }
    return (
 <div className="myc">
        <h3>YOUR INFORMATION</h3>
     <div>
         <h5>
             Name: {contactinfo.name}
        </h5>
    </div>
    <div>
        <h5>
            Age:  <O brand={contactinfo.age}  />
        </h5>
    </div>
    <div>
         <h5> 
             occupation: <O brand={contactinfo.occupation}/>
         </h5>
    </div> 
   <div>
      <h5>
        YearsOfExperience: <O brand={contactinfo.YearsOfExperience}/> 
      </h5>
   </div> 
 </div>
    )
}

//event


export function Score(){
   const scored=()=> alert("goal!!!");
    return <button type="btn" onClick={scored}>check Goal</button>
}

export function Checker(){
    const check=true;
    const checkoff=(e)=> check?alert("is a Goal "+e.type):alert("no Goal")

    return <button onClick={(event)=>checkoff(event)}>Check for offside</button>
}

export function Eventchecker(){
    const ec=(a,b)=> alert(a+b.type)
    

    return <button onMouseOver={(event)=>ec("eventchecker ",event) }>eventChecker</button>}


 function Goal(){
     return <h1>is a Goal!!!</h1>
 }
 function Nogoal(){
     return<h1>is not a Goal</h1>
 }

 export function GG(props){
     const oal=props.Goal;
     if (oal){
         return <Goal/>
     }
     else
     return <Nogoal/>
 }
 //&&

 export function GGG(props){
     return(
         <>{
             props.isitgoal && <h3>it is a goal!!!</h3>
           
         }
         </>
     )
 }
export function GGGG(props){
    const gchecker=props.Goalb ;
    return <h4>{gchecker?<Goal/>:<Nogoal/>}</h4>
}



function Listed(props){
     return <>
     <h4>Car Info</h4>
     <li>Manufacturer: {props.manufacturer}</li>
     <li>Brand: {props.Brand}</li>
     <li>Year: {props.Year}</li>
     <li>Color: {props.Color}</li>
     <li>Engine: {props.Engine}</li>
     </>
  
}
const items=[
    {id:1, manufacturer:"Toyota", Brand:"venza", Year:2022, Color:"Black",Engine:"y5e3"},
    {id:2, manufacturer:"chevron", Brand:"chevron 346", Year:2022, Color:"Yellow",Engine:"ysyf3"},
    {id:3, manufacturer:"Tesla", Brand:"Model y", Year:2022, Color:"Gray",Engine:"93o3"},
    {id:4, manufacturer:"Ford", Brand:"Tommy", Year:2022, Color:"White",Engine:"auvb2"},
    {id:5, manufacturer:"Mercedes", Brand:"G-wagon", Year:2022, Color:"Black",Engine:"9o7e"}
]
export function Listted(){

return <>
<ul>
    {items.map((item)=><Listed key={item.id} manufacturer={item.manufacturer}
    Brand={item.Brand} Year={item.Year} Color={item.Color} Engine={item.Engine}
    
    />)}
</ul>
</>

}

