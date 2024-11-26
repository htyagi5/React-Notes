

// function App() {
//   function colorchange(e){
//    document.body.style.backgroundColor=e.target.id
//   }

//   return (
//     <>
//        <div className='bg-gray-600  fixed {/*w-full */} bottom-0 flex gap-4 place-content-center justify-evenly flex-wrap p-5  rounded-lg '>
//         <button  className="bg-green-400 rounded-lg p-2 hover:bg-white"  onClick={colorchange} id="green">GREEN</button>
//         <button className="bg-yellow-400 rounded-lg p-2 hover:bg-white"  onClick={colorchange} id="yellow">YELLOW</button>
//         <button className="bg-orange-400 rounded-lg p-2 hover:bg-white"  onClick={colorchange} id="orange">ORANGE</button>
//         <button className="bg-blue-400 rounded-lg p-2 hover:bg-white"  onClick={colorchange} id="skyblue">SKYBLUE</button>
//         <button className="bg-pink-400 rounded-lg p-2 hover:bg-white"  onClick={colorchange} id="pink">PINK</button>
//         <button className="bg-red-400 rounded-lg p-2 hover:bg-white"  onClick={colorchange} id="red">RED</button>
//         <button className="bg-blue-400 rounded-lg p-2 hover:bg-white"  onClick={colorchange} id="blue">BLUE</button>
//       </div>
//     </>
//   )
// }

// export default App

import { useState } from "react"
function App() {
   const [color,setcolor]=useState("black")

  return (
    <div className="w-full h-screen flex place-content-center" style={{backgroundColor: color}}>  {/* this is the syntax and responsible for implementing state */}
       <div className='bg-gray-600  fixed {/*w-full */} bottom-0 flex gap-4 place-content-center justify-evenly flex-wrap p-5  rounded-lg ' >
        <button  className="bg-green-400 rounded-lg p-2 hover:bg-white"  onClick={()=>setcolor("green")} 
     /*    this is the concept that onclick contain a function not only the reference  we can do so but but avoid it it also work also with "()"contain value to pass */id="green">GREEN</button>
        <button className="bg-yellow-400 rounded-lg p-2 hover:bg-white"  onClick={()=>setcolor("yellow")} id="yellow">YELLOW</button>
        <button className="bg-orange-400 rounded-lg p-2 hover:bg-white"  onClick={()=>setcolor("orange")} id="orange">ORANGE</button>
        <button className="bg-blue-400 rounded-lg p-2 hover:bg-white"  onClick={()=>setcolor("blue")} id="skyblue">SKYBLUE</button>
        <button className="bg-pink-400 rounded-lg p-2 hover:bg-white"  onClick={()=>setcolor("pink")} id="pink">PINK</button>
        <button className="bg-red-400 rounded-lg p-2 hover:bg-white"  onClick={()=>setcolor("red")} id="red">RED</button>
        <button className="bg-blue-400 rounded-lg p-2 hover:bg-white"  onClick={()=>setcolor("blue")} id="blue">BLUE</button>
        <button className="bg-green-800 rounded-lg p-2 hover:bg-white"  onClick={()=>setcolor("olive")} id="blue">olive</button>
        <button className="bg-white rounded-lg p-2 hover:bg-white"  onClick={()=>setcolor("lavender")} id="blue">levender</button>
      </div>
    </div>
  )
}

export default App
