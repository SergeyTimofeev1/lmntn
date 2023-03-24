import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const OrderComponentButtons = () => {
  const { isHistory, historyShow, commentsShow } = useContext(UserContext)
  return (
    <>
      <div className="order-info__buttons">
        <button
          className={isHistory ? 'order-info__button history active' : 'order-info__button history'}
          onClick={commentsShow}
        >
          История заказа
        </button>
        <button
          className={
            !isHistory ? 'order-info__button comments active' : 'order-info__button comments'
          }
          onClick={historyShow}
        >
          Комментарии
        </button>
      </div>
      <button className="order-info__button-update">Обновить</button>
    </>
  )
}

export default OrderComponentButtons
