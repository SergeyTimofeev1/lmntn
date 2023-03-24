// import SvgSelector from 'components/SvgSelector/SvgSelector'
import SvgSelector from 'components/SvgSelector/SvgSelector'
import { NavLink, Outlet } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const OrdersHeader = () => {
  // console.log(Object.values(useParams()).length)
  const urlParams = Object.values(useParams()).length
  return (
    <>
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
            {!urlParams ? (
              <div className="header__actions">
                <div className="input__wrapper">
                  <input className="header__actions-input" type="search" placeholder="Поиск" />
                </div>
                <button className="header__actions-btn download">
                  <SvgSelector id="download" />
                  Выгрузить в Excel
                </button>
                <div className="add-form__upload-file">
                  <input className="add-form__upload-input" type="file" accept=".pdf" />
                  <div className="add-form__upload-block">
                    <button className="header__actions-btn unload">
                      <SvgSelector id="unload" />
                      Загрузить файлы
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="header__actions">
                <div className="add-form__upload-file">
                  <input className="add-form__upload-input" type="file" accept=".pdf" />
                  <div className="add-form__upload-block">
                    <button className="header__actions-btn unload">
                      <SvgSelector id="unload" />
                      Загрузить файлы
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default OrdersHeader
