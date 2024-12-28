import React, { useEffect, useState } from 'react'
import {useLoaderData} from 'react-router-dom'
function Github() {
   const data=useLoaderData()
//     const [data,setData]=useState([])
//  useEffect(()=>{
//                   fetch(`https://api.github.com/users/hiteshchoudhary`)
//                   .then(response=>response.json())
//                   .then(data=>{
//                     setData(data)
//                   })
//                 },[])
const event=(e)=>{
    e.target.style.backgroundColor = 'red';
    }

    return (
        <div className='bg-orange-300 text-gray-600 flex text-2xl p-4 '>
            <div className='flex '>
            <img   src={data.avatar_url} alt="Git pic" width={500} />
            </div>
           <div className='flex flex-col ml-5 space-y-8'>  
            {/* key learning if want a column spacing then put the content in span */}
            <span>Name : {data.name}</span>
            <span>GitHub followers : {data.followers}</span>
            <span>GitHub Id : {data.id}</span>
            <span>Motive  : {data.bio}</span>
           <span>Youtube Channel:{" "} <a href="https://www.youtube.com/@chaiaurcode" target="_self" rel="noopener noreferrer" className="text-blue-500 underline">https://www.youtube.com/@chaiaurcode</a> </span>
            <div className='flex'>
            <button  onClick={event} className=' w-9 h-8 border-black border-2' style={{clipPath:`polygon(32% 29%, 16% 36%, 10% 54%, 16% 73%, 28% 88%, 48% 100%, 68% 90%, 87% 71%, 89% 50%, 83% 38%, 69% 31%, 49% 39%)`}} ></button>
            <button  onClick={event} className=' w-9 h-8 border-black border-2' style={{clipPath:`polygon(32% 29%, 16% 36%, 10% 54%, 16% 73%, 28% 88%, 48% 100%, 68% 90%, 87% 71%, 89% 50%, 83% 38%, 69% 31%, 49% 39%)`}} ></button>
            <button  onClick={event} className=' w-9 h-8 border-black border-2' style={{clipPath:`polygon(32% 29%, 16% 36%, 10% 54%, 16% 73%, 28% 88%, 48% 100%, 68% 90%, 87% 71%, 89% 50%, 83% 38%, 69% 31%, 49% 39%)`}} ></button>
            <button  onClick={event} className=' w-9 h-8 border-black border-2' style={{clipPath:`polygon(32% 29%, 16% 36%, 10% 54%, 16% 73%, 28% 88%, 48% 100%, 68% 90%, 87% 71%, 89% 50%, 83% 38%, 69% 31%, 49% 39%)`}} ></button>
            <button  onClick={event} className=' w-9 h-8 border-black border-2' style={{clipPath:`polygon(32% 29%, 16% 36%, 10% 54%, 16% 73%, 28% 88%, 48% 100%, 68% 90%, 87% 71%, 89% 50%, 83% 38%, 69% 31%, 49% 39%)`}} ></button>
            <button  onClick={event} className=' w-9 h-8 border-black border-2' style={{clipPath:`polygon(32% 29%, 16% 36%, 10% 54%, 16% 73%, 28% 88%, 48% 100%, 68% 90%, 87% 71%, 89% 50%, 83% 38%, 69% 31%, 49% 39%)`}} ></button>
            <button  onClick={event} className=' w-9 h-8 border-black border-2' style={{clipPath:`polygon(32% 29%, 16% 36%, 10% 54%, 16% 73%, 28% 88%, 48% 100%, 68% 90%, 87% 71%, 89% 50%, 83% 38%, 69% 31%, 49% 39%)`}} ></button>
            <button  onClick={event} className=' w-9 h-8 border-black border-2' style={{clipPath:`polygon(32% 29%, 16% 36%, 10% 54%, 16% 73%, 28% 88%, 48% 100%, 68% 90%, 87% 71%, 89% 50%, 83% 38%, 69% 31%, 49% 39%)`}} ></button>
            <button  onClick={event} className=' w-9 h-8 border-black border-2' style={{clipPath:`polygon(32% 29%, 16% 36%, 10% 54%, 16% 73%, 28% 88%, 48% 100%, 68% 90%, 87% 71%, 89% 50%, 83% 38%, 69% 31%, 49% 39%)`}} ></button>
            <button  onClick={event} className=' w-9 h-8 border-black border-2' style={{clipPath:`polygon(32% 29%, 16% 36%, 10% 54%, 16% 73%, 28% 88%, 48% 100%, 68% 90%, 87% 71%, 89% 50%, 83% 38%, 69% 31%, 49% 39%)`}} ></button>
            <button  onClick={event} className=' w-9 h-8 border-black border-2' style={{clipPath:`polygon(32% 29%, 16% 36%, 10% 54%, 16% 73%, 28% 88%, 48% 100%, 68% 90%, 87% 71%, 89% 50%, 83% 38%, 69% 31%, 49% 39%)`}} ></button>
            <button  onClick={event} className=' w-9 h-8 border-black border-2' style={{clipPath:`polygon(32% 29%, 16% 36%, 10% 54%, 16% 73%, 28% 88%, 48% 100%, 68% 90%, 87% 71%, 89% 50%, 83% 38%, 69% 31%, 49% 39%)`}} ></button>
            <button  onClick={event} className=' w-9 h-8 border-black border-2' style={{clipPath:`polygon(32% 29%, 16% 36%, 10% 54%, 16% 73%, 28% 88%, 48% 100%, 68% 90%, 87% 71%, 89% 50%, 83% 38%, 69% 31%, 49% 39%)`}} ></button>
            <button  onClick={event} className=' w-9 h-8 border-black border-2' style={{clipPath:`polygon(32% 29%, 16% 36%, 10% 54%, 16% 73%, 28% 88%, 48% 100%, 68% 90%, 87% 71%, 89% 50%, 83% 38%, 69% 31%, 49% 39%)`}} ></button>
            <button  onClick={event} className=' w-9 h-8 border-black border-2' style={{clipPath:`polygon(32% 29%, 16% 36%, 10% 54%, 16% 73%, 28% 88%, 48% 100%, 68% 90%, 87% 71%, 89% 50%, 83% 38%, 69% 31%, 49% 39%)`}} ></button>
            <button  onClick={event} className=' w-9 h-8 border-black border-2' style={{clipPath:`polygon(32% 29%, 16% 36%, 10% 54%, 16% 73%, 28% 88%, 48% 100%, 68% 90%, 87% 71%, 89% 50%, 83% 38%, 69% 31%, 49% 39%)`}} ></button>
            <button  onClick={event} className=' w-9 h-8 border-black border-2' style={{clipPath:`polygon(32% 29%, 16% 36%, 10% 54%, 16% 73%, 28% 88%, 48% 100%, 68% 90%, 87% 71%, 89% 50%, 83% 38%, 69% 31%, 49% 39%)`}} ></button>
            <button  onClick={event} className=' w-9 h-8 border-black border-2' style={{clipPath:`polygon(32% 29%, 16% 36%, 10% 54%, 16% 73%, 28% 88%, 48% 100%, 68% 90%, 87% 71%, 89% 50%, 83% 38%, 69% 31%, 49% 39%)`}} ></button>
            <button  onClick={event} className=' w-9 h-8 border-black border-2' style={{clipPath:`polygon(32% 29%, 16% 36%, 10% 54%, 16% 73%, 28% 88%, 48% 100%, 68% 90%, 87% 71%, 89% 50%, 83% 38%, 69% 31%, 49% 39%)`}} ></button>
            <button  onClick={event} className=' w-9 h-8 border-black border-2' style={{clipPath:`polygon(32% 29%, 16% 36%, 10% 54%, 16% 73%, 28% 88%, 48% 100%, 68% 90%, 87% 71%, 89% 50%, 83% 38%, 69% 31%, 49% 39%)`}} ></button>
            <button  onClick={event} className=' w-9 h-8 border-black border-2' style={{clipPath:`polygon(32% 29%, 16% 36%, 10% 54%, 16% 73%, 28% 88%, 48% 100%, 68% 90%, 87% 71%, 89% 50%, 83% 38%, 69% 31%, 49% 39%)`}} ></button>
            <button  onClick={event} className=' w-9 h-8 border-black border-2' style={{clipPath:`polygon(32% 29%, 16% 36%, 10% 54%, 16% 73%, 28% 88%, 48% 100%, 68% 90%, 87% 71%, 89% 50%, 83% 38%, 69% 31%, 49% 39%)`}} ></button>
            </div>
           </div>
        </div>
    )
}

 export default Github

export const GithubInfoLoader=async()=>{
       const response=await fetch(`https://api.github.com/users/hiteshchoudhary`)
       return response.json()
}