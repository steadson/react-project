import React from "react";
import { useState, useEffect } from "react";
import Dice from "./dice.js";

export default function Tenzies(){
    const[dice, setdice]=useState(dices)
    const[tenziez, setenziez]=useState(false)
    const[count, setcount]=useState(0)

    // 10 random dice
    function dices(){
        const n=[]
        for (let i=0; i<10; i++){
            n.push({value:Math.floor(Math.random()*6), id:i, isheld:false})
        }
        return n
    }
    //rolling die
    function RollDice(){
       if(!tenziez){
           setcount(count+1)
        setdice(prev=>prev.map(die=>{
            return die.isheld?die:{value:Math.floor(Math.random()*6), id:die.id, isheld:false}
        }))

       }
       else{
           console.log(count);
           setenziez(false)
           setdice(dices())
           setcount(0)
       }
       
    }
    //hold
    function hold(id){
        console.log("holding", id);
        setdice(prev=>prev.map(die=>{
            return die.id==id?{...die, isheld:!die.isheld}:die
        }))
    
    }
    //winning checker
    useEffect(() => {
      console.log("running effect");
      const first=dice[1].value
      const checker=dice.every(die=> die.isheld)
      console.log(checker);
      const truth=dice.every(die=> die.value===first)
      if(checker&&truth){
          console.log("you won")
          setenziez(true)
      }
    
      
    }, [dices])
    //each die to be displayed
const diceElement=dice.map(ele=>{return <h3
    key={ele.id} 
    className="dice"
    style={{background:ele.isheld?"green":"white"}}
    onClick={()=>hold(ele.id)}>
        {ele.value}
        </h3>})
        //rendering 
    return<>
    <div className="Main">
    <div className="outside">
    {tenziez&&(<h2 className="message">ROLLED {count} TIMES</h2>)}
<div className="inside">
    {diceElement}
    
     </div>
     
<button className="btn" onClick={RollDice}>{tenziez?'New Roll':"Roll"}</button>
</div>
    </div>
    
    </>
}