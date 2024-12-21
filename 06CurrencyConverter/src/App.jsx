import React, { useState } from 'react'
import { InputBox } from './components'
import UseCurrencyinfo from './hooks/UseCurrencyinfo'
function App() {
  const [amount,setAmount]=useState(0)
  const [from,setFrom]=useState('usd')
  const [to,setTo]=useState('inr')
  const [convertedAmount,setConvertedAmount]=useState(0)
  const currencyInfo=UseCurrencyinfo(from)

  const options = Object.keys(currencyInfo)

  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

 const convert =()=>{
  setConvertedAmount(amount*currencyInfo[to])
 }
 return (
  <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
          backgroundImage: `url('https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=600')`,
      }}
  >
      <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
              <form
                  onSubmit={(e) => {
                      e.preventDefault();
                     convert()
                  }}
              >
                  <div className="w-full mb-1">
                      <InputBox
                          label="From"
                          amount={amount}
                          CurrencyOptions={options}
                          onCurrencyChange={
                            (currency)=>setFrom(currency)
                          }
                          selectCurrency={from}
                          onAmountChange={(amount)=>setAmount(amount)}
                      />
                  </div>
                  <div className="relative h-0.5">
                      <button
                          type="button"
                          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                         onClick={swap} 
                      >
                          swap
                      </button>
                  </div>
                  <div className="w-full mt-1 mb-4">
                      <InputBox
                          label="To"
                          amount={convertedAmount}
                          CurrencyOptions={options}
                          onCurrencyChange={
                            (currency)=>setTo(currency)
                          }
                          selectCurrency={to}
                          amountDisable
                          // or
                          // amountDisable=true
                      />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                      Convert {from.toUpperCase() } to {to.toUpperCase()}
                  </button>
              </form>
          </div>
      </div>
  </div>
);
}

export default App

























// function App() {

//   return (
//     <>
//     <div className='bg-black w-screen h-screen'>
//     <h1 className='flex place-content-center text-5xl  text-white'>CURRENCY CONVERTER</h1>
//     <div className=' bg-slate-600 mb-11 mr-56 ml-64 mt-9 rounded-lg flex flex-col'>
//      <div className='bg-white mt-7 ml-8 mr-8 text-xl rounded-lg flex justify-between '>
//       <p  className="mb-11 text-gray-400">from</p>
//       <p className="mb-11 text-gray-400">Currency Type</p>
//      </div>
//       <button className= "bg-blue-500 rounded-lg w-28 h-20 ml-80 mr-80 text-3xl">SWAP
//         </button>
//      <div className='bg-white mb-7 ml-8 mr-8 text-xl rounded-lg flex justify-between'>
//       <p   className="mb-11  text-gray-400">To</p>
//       <p  className="mb-11 text-gray-400">Currency Type</p>
//       </div>
//     </div>
//     </div>
     
//     </>
//   )
// }

// export default App
