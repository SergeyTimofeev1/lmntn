import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const LoginLayout = () => {
  return (
    <>
      <div className="login-header">
        <Link className="login-page__link active" to="/login">
          Вход
        </Link>
        <Link className="login-page__link" to="/registration">
          Регистрация
        </Link>
      </div>
      <Outlet />
    </>
  )
}

export default LoginLayout
