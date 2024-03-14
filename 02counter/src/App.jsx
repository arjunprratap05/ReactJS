import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15)

  //let counter = 15
  const  addValue = () => {
    if(counter <20)
    {
      setCounter(prevCounter => prevCounter + 1) 
    }else{
      console.log("Value Exceeded")
    }
    //counter = counter + 1
   //setCounter(counter + 1)
   //console.log("Value Added" , counter);
  }

  const removeValue = ()=> {
    if(counter > 0)
    {
      setCounter(prevCounter => prevCounter -1)
    }else
    {
      console.log("Value can't be Negative")
    }
   // setCounter(counter - 1)

 }
  return (
    <>
      <h1> Chai aur react</h1>
      <h2> Counter value :{counter}</h2>
      <button
        onClick = {addValue}
        >Add Value {counter}</button>
      <br />
      <button
      on onClick={removeValue}>Remove Value {counter}</button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
