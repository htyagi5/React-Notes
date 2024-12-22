// Most imp component jo user ki info collect karta hai by giving it a unique id if we use that into ip we can reach
//that page like in this 'http://localhost:5173/user/123'
import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userId} =useParams()
    return (
        <div  className='bg-gray-700 text-white flex place-content-center text-3xl p-4'>
         User: {userId}
        </div>
        
    )
}

export default User
