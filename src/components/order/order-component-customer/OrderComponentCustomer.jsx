import { useContext } from 'react'
import logo from '../../../assets/img/user-logo.jpg'
import { UserContext } from '../context/UserContext'

const OrderComponentCustomer = () => {
  const { commentsAddFormShow } = useContext(UserContext)

  return (
    <div className="order__customer order-customer">
      <div className="order-customer__inner">
        <img className="order-customer__img" src={logo} alt="user-logo" />
        <div className="order-customer__info customer-info">
          <div className="customer-info__items">
            <div className="customer-info__item">
              <h5 className="customer-info__item-title">Заказчик</h5>
              <div className="customer-info__item-text">Иванов Сергей Викторович</div>
            </div>
            <div className="customer-info__item">
              <h5 className="customer-info__item-title">Телефон</h5>
              <div className="customer-info__item-text">+7 (999) 888-77-66</div>
            </div>
            <div className="customer-info__item">
              <h5 className="customer-info__item-title">E-mail</h5>
              <div className="customer-info__item-text">sergey.viktorovich.ivanov@mail.ru</div>
            </div>
            <div className="customer-info__item">
              <h5 className="customer-info__item-title">Адрес доставки</h5>
              <div className="customer-info__item-text">
                Санкт-Петербург, наб реки Фонтанки, дом 125, литера А, корпус 12, кв. 23
              </div>
            </div>
            <div className="customer-info__item">
              <h5 className="customer-info__item-title">Менеджер</h5>
              <div className="customer-info__item-text">Петров Виктор</div>
            </div>
          </div>
          <div className="customer-info__buttons">
            <button className="customer-info__btn">Скачать заказ</button>
            <button className="customer-info__btn" onClick={commentsAddFormShow}>
              Добавить комментарий
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderComponentCustomer
