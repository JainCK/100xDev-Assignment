import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("white")

  return (
    <>
    <div className='w-screen h-screen duration-200' style={{backgroundColor:color}}></div>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-slate-400 px-3 py-2 rounded-3xl">
        <button className='outline-none px-5 py-2 rounded-full bg-red-600 text-slate-200' onClick={()=> setColor("red")}>red</button>
        <button className='outline-none px-4 py-2 rounded-full bg-yellow-600 text-slate-200' onClick={()=> setColor("yellow")}>yellow</button>
        <button className='outline-none px-4 py-2 rounded-full bg-black text-slate-200' onClick={()=> setColor("black")}>black</button>
        <button className='outline-none px-4 py-2 rounded-full bg-purple-600 text-black' onClick={()=> setColor("purple")}>Purple</button>
        <button className='outline-none px-4 py-2 rounded-full bg-green-600 text-slate-200' onClick={()=> setColor("green")}>green</button>
        <button className='outline-none px-4 py-2 rounded-full bg-blue-600 text-slate-200' onClick={()=> setColor("blue")}>blue</button>
        <button className='outline-none px-4 py-2 rounded-full bg-orange-500 text-slate-200' onClick={()=> setColor("white")}>default</button>
      </div>
    </div>
    </>
  )
}

export default App
