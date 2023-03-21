import OrdersTableBody from '../orders-table-body/OrdersTableBody'
import OrdersTableHeader from '../orders-table-header/OrdersTableHeader'

const Orders = () => {
  return (
    <div className="main-page__orders orders">
      <table className="orders__table table">
        <OrdersTableHeader />
        <OrdersTableBody />
      </table>
    </div>
  )
}

export default Orders
