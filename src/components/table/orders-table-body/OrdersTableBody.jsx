import React from 'react'
import OrdersTableRow from '../orders-table-row/OrdersTableRow'
import { tableRowData } from 'data'

const OrdersTableBody = () => {
  return (
    <tbody className="table__body table-body">
      {tableRowData.map((row, index) => (
        <OrdersTableRow
          key={index}
          rowData={tableRowData[index]}
          options={row.hasOwnProperty('options') ? row.options?.value : ''}
        />
      ))}
    </tbody>
  )
}

export default OrdersTableBody
