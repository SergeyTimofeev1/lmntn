import React from 'react'
import { tableHeaderData } from '../../../data'
import TableHeaderItem from '../TableHeaderItem/TableHeaderItem'

const OrdersTableHeader = () => {
  return (
    <thead className="table__header table-header">
      <tr>
        {tableHeaderData.map((t, i) => (
          <TableHeaderItem
            key={i}
            title={t.title}
            isSort={t.isSorted}
            className="table-header__item"
          />
        ))}
      </tr>
    </thead>
  )
}

export default OrdersTableHeader
