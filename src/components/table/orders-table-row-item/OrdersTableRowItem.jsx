import React from 'react'
import OrdersSvgSelector from '../orders-svg-selector/OrdersSvgSelector'
import { useNavigate } from 'react-router-dom'

const OrdersTableRowItem = ({ row, index, options, url }) => {
  const navigate = useNavigate()
  const getOrderUrl = url => {
    navigate(`${url}`)
    window.scrollTo(0, 0)
  }

  return (
    <td className="table-body__item" key={index} onClick={() => getOrderUrl(url)}>
      <div className={options ? 'table-body__item-wrapper ' + options : 'table-body__item-wrapper'}>
        {options && <OrdersSvgSelector id={options} />}
        {row}
      </div>
    </td>
  )
}

export default OrdersTableRowItem
