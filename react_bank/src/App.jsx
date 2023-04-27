import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Profile from "./pages/Profile"

import './App.css'

function App() {

  return (

    <Routes>
      <Route path ="/" element={<Home />}/>
      <Route path ="/login" element={<Login />}/>
      <Route path ="/profile" element={<Profile />}/>
    </Routes>

  )
}

export default App
