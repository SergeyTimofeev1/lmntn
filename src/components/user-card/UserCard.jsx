import SvgSelector from 'components/SvgSelector/SvgSelector'
import UserCardHeader from 'components/user-card-header/UserCardHeader'
import { useAuth } from 'hooks/use-auth'
import { useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { removeUser } from 'store/slices/userSlice'

const UserCard = ({ login }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { email } = useAuth()

  return (
    <>
      <UserCardHeader />

      <div className="user">
        <h2 className="user__title">Мишанин Сергей Викторович, старший менеджер</h2>
        <div className="user__content user-content">
          <form className="user-content__form user-form" action="#">
            <h4 className="user-form__title">О пользователе</h4>
            <div className="user-form__content">
              <div className="user-form__item">
                <label className="user-form__label" htmlFor="formItem">
                  Фамилия
                </label>
                <input
                  disabled
                  className="user-form__input"
                  id="formItem"
                  type="text"
                  name="name"
                  placeholder="Мишанин"
                />
              </div>
              <div className="user-form__item">
                <label className="user-form__label" htmlFor="formItem">
                  Имя
                </label>
                <input
                  disabled
                  className="user-form__input"
                  id="formItem"
                  type="text"
                  name="name"
                  placeholder="Сергей"
                />
              </div>
              <div className="user-form__item">
                <label className="user-form__label" htmlFor="formItem">
                  Отчество
                </label>
                <input
                  disabled
                  className="user-form__input"
                  id="formItem"
                  type="text"
                  name="name"
                  placeholder="Викторович"
                />
              </div>
              <div className="user-form__item">
                <label className="user-form__label" htmlFor="formItem">
                  Регион
                </label>
                <input
                  disabled
                  className="user-form__input"
                  id="formItem"
                  type="text"
                  name="name"
                  placeholder="Санкт-Петербург"
                />
              </div>
              <div className="user-form__item">
                <label className="user-form__label" htmlFor="formItem">
                  РГП
                </label>
                <input
                  disabled
                  className="user-form__input"
                  id="formItem"
                  type="text"
                  name="name"
                  placeholder="Сидоров В. В."
                />
              </div>
              <div className="user-form__item">
                <label className="user-form__label" htmlFor="formItem">
                  Роль
                </label>
                <input
                  disabled
                  className="user-form__input"
                  id="formItem"
                  type="text"
                  name="name"
                  placeholder="Старший менеджер"
                />
              </div>
            </div>
          </form>

          <div className="user-content__info user-info">
            <h4 className="user-info__title">Логин</h4>
            <p className="user-info__descr">Логин (почта)</p>
            <div className="user-info__actions">
              <input
                disabled
                className="user-info__actions-input"
                type="text"
                placeholder={email}
              />
              <button
                className="user-info__actions-button"
                onClick={() => {
                  dispatch(removeUser())
                  navigate('/')
                }}
              >
                Выйти из профиля
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserCard
