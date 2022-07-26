function Name(props){
    return <h1>my name is {props.name}</h1>
    }
    function Person(props){
      return(<><h1>i am a {props.creature} person</h1>
      <Name name="junior" /></>);}

      export default Person;