// import { tableRowData } from 'data'
import React from 'react'
import OrdersTableRowItem from '../orders-table-row-item/OrdersTableRowItem'
import { useState } from 'react'

const OrdersTableRow = ({ rowData, options }) => {
  const [row, setRow] = useState(Object.entries(rowData))

  // ! обработка даты(не используется)
  const rowDataValues = Object.entries(rowData).reduce((acc, e) => {
    typeof e[1] !== 'object' ? acc.push(e[1]) : acc.push(e[1].title)
    return acc
  }, [])

  const itemOptions = Object.entries(rowData).reduce((acc, e) => {
    if (typeof e[1] === 'object') acc[e[0]] = e[1].status
    return acc
  }, {})
  // !======

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
