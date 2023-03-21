// import { tableRowData } from 'data'
import React from 'react'

const OrdersTableRow = ({ rowData }) => {
  const rowDataValues = Object.values(rowData)
  return (
    <tr className="table__body-items">
      {rowDataValues.map((row, index) => (
        <td key={index}>{row}</td>
      ))}
    </tr>
  )
}

export default OrdersTableRow
