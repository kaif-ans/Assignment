import { useState } from 'react'
import './App.css'
import SignUp from "./SignUp";
import Login from "./Login";
import { Routes, Route } from "react-router-dom";
import HomePage from './HomePage';
import JobForm from './JobForm';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/jobform' element={<JobForm />} />
      </Routes>
    </div>
  )
}

export default App
