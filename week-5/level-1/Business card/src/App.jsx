import { useState } from 'react'
import './App.css'
import { Card } from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card 
      name="Jain" 
      description="Fullstack dev" 
      interests = {['Coding', 'Drawing', 'Gaming']} 
      linkedin = 'https://www.linkedin.com/in/jain-c-kuriakose/'
      twitter = 'https://twitter.com/jain_kuriakose'
      />
    </>
  )
}

export default App
