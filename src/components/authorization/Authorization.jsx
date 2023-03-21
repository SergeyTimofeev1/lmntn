import LoginLayout from 'components/login-layout/LoginLayout'
import MainPage from 'pages/MainPage'
import RegisterPage from 'pages/RegisterPage'
import { Link, Route, Routes } from 'react-router-dom'
import LoginPage from '../../pages/LoginPage'
import { useAuth } from 'hooks/use-auth'

const Authorization = () => {
  const { isAuth } = useAuth()

  return (
    <div className="auth">
      {/* TODO исправить роутинг!! */}
      <div className={!isAuth ? 'auth__content' : 'orders'}>
        <Routes>
          <Route path="/" element={<LoginLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<RegisterPage />} />
          </Route>
          <Route path="orders" element={<MainPage />} />
        </Routes>
      </div>
      <div className="auth__info">
        <ul className="auth__info-list">
          <li className="auth__info-item">2023</li>
          <li className="auth__info-item">Политика конфиденциальности</li>
          <li className="auth__info-item">
            <a className="auth__info-link" href="tel:8800000000">
              8 800 000 000
            </a>
          </li>
          <li className="auth__info-item">
            <Link className="auth__info-link" to="/login">
              Обратная связь
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Authorization
