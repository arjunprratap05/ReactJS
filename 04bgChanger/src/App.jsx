import { useState } from "react"


function App() {
  const [color,setColor] = useState("olive")

  return (
    // <div className="w-full h-screen duration-200"
    // style = {{backgroundColor : color}}
    // >
    //   <div className="fixed flex flex-wrap
    //   justify -center bottom-12 inset-x-0 px-2">Test</div>
    

    // <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">Test</div>4
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color, height: "100vh" }} // Set height to 100vh
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">Test</div>

      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">Test</div>
   <button
   onClick={()=> setColor("red")}
   className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
   style={{backgroundColor : "red"}}
   >RED</button>

<button
onClick={() => setColor("green")}
   className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
   style={{backgroundColor : "green"}}
   >GREEN</button>

<button
onClick={() => setColor("blue")}
   className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
   style={{backgroundColor : "blue"}}
   >BLUE</button>

<button
onClick={() => setColor("magenta")}
   className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
   style={{backgroundColor : "magenta"}}
   >Magenta</button>

<button
onClick={() => setColor("brown")}
   className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
   style={{backgroundColor : "brown"}}
   >Brown</button>

<button
onClick={() => setColor("black")}
   className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
   style={{backgroundColor : "white"}}
   >Black</button>
    </div>
  )
}

export default App
