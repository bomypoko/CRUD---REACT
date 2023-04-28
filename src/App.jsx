import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Users from './components/User'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Users/>
      
      
    </div>
  )
}

export default App
