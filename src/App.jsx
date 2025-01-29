import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import TodoList from './components/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <TodoList/>
    
    </>
  )
}

export default App
