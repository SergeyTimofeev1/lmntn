import { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import OrderComponentButtons from '../order-component-buttons/OrderComponentButtons'
import OrderComponentComments from '../order-component-comments/OrderComponentComments'
import OrderComponentCustomer from '../order-component-customer/OrderComponentCustomer'
import OrderComponentHistory from '../order-component-history/OrderComponentHistory'
import OrderComponentHeader from '../order-header/OrderComponentHeader'

const OrderComponent = () => {
  const { isHistory } = useContext(UserContext)

  return (
    <>
      <div className="order">
        <OrderComponentHeader />
        <div className="order__inner">
          <div className="order__info order-info">
            <OrderComponentButtons />
            {isHistory ? <OrderComponentHistory /> : <OrderComponentComments />}
          </div>
          <OrderComponentCustomer />
        </div>
      </div>
    </>
  )
}

export default OrderComponent
