import SvgSelector from 'components/SvgSelector/SvgSelector'
import React from 'react'
import { NavLink } from 'react-router-dom'

const UserCardHeader = () => {
  return (
    <div className="main-page__header header">
      <div className="container">
        <div className="header__inner">
          <div className="header__info">
            <div className="header__logo">
              <SvgSelector id="logo" />
            </div>
            <div className="header__info-buttons">
              <NavLink className="header__info-btn orders-btn" to="/orders">
                <SvgSelector id="orders" />
                Заказы
              </NavLink>
              <NavLink className="header__info-btn user-btn" to="/user">
                <SvgSelector id="user" />
                Мишанин С. В.
              </NavLink>
            </div>
          </div>
          <div className="header__actions">
            <button className="header__actions-btn unload">
              <SvgSelector id="unload" />
              Загрузить файлы
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserCardHeader
