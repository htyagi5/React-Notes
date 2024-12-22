import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github,{GithubInfoLoader} from './components/Github/Github.jsx'
// const router =createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element: <Home />
//       },
//       {
//        path:"about",
//        element:<About />
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       },
//       {
//         path:"user/:userId",
//         element:<User/>
//       },
    //      {
    // loader:{GithubInfoLoader},//optimised method which loads the info from api as soon we put our cursor over the Header's Github
    // path:'github' ,
    // element:{<Github/>} 
    //       }
//     ]
//   }
// ])
//OR
const router=createBrowserRouter(//createBrowserRouter is a method for establishing Route method
  createRoutesFromElements(
    <Route  path='/' element={<Layout/>}>
   <Route path='' element={<Home/>} />
   <Route path='about' element={<About/>} />
   <Route path='contact' element={<Contact/>} />
   <Route path='user/:userId' element={<User/>} />
   <Route
     loader={GithubInfoLoader}//optimised method which loads the info from api as soon we put our cursor over the 
     // Header's Github means it destroy the lag earlier

    path='github' 
    element={<Github/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    {/* this is the wrapper only wants router as input  */}
  </StrictMode>,
)
