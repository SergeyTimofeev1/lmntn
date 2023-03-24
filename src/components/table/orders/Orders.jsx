import { useParams } from 'react-router-dom'
import OrdersHeader from '../orders-header/OrdersHeader'
import OrdersTableBody from '../orders-table-body/OrdersTableBody'
import OrdersTableHeader from '../orders-table-header/OrdersTableHeader'

const Orders = () => {
  const urlParamsArray = Object.keys(useParams())
  console.log(urlParamsArray)

  if (urlParamsArray.length > 0) {
    return <OrdersHeader />
  } else {
    return (
      <>
        <OrdersHeader />
        <div className="main-page__orders orders">
          <table className="orders__table table">
            <OrdersTableHeader />
            <OrdersTableBody />
          </table>
          <p style={{ textAlign: 'center', fontWeight: '600' }}>Загружаю еще...</p>
        </div>
      </>
    )
  }
}

export default Orders
