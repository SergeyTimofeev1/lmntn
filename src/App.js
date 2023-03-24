import './App.scss'
import { useAuth } from 'hooks/use-auth'
import Authorization from 'components/authorization/Authorization'
import { Navigate, Routes, useNavigate } from 'react-router-dom'
import MainPage from 'pages/MainPage'

function App() {
  const { isAuth } = useAuth()

  // return <div className="App">{!isAuth && <Navigate replace to="/" />}</div>
  // !! Раcкоментить когда закончу верстать главную
  return <div className="App">{!isAuth ? <Authorization /> : <MainPage />}</div>
  // !====
  // return (
  //   <div className="App">
  //     <MainPage />
  //   </div>
  // )
}

export default App
