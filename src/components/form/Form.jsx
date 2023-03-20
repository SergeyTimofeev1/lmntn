import React, { useState } from 'react'

const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  return (
    <>
      <form className="login">
        <div className="login__content">
          <input
            className="login__input"
            type="text"
            placeholder="Логин"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            className="login__input"
            type="password"
            placeholder="Пароль"
            value={pass}
            onChange={e => setPass(e.target.value)}
          />
        </div>
        <p className="login__pass-restore-text">Восстановить пароль</p>
        <button
          className="login__btn"
          onClick={e => {
            e.preventDefault()
            handleClick(email, pass)
          }}
        >
          {title}
        </button>
      </form>
    </>
  )
}

export default Form
