import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import SideBar from './component/SideBar/SideBar'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './component/Dashboard/Dashboard'
import History from './component/History/History'
import Admin from './component/Admin/Admin'
import Login from './component/Login/Login'
import { useLocation } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)
  const location = useLocation();

  return (
    <>
      <div className='App'>
        {location.pathname !== "/" && <SideBar />}
        <Routes>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/history' element={<History/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/' element={<Login/>}/>


        </Routes>
      </div>
    </>
  )
}

export default App
