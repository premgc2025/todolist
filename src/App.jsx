import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar'
import TodoList from './components/TodoList'
import Contact from './components/Contact.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 
    <Router>

        <div className="app">


          <Navbar />
          <div className="content">
            <Routes>
              <Route path='/' element={<TodoList/>}/>
              <Route path="/contact" element={<Contact/>} />
            </Routes>
          </div>
        
        </div>

      </Router>
     
  
    
    </>
  )
}

export default App
