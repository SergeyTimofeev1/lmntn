import './App.scss'
import LoginPage from './pages/LoginPage'
import { Route, Routes } from 'react-router-dom'
import Orders from './components/orders/Orders'
import RegisterPage from './pages/RegisterPage'
import LoginLayout from './components/login-layout/LoginLayout'
import UserCard from './components/user-card/UserCard'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="orders" element={<Orders />} />
          <Route path="registration" element={<RegisterPage />} />
          <Route path="user" element={<UserCard />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
