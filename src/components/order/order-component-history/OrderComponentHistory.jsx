import OrdersSvgSelector from 'components/table/orders-svg-selector/OrdersSvgSelector'
import React from 'react'

const OrderComponentHistory = () => {
  return (
    <ul className="order-info__history order-history">
      <li className="order-history__item">Подписание договора</li>
      <li className="order-history__item">Подписание договора</li>
      <li className="order-history__item">Исполнение заказа</li>
      <li className="order-history__item">
        Отправка заказа <span>13.12.22 в 09:00</span>
      </li>
      <li className="order-history__item">
        Заблокирован Семенова И. И. <span>13.12.22 в 09:00</span>
        <button disabled>
          Причина блокировки описана здесь <OrdersSvgSelector id="block" />
        </button>
      </li>
      <li className="order-history__item">
        Переформирование Сидоров Я. Н. <span>12.12.22 в 09:00</span>
      </li>
      <li className="order-history__item">
        Изменение Сидоров Я. Н. <span>12.12.22 в 09:00</span>
        <button disabled>Состав изменения</button>
      </li>
      <li className="order-history__item">
        1С: Файл принят <span>12.12.22 в 09:00</span>
      </li>
      <li className="order-history__item">
        Заказ загружен менеджером Петров В. В.
        <span>12.12.22 в 14:00</span>
        <button disabled>Смотреть заказ в модальном окне</button>
      </li>
      <li className="order-history__item">
        1С: Ошибка
        <span>11.12.22 в 19:00</span>
      </li>
      <li className="order-history__item">
        Внутрення проверка файла пройдена
        <span>11.12.22 в 18:00</span>
      </li>
      <li className="order-history__item">
        Заказ загружен менеджером Петров В. В.
        <span>11.12.22 в 18:00</span>
        <button disabled>Смотреть заказ в модальном окне</button>
      </li>
    </ul>
  )
}

export default OrderComponentHistory
