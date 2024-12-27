import React from "react"
import UserContext from "./UserContext"
 const UserContextProvider=({children})=>{
    // jo bhi api ya access call karna hai yhi par kar sakte hai aur easily xport from here
     const [user,setUser]=React.useState(null)
    //  if we donot want to  import usestate in upward this 
    return(
   <UserContext.Provider value={{user,setUser}}>
     {children}
   </UserContext.Provider>
    )
 }
 export default UserContextProvider


 