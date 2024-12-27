import React from "react"

const UserContext=React.createContext()//it  is method same as usestate

export default UserContext

{/*//this all gives us variable so every context is a Provider
//so we use it as wrapper as mean jo bhi iss  wrrraper me hoga uske pass iska acess hoga

//example
 <UserContext>  //userContext is now acting as global variable 
    <Login/>
    <card>
        <data/>
    </card>
</UserContext> */}