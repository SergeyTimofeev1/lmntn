import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

const LoginLayout = () => {
  return (
    <>
      <div className="auth__header">
        <NavLink className="auth__link" to="/login">
          Вход
        </NavLink>
        <NavLink className="auth__link" to="/registration">
          Регистрация
        </NavLink>
      </div>
      <Outlet />
    </>
  )
}

export default LoginLayout
