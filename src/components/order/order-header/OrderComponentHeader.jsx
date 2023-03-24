import React from 'react'

const OrderComponentHeader = () => {
  return (
    <div className="order__header order-header">
      <div className="container">
        <div className="order-header__inner">
          <h2 className="order-header__title">Заказ ХХ—1234657890</h2>
          <div className="order-header__info header-info">
            <div className="header-info__item">
              <p className="header-info__item-title">Аванс 1С</p>
              <div className="header-info__item-text">0%</div>
            </div>
            <div className="header-info__item">
              <p className="header-info__item-title">Уплачено 1С</p>
              <div className="header-info__item-text">90 000 ₽</div>
            </div>
            <div className="header-info__item">
              <p className="header-info__item-title">Стоимость договора</p>
              <div className="header-info__item-text">150 000 ₽</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderComponentHeader
