// import { tableRowData } from 'data'
import React from 'react'
import OrdersTableRowItem from '../orders-table-row-item/OrdersTableRowItem'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const OrdersTableRow = ({ rowData, options }) => {
  const [row, setRow] = useState(Object.entries(rowData))

  return (
    <tr className={'table-body__items ' + options}>
      {row.map((row, index) => {
        if (typeof row[1] === 'object') {
          return (
            <OrdersTableRowItem
              key={index}
              row={row[1].title}
              options={row[1].status}
              url={rowData.contractId}
            />
          )
        } else {
          return <OrdersTableRowItem key={index} row={row[1]} option="" url={rowData.contractId} />
        }
      })}
    </tr>
  )
}

export default OrdersTableRow
