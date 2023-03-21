// import SvgSelector from 'components/SvgSelector/SvgSelector'
import SvgSelector from 'components/SvgSelector/SvgSelector'

const OrdersHeader = () => {
  return (
    <div className="main-page__header header">
      <div className="header__inner">
        <div className="header__info">
          <div className="header__logo">
            <SvgSelector id="logo" />
          </div>
          <div className="header__info-buttons">
            <div className="header__info-btn orders-btn">
              <SvgSelector id="orders" />
              Заказы
            </div>
            <div className="header__info-btn user-btn">
              <SvgSelector id="user" />
              Мишанин С. В.
            </div>
          </div>
        </div>
        <div className="header__actions">
          <div className="input__wrapper">
            <input className="header__actions-input" type="search" placeholder="Поиск" />
          </div>
          <button className="header__actions-btn download">
            <SvgSelector id="download" />
            Выгрузить в Excel
          </button>
          <button className="header__actions-btn unload">
            <SvgSelector id="unload" />
            Загрузить файлы
          </button>
        </div>
      </div>
    </div>
  )
}

export default OrdersHeader
