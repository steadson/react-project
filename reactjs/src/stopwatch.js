import {useState, useEffect, useRef} from "react";

export default function StopWatch(){

const [isActive,setisActive]=useState(false)
const[ispaused, setispaused]=useState(true)
const[time, settime]=useState(0);

useEffect(()=>{
    let interval=null;
    

    if(isActive===true && ispaused===false){
        interval=setInterval(()=>{
            settime((time)=>time+1)
        },10);
        
    }
    else{
        clearInterval(interval);
        console.log("clearing");
    }
    return ()=>{
        clearInterval(interval);
        console.log("clearing 2");
    };
},[isActive, ispaused]);
const handlestart=()=>{
    setisActive(true);
    setispaused(false)
}
const handleresume=()=>{
    setispaused(!ispaused)
}
const handlereset=()=>{
setisActive(false);

settime(0);
}
return<>
<div style={{ color:"red", font:"message-box"
, fontFamily:"sans-serif", border:"3px solid green", alignContent:"center",
 padding:"5px" ,display:"flex", flexWrap:"wrap"

}}>{time}</div>

<br></br>

<br/>
<button onClick={handlestart}>start</button>
<button onClick={handleresume}>resume</button>
<button onClick={handlereset}>reset</button>

<img src="logo192.png"/>
<div>
    <h1>Laura smith</h1>
    <h4>Frontend Developer</h4>
    <h6>Crimbal Websit</h6>
</div>
<div>
<span>Email</span>
<span>LinkedIn</span>

</div>
<p>
    <h3>About</h3>
    this is just a randop sghdfdy shgsdhjs hgss 
    snshs jsdydu ndyds 
    bsdfsdjhkssklddbd dhshsd hjsdjsk 
    ssjs
</p>
<p>
    <h3>Interest</h3>
    dsgsf vghsdhshjs sghsgshjs sghsshjss sgfshs sghsuyhjs gsghsj ghsghsjh 
</p>
<footer>
    <span>Twitter</span>
    <span>Facebook</span>
    <span>Instagram</span>
    <span>GitHub</span>
</footer>
</>

}