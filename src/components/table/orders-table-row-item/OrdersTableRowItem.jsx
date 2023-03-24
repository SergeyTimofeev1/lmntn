import React from 'react'
import OrdersSvgSelector from '../orders-svg-selector/OrdersSvgSelector'
import { useNavigate } from 'react-router-dom'
import ToolTipComponent from '../../UI/ToolTipComponent'

const OrdersTableRowItem = ({ row, index, options, url }) => {
  const navigate = useNavigate()
  const getOrderUrl = url => {
    navigate(`${url}`)
    window.scrollTo(0, 0)
  }

  return (
    <td className="table-body__item" key={index} onClick={() => getOrderUrl(url)}>
      <ToolTipComponent>
        <div
          className={options ? 'table-body__item-wrapper ' + options : 'table-body__item-wrapper'}
        >
          {options && <OrdersSvgSelector id={options} />}
          {row}
        </div>
      </ToolTipComponent>
    </td>
  )
}

export default OrdersTableRowItem
