import OrdersTableBody from '../orders-table-body/OrdersTableBody'
import OrdersTableHeader from '../orders-table-header/OrdersTableHeader'

const Orders = () => {
  return (
    <div className="main-page__orders orders">
      <table className="orders__table table">
        <OrdersTableHeader />
        <OrdersTableBody />
      </table>
      <p style={{ textAlign: 'center', fontWeight: '600' }}>Загружаю еще...</p>
    </div>
  )
}

export default Orders
