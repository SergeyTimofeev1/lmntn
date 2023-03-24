import React, { useRef, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useAuth } from 'hooks/use-auth'
import { useParams } from 'react-router-dom'

const LoginLayout = () => {
  const [isReg, setIsReg] = useState(true)
  const isRegActive = () => setIsReg(true)
  const isRegNotActive = () => setIsReg(false)

  return (
    <>
      <div className="auth__header">
        <Link
          className={isReg ? 'auth__link active' : 'auth__link'}
          to="/lmntn"
          onClick={isRegActive}
        >
          Вход
        </Link>
        <Link
          className={!isReg ? 'auth__link active' : 'auth__link'}
          to="registration"
          onClick={isRegNotActive}
        >
          Регистрация
        </Link>
      </div>
      <Outlet />
    </>
  )
}

export default LoginLayout
