import { useAuth } from 'hooks/use-auth'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { removeUser } from 'store/slices/userSlice'

const UserCard = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <button
      onClick={() => {
        dispatch(removeUser())
        navigate('/login')
      }}
    >
      Выйти из профиля
    </button>
  )
}

export default UserCard
