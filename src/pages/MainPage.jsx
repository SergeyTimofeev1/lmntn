import OrdersHeader from 'components/table/orders-header/OrdersHeader'
import Orders from 'components/table/orders/Orders'

const MainPage = () => {
  return (
    <div className="main-page">
      <OrdersHeader />
      <Orders />
    </div>
  )
}

export default MainPage
