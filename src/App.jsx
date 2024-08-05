import React from 'react'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import { Route, Routes } from 'react-router-dom'
import StudentDetails from './components/StudentDetails/StudentDetails'
import TeacherDetails from './components/TeacherDetails/TeacherDetails'
function App() {
  return (
    <div>
       <Routes>
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/student' element={<StudentDetails />} />
        <Route exact path='/teacher' element={<TeacherDetails />} />
      </Routes> 
    </div>
  )
}

export default App