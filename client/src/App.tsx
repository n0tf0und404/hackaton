import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Landing from './pages/Landing/Landing'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Chat from './pages/Chat/Chat'
import Dashboard from './pages/Dashboard/Dashboard'
import ChatDoctorIA from './pages/DoctorIA/ChatDoctorIA'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/chat' element={<Chat />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/doctoria' element={<ChatDoctorIA />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
