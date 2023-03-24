import React, { useContext } from 'react'
import orderLogo from '../../../assets/img/order-logo-big.png'
import { UserContext } from '../context/UserContext'

const OrderLogoPreview = () => {
  const { hideOrderImg } = useContext(UserContext)
  return (
    <div className="order-logo">
      <div className="logo-overlay">
        <img className="order-logo__img" src={orderLogo} alt="order-logo-big" />
      </div>
      <button className="order-logo-close" onClick={hideOrderImg}>
        X Закрыть
      </button>
    </div>
  )
}

export default OrderLogoPreview
