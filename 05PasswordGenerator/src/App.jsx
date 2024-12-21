//LEARNIG about 3 more hooks 
//1.  useCallback -->used if we want to run some method like here function  PassGeneratornumber checkbox clickk karne pe run and character check karne pe run again
//bassically it  uses the concept of memorization mean it put the thing in cache memory

//2. useEffect -->is used because there no way we can run the method here because there işno button and so to run passGenerator
//3.  useRef -->used to take the reference mean it join two indenpendent thing like here linking the password text written in input text and button
import { useCallback, useEffect, useState,useRef } from 'react'


function App() {
  const [length,setlength]=useState(8)
  const [NumberAllowed,setNumberAllowed]=useState(false)
  const [CharacterAllowed,setCharacterAllowed]=useState(false)
const [password,setpassword]=useState("")
const passwordRef=useRef(null);
//generating random password and put it in catche memory
const PasswordGenerator=useCallback(()=>{
  let pass=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(NumberAllowed) str+="123456789"
  if(CharacterAllowed) str+="!@#$%^&*()_+-{}[]:;'./?<>,|/"
  for(let i=1;i<=length;i++){
 let  char=Math.floor(Math.random()*str.length+1)//isse character nhi ayya balki index ayya hai ki konsa chacter lena hai
  pass+=str.charAt(char)
  }
  setpassword(pass)
},
[length,NumberAllowed,CharacterAllowed,setpassword]
)

//To copy
const PasswordCopy=useCallback(()=>{
  passwordRef.current?.select()  //highlight the text that is being copied and ? represent we select optionally because somehow text is nul then it cannt select
  passwordRef.current?.setSelectionRange(0,20)  //it basically provide a range to which we want to select 
  window.navigator.clipboard.writeText(password)
},[password]
)

//running the method
useEffect(()=>{
  PasswordGenerator()
},[length,NumberAllowed,CharacterAllowed,PasswordGenerator])
  return (
    <>
      <div className='flex flex-col place-content-center '> 
        <h1 className='text-white text-5xl flex place-content-center px-7 pt-7 pb-7'>PASSWORD GENERATOR</h1>
        <div className='bg-slate-400 flex-col place-content-center mr-36 ml-96 p-7 rounded-lg '>
          <div>
          <input type="text" 
          placeholder='PASSWORD'
          value={password}
          readOnly
          ref={passwordRef}
          className=' rounded-lg  p-5 text-orange-400 text-3xl' />
          <button className='bg-blue-700 rounded-sm hover:bg-yellow-300 p-5' onClick={PasswordCopy }>COPY</button>
          </div>
          <div className='flex '>
        <input type="range" 
        min={5}
        max={25}
        value={length}
        onChange={(e)=>{setlength(e.target.value)}}
        className='p-4 cursor-pointer'/>
        <label  className='mt-2 mx-2'>Length ({length})</label>

        <input type="checkbox" 
        defaultChecked={NumberAllowed}
        onChange={()=>{
          setNumberAllowed((prev)=>!prev)
        }}
        className='text-black' />
<label className='mt-2 mx-2'>Numbers</label>
<input type="checkbox"
defaultChecked={CharacterAllowed}
onChange={()=>{
  setCharacterAllowed((prev)=>!prev)
}}
 />
<label className='mt-2 mx-2'>Characters</label>
        </div>

        </div>

      </div>
    </>
  )
}

export default App



