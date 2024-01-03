import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './componenets/CreateTodo'
import { Todos } from './componenets/Todos'

function App() {


  return (
    <>
      <CreateTodo />
      <Todos  todos={[{
        title: "GYM",
        description: "30 mins",
        completed: false
      }
      ]}/>
    </>
  )
}

export default App
