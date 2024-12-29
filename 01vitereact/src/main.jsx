//main.jsx render the app.jsx html
import { createElement, StrictMode } from 'react'  //core library of react
import React from 'react';  //only require to imlement reactElement
import { createRoot } from 'react-dom/client'  //library for implementation project on web 
import App from './App.jsx'

//direct function declare and render on same page
function MyApp(){
  return(
    <>
      <h2>CHAI VS REACT</h2>
    </>
  )
}

const reactElement=React.createElement(
  'a',
  {href: "https://google.com",target:"_blank"},
  'VISIT GOOGLE'
)


const anotherElement=(
  <a href="https://google.com" target='_blank'>VISIT GOOGLE</a>
)


createRoot(document.getElementById('root')).render(
  <StrictMode> {/*no need*/}
  <App/>
    <MyApp />   { /*give power (jsx)to render html  */}
  </StrictMode>,  {/*no need*/}
)


// createRoot(document.getElementById('root')).render(
//   //  MyApp()
// )
// createRoot(document.getElementById('root')).render(
//   anotherElement
// )

// createRoot(document.getElementById('root')).render(
//      reactElement
//   )
