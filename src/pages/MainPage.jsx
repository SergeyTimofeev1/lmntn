import OrdersHeader from 'components/table/orders-header/OrdersHeader'
import Orders from 'components/table/orders/Orders'
import UserCard from 'components/user-card/UserCard'
import { Routes, Route } from 'react-router-dom'

const MainPage = () => {
  return (
    <div className="main-page">
      <Routes>
        <Route path="/orders" element={<OrdersHeader />}>
          <Route index element={<Orders />} />
          <Route path="user" element={<UserCard />} />
        </Route>
      </Routes>
    </div>
  )
}

export default MainPage
