import React from 'react'
import OrdersTableRow from '../orders-table-row/OrdersTableRow'
import { tableRowData } from 'data'

const OrdersTableBody = () => {
  return (
    <tbody className="table__body">
      {tableRowData.map((row, index) => (
        <OrdersTableRow key={index} rowData={tableRowData[index]} />
      ))}
    </tbody>
  )
}

export default OrdersTableBody
