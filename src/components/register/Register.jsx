import Form from 'components/form/Form'
import { useDispatch } from 'react-redux'
import { setUser } from 'store/slices/userSlice'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleRegister = (email, pass) => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, pass)
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
      .catch(console.error)
  }

  return <Form title="Зарегистрироваться" handleClick={handleRegister} />
}

export default Register
