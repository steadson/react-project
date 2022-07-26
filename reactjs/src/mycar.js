
import React from "react";


 
export class Car extends React.Component{
    render(){
      return <h1>Hi i am a  car</h1>


    }
  }

//react state

  class Toyota extends React.Component{
    constructor(){
      super();
      this.state={color:"red"};
    }
    render(){
      return <h2>this is a {this.state.color} Car</h2>
    }
  }
  export {Toyota};


//react props
  export class Ford extends React.Component{
    constructor(props){
      super(props);
    }
    render(){
      return <h2>this is a {this.props.type}car</h2>
    }
  }

//react component in component
  class Vehicle extends React.Component{
    constructor(props){
      super(props);
    }
    render(){
      return <span>i have a {this.props.type}</span>
    }
  }
  export class Bicycle extends React.Component{
    render(){
      return(
      
        <h2>{<Vehicle type="Bicycle"/>} and it is red in color </h2>)
    }
  }

  //using the state object

 export class Phone extends React.Component{
    constructor(props){
      super(props);
      this.state={
        brand:"GIONEE",
        model:"M11",
        color:"BLACK",
        Year:"2019"
      };

    }

    render(){
      return(
        <div>
          <h1>this is a {this.state.brand} phone.</h1>
          <h2>it is an {this.state.model} model.</h2>
          <h2>it is {this.state.color} in color</h2>
          <h2>it is Manufctured in {this.state.Year}</h2>
        </div>
      )
    }
  }
  //changing the state of an object
  let counter=1;
  let diff=0;
 export class MyPhone extends React.Component{
  constructor(props){
    super(props);
    this.state={
      brand:"GIONEE",
      model:"M11",
      color:"BLACK",
      Year:"2019",
      count:0
    };

  }
  
  
  changePhone =()=>{
    if(diff%2==0){
    this.setState({

      brand:"SAMSUNG",
      model:"S22",
      color:"WHITE",
      Year:"2021",
      count:counter++
    }) ;diff++;}
    else{
      this.setState({

        brand:"GIONEE",
        model:"M11",
        color:"BLACK",
        Year:"2019",
        count:counter++
    });diff++;}
  }

  render(){
    return(
      <div>
        <h1>this is a {this.state.brand} phone.</h1>
        <h2>it is an {this.state.model} model.</h2>
        <h2>it is {this.state.color} in color</h2>
        <h2>it is Manufctured in {this.state.Year}</h2>
        <h1>{this.state.count}</h1>

        <button type="button" onClick={this.changePhone} >changePhone</button>
      </div>
    )
  }
}
export class LostPhone extends Phone{
  constructor(props){
    super(props);
    this.state={namme:'junior'}
  }
  render(){
    return(
      <div>
         <h1>this is a {this.state.brand} phone.</h1>
          <h2>it is an {this.state.model} model.</h2>
          <h2>it is {this.state.color} in color</h2>
          <h2>it is Manufctured in {this.state.Year}</h2>
          <h2>the owner names {this.state.namme}</h2>
          <p className="footer">the above phone discription has been stolen</p>
      </div>
    )
  }
}

//lifecycle of component
// each component in react has three life cycle which u can monitor and manipulate
//during these three main phase mounting, updating, unmounting.
  
//the get derived state from props is called b4 the rendering to the dom
//it takes the property value instead of the state value initially set
export class Header extends React.Component{
  constructor(props){
    super(props)
    this.State={
      color:"red"
    }
  }
  static getDerivedStateFromProps(props, state){
    return{color:props.favcol}
  }
  render(){
    return <h1>the header color is {this.state.color}</h1>
  }
}

//componentDidMount
//if this is called then once the component has been rendered, the componentDidMount will 
//perform whatever was programed in it
export class Page extends React.Component{
  constructor(props){
    super(props)
    this.State={
      color:"red"
    }
  }
componentDidMount(){
  console.log('component did mount ')
  setTimeout(()=>{this.setState({color:"blue"})},1000)
}      
  
  render(){
    return (<h1>the page color is {this.state.color}</h1>
    );
  }
}
//updating 
//react has 5 built in that get called in other when a component get called
// getDerivedStateFromProps(), shouldCompoentUpdate(),render(),getSnapshotForUpdate(),
//componentDidUpdate only the render() method is composary others are optional


//getDerivedState from props

export class Headd extends React.Component{
  constructor(props){
    super(props)
    this.state={favcolor:'green'}
  }
 
  static getDerivedStateFromProps(props, state){
    return{favcolor:props.color}
  }
  changeColor=()=>{
    setTimeout(()=>{this.setState({favcolor:'YELLOW'})},2000)
    
    
  }

  render(){
    return(<div>
      <h1>this head is {this.state.favcolor}</h1>;
      <button type="button" onClick={this.changeColor}>change btn</button>

</div>
    );
  }
}

//should component update
//this returns a boolean value
//the default is true

export class Update extends React.Component{
  constructor(props){
    super(props)
    this.state={favcolor:'green'}
  }
 
  shouldComponentUpdate(){
    return false;
  }
  changeColor=()=>{
    setTimeout(()=>{this.setState({favcolor:'YELLOW'})},2000)
    
    
  }

  render(){
    return(<div>
      <h1>this head is {this.state.favcolor}</h1>;
      <button type="button" onClick={this.changeColor}>change btn</button>

</div>)}}

//getSnapshotBeforUpdate here u get access to the props and state before the udate
// meeaning that after the update u can check what the values were befor the update
// ifthe getsnapshotbeforeupdae is preesent then u must include component did update
//method other wise u will get error

export class Updated extends React.Component{
  constructor(props){
    super(props)
    this.state={favcolor:'green'}
  }
 
  componentDidMount(){
    setTimeout(()=>{this.setState({favcolor:'orange'})},1000)
  
  }
  getSnapshotBeforeUpdate(prevProps, prevState){
    document.getElementById('upd').innerHTML="before the update the favcolor was"+prevState.favcolor
  }
  
 componentDidUpdate(){
   document.getElementById('upd2').innerHTML='the update favcolor is'+this.state.favcolor

  }   
  

  render(){
    return(<div>
      <h1>the updated favcolor is {this.state.favcolor}</h1>;
      <div id="upd"></div>
      <div id="upd2"></div>

</div>)}}

    //unmounting react only have   one method for unmounting called the component will unmount
    export class Contain extends React.Component{
      constructor(props){
        super(props);
        this.state={show:true};}
        delheader=()=>{
          this.setState({show:false})
        }

      render(){
        let header;
        if(this.state.show){
          header=<Child/>;
        };
        return(<div>
          {header};
          <button type="button" onClick={this.delheader}>delete header</button>
        
        </div>)
      }
    }

    class Child extends React.Component{
      componentWillUnmount(){
        alert('the component named header is about to be unmounted');

      }
      render(){
        return(<h1>hello every one</h1>)
      }
    }