import React, { useState } from 'react'

const Form = ({ title, handleClick, passRestore }) => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  return (
    <>
      <form className="auth-form">
        <div className="auth-form__content">
          <input
            className="auth-form__input"
            type="text"
            placeholder="Логин"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            className="auth-form__input"
            type="password"
            placeholder="Пароль"
            value={pass}
            onChange={e => setPass(e.target.value)}
          />
        </div>
        {passRestore && <p className="auth-form__pass-restore-text">{passRestore}</p>}
        <button
          className="auth-form__btn button-main"
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
