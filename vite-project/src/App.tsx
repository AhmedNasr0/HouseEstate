import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import About from './Pages/About'
import Header from './Components/Header'
function App() {

  return (
    <>
    
    <BrowserRouter>
    <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Profile' element={<Profile/>}/>
            <Route path='/SignIn' element={<SignIn/>}/>
            <Route path='/SignUp' element={<SignUp/>}/>
            <Route path='/About' element={<About/>}/>
        </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default App
