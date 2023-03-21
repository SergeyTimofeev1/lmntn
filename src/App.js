import './App.scss'
import { useAuth } from 'hooks/use-auth'
import Authorization from 'components/authorization/Authorization'
import { Navigate, Routes } from 'react-router-dom'
import MainPage from 'pages/MainPage'

function App() {
  const { isAuth } = useAuth()
  // return <div className="App">{!isAuth && <Navigate replace to="/login" />}</div>
  return <div className="App">{!isAuth ? <Authorization /> : <MainPage />}</div>
}

export default App
