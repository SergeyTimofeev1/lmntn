import Form from 'components/form/Form'
import { useDispatch } from 'react-redux'
import { setUser } from 'store/slices/userSlice'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = (email, pass) => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, pass)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            token: user.accessToken,
            id: user.uid
          })
        )
        navigate('/orders')
      })
      .catch(() => alert('Пользователя не существует'))
  }

  return <Form title="Войти" handleClick={handleLogin} passRestore={'Восстановить пароль'} />
}

export default Login
