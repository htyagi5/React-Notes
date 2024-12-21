//useId is a new hook ->jab hum kisi input ko tap tap karke select karte hai if we want ki unique id generate ho then we use it
import React,{useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    CurrencyOptions=[],
    selectCurrency="usd",
    amountDisable=false,
    currencyDisable=false,
    
    className = "",
}) {
   
    const amountInputId=useId()
    return (

        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}> {/* this way we can get css from user */} 
            <div className="w-1/2">
                <label  htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}//use it here to bind with label
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}//first onAmountChange basically check that it exist or not this is a synntax
                    // and Number is used because the data is coming in string form to convert them
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    
                        {CurrencyOptions.map((currency)=>(// map is used to loop
                            <option key={currency} value={currency}>{/* //agar loops use karne hai toh key ka dhyan rakhe */}
                                {currency}
                            </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;