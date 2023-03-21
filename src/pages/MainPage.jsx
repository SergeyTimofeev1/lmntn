import OrdersHeader from 'components/orders-header/OrdersHeader'
import Orders from 'components/orders/Orders'

const MainPage = () => {
  return (
    <div className="main-page">
      <OrdersHeader />
      <Orders />
    </div>
  )
}

export default MainPage
