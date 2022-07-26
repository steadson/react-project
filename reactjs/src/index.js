import React from 'react';
import ReactDOM from 'react-dom';
import Car, { Eventchecker ,GG,GGG,GGGG, Listted} from './car.js'
import './index.css';
import { Manufacturer,Obj, Score, Checker} from './car.js';
import {Form} from './form.js';
  import Test,{ } from "./test.js";
  import StopWatch from './stopwatch.js';
  import Myform, {  Styling ,Changecolor,Context1, Ref,Callback,Reducer,Usem, Textcolor, State,Effect, Component1, Newcall,Userss} from './new.js';
import Refresh from './refresh.js';
import Dynamic from './text.js';
import Page,{Page4} from "./newww.js";
import Tenzies from './tenzies.js';
import NoteEditor from './noteEditor.js';
 

function Hello(){
  return <h1>Hello every one</h1>
}

ReactDOM.render(<Hello/>,document.getElementById('root')); 
const root=document.getElementById('root');
const roo=document.getElementById('roo');
const list=(
  <ul className={!true?"list":"myc"}>
    <li>one</li>
    <li>two</li>
    <li>three</li>
    <li>four</li>
  </ul>
)
ReactDOM.render(list,root);
ReactDOM.render(<div>
<h1>this is my first react project</h1>
<h2>wish me luck </h2>
</div>,roo)

//conditional Jsx

const checker=true;
ReactDOM.render(<h1>{checker===0?"move on":"repeat"}</h1>,roo)
  ReactDOM.render(<h1 className={(!checker)?"myalt":"myc"}>conditional rendering</h1>,roo)

  //car component
  ReactDOM.render(<Manufacturer manufacturer="toyota" />,roo)
  ReactDOM.render(< Obj/>,roo)
  ReactDOM.render(< Score/>,roo)
  ReactDOM.render(< Checker/>,roo)
  ReactDOM.render(<Eventchecker/>,roo)
  ReactDOM.render(<GG Goal={0}/>,roo);
  ReactDOM.render(<GGG isitgoal={1}/>,roo);
  ReactDOM.render(<GGGG Goal={1}/>,roo);
  ReactDOM.render(<Listted/>,roo);
  ReactDOM.render(<Form/>,roo);
  ReactDOM.render(<Test props="car"/>,roo);
  ReactDOM.render(<Myform/>,roo)
  ReactDOM.render(<Styling/>,roo);
  ReactDOM.render(<Changecolor/>,roo);
  ReactDOM.render(<Textcolor/>,roo);
  ReactDOM.render(<State/>,roo);
  ReactDOM.render(<Effect/>,roo);
  ReactDOM.render(<Component1/>,roo);
 // ReactDOM.render(<Context1/>,roo);
  ReactDOM.render(<Ref/>,roo);
  //ReactDOM.render(<Reducer/>,roo);
 // ReactDOM.render(<StopWatch/>,roo);
  //ReactDOM.render(<Callback/>,roo)
 ReactDOM.render(<Refresh/>, roo)
//ReactDOM.render(<Newcall/>,roo)
//ReactDOM.render(<Usem/>,roo)
//ReactDOM.render(<Userss/>,roo)
ReactDOM.render(<Dynamic/>,roo)
//ReactDOM.render(<Page4/>,roo)
ReactDOM.render(<Tenzies/>,roo)
ReactDOM.render(<NoteEditor/>,roo)

 