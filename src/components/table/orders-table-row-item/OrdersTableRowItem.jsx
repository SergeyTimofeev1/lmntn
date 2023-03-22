import React from 'react'
import OrdersSvgSelector from '../orders-svg-selector/OrdersSvgSelector'

const OrdersTableRowItem = ({ row, index, options }) => {
  return (
    <td className="table-body__item" key={index}>
      <div className={options ? 'table-body__item-wrapper ' + options : 'table-body__item-wrapper'}>
        {options && <OrdersSvgSelector id={options} />}
        {row}
      </div>
    </td>
  )
}

export default OrdersTableRowItem
