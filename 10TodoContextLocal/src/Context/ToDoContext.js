import { useContext,createContext } from "react";

export const ToDoContext=createContext({
    todos:[           //ye properties hai jo hame apne todo me kon kon si functionality introduce karni hai
        {
            id:1,
            todo:"todo msg",
            completed:false,
        }
    ],
    addTodo:(todo)=>{},   //ye sab methods hai
    updatedTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
})

export const useToDo=()=>{   //our hook
    return useContext(ToDoContext)  //usecontext ko batana padta hai kis context ki baat ho rhi hai
}

export const Todoprovider =ToDoContext.Provider