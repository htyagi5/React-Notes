//app.jsx helps to return html and react will render it
import Chai from "./chai"
function App() {

  return (
    <>  {/*fragment  -> used because jsx only returns 1 thing so we have to compile it in div or fragment*/  }
    <h1>chai aur code | HT</h1>
    <Chai/>
    </>
  )
}

//right way to create element in react

export default App
