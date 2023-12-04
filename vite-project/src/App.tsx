import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import SignIn from './Pages/SignIn'
import SignOut from './Pages/SignOut'
import About from './Pages/About'
function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Profile' element={<Profile/>}/>
            <Route path='/SignIn' element={<SignIn/>}/>
            <Route path='/SignOut' element={<SignOut/>}/>
            <Route path='/About' element={<About/>}/>
            
        </Routes>
    </BrowserRouter>
  )
}

export default App
