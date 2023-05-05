import { useState } from 'react'
import { Routes , Route , Link } from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar'
import Users from './components/User'
import UserCreate from './components/UserCreate'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      

      <Navbar/>
      <Routes>
        <Route path="/" element={<Users/>} />
        <Route path="create" element={<UserCreate/>}/>
      </Routes>

      
      
      
    </div>
  )
}

export default App
