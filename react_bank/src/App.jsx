import { Link, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Profile from "./pages/Profile"

import './App.css'

function App() {

  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login </Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path ="/" element={<Home />}/>
      <Route path ="/login" element={<Login />}/>
      <Route path ="/profile" element={<Profile />}/>
    </Routes>
    </>
   

  )
}

export default App
