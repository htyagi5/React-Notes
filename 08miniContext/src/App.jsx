import UserContext from './context/UserContext'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
function App() {

  return (
    <>
     <UserContextProvider>
      {/* //this the wrapper we have have applied now the data which should be needed we put in Usercontex
      //and jo bhi iss wrapper mai aayega use uss data ka acess mil jayega */}
      <h1>CONTEXT API</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
    </>
  )
}

export default App
