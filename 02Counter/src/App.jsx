// //LEARNING Basics of Hooks (real magic of react ->updating a variable everywhere in UI)
// useState is a React Hook that lets you add a state variable to your component.

// const [state, setState] = useState(initialState)


import { useState } from 'react'
import './App.css'

function App() {
  let [counter , setcounter]=useState(0) //use state is a hook which return an array //here const cannnot be used as counter is changing and we have alag se define bhi kar rakha hai see the chatgpt vaha hamne vo again define karke change nhi kiya  
  // let counter=0;

const addValue= ()=>{
  if(counter<20){
setcounter(counter+1);

//this way we can do multiple changes
// setcounter(counter=>counter+1);
// setcounter(counter=>counter+1);
// setcounter(counter=>counter+1);
// setcounter(counter=>counter+1);
  }
// console.log(counter);
}
const removeValue= ()=>{
  if(counter>0){
    counter-=1;
setcounter(counter);
  }
// console.log(counter);
}

  return (
    <>
      <h1>Chai aur Code</h1>
      <h2>Chai Ready hai </h2>
       <p>Hit the counter 👇 </p>
       <h3>counter value : {counter}</h3>
<br/>
      <button onClick={addValue}>Add Value  : {counter}</button><br/><br/>
      <button onClick={removeValue}>Remove Value : {counter}</button>
      <p>footer  :  {counter}</p>
    </>
  )
}

export default App



//+++++++++++++++++++++++++++++++++++++BY CHATGPT++++++++++++++++++++++++++

// import { useState } from 'react';
// import './App.css';

// function App() {
//   // Initialize counter state
//   const [counter, setcounter] = useState(0);

//   // Function to increment the counter
//   const addValue = () => {
//     if (counter < 20) {
//       setcounter(counter + 1); // Use setcounter to update state
//     }
//   };

//   // Function to decrement the counter
//   const removeValue = () => {
//     if (counter > 0) {
//       setcounter(counter - 1); // Use setcounter to update state
//     }
//   };

//   return (
//     <>
//       <h1>Chai aur Code</h1>
//       <h2>Chai Ready hai </h2>
//       <p>Hit the counter 👇 </p>
//       <h3>Counter value : {counter}</h3>
//       <br />
//       <button onClick={addValue}>Add Value : {counter}</button>
//       <br /><br />
//       <button onClick={removeValue}>Remove Value : {counter}</button>
//       <p>footer : {counter}</p>
//     </>
//   );
// }

// export default App;
