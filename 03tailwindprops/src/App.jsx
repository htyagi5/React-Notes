import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'
function App() {
 let myobject={
    userName:"happy",
    age:21
  }
  let myArr=[1,2,3];
  return (
    <>
     <h1 className="bg-blue-400 rounded-xl text-black">TAILWIND TESTING</h1>
     <br />
     {/* <Card channel="chaiaurcode" someObject={myobject}/> syntax :if we want to pass something to ui we have to pass it through variable */}
      <Card userName="chaiaurcode" btntext="click here" /> {/*this way we can pass anything in ui components */}
     <br />
     {/* <Card arr={myArr}/> */}
     <Card userName="Harshit" />
     <br />
     <Card userName="BOYS" btntext="Let's go"/>
    </>
  )
}

export default App
