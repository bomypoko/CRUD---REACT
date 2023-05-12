import { useState } from 'react'
import { Routes , Route , Link } from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar'
import Users from './components/User'
import UserCreate from './components/UserCreate'
import UserUpdate from './components/UserUpdate'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      

      <Navbar/>
      <Routes>
        <Route path="/" element={<Users/>} />
        <Route path="create" element={<UserCreate/>}/>
        <Route path="update/:id" element={<UserUpdate/>}/>
      </Routes>

      
      
      
    </div>
  )
}

export default App
