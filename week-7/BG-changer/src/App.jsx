import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("white")

  return (
    <>
    <div className='w-screen h-screen duration-200' style={{backgroundColor:color}}>
    <h1 className="pt-12 text-3xl font-bold italic text-sky-400">
      Tap the Buttons to change the backgroundColor
      </h1>
    </div>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button className='outline-none px-5 py-2 rounded-full bg-red-600 text-slate-200' onClick={()=> setColor("red")}>Red</button>
        <button className='outline-none px-4 py-2 rounded-full bg-yellow-600 text-slate-200' onClick={()=> setColor("yellow")}>Yellow</button>
        <button className='outline-none px-4 py-2 rounded-full bg-black text-slate-200' onClick={()=> setColor("black")}>Black</button>
        <button className='outline-none px-4 py-2 rounded-full bg-purple-600 text-black' onClick={()=> setColor("purple")}>Purple</button>
        <button className='outline-none px-4 py-2 rounded-full bg-green-600 text-slate-200' onClick={()=> setColor("green")}>Green</button>
        <button className='outline-none px-4 py-2 rounded-full bg-blue-600 text-slate-200' onClick={()=> setColor("blue")}>Blue</button>
        <button className='outline-none px-4 py-2 rounded-full bg-orange-500 text-slate-200' onClick={()=> setColor("white")}>Default</button>
      </div>
    </div>
    </>
  )
}

export default App
