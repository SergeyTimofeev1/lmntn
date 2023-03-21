import SvgSelector from 'components/SvgSelector/SvgSelector'
import React, { useState } from 'react'

const TableHeaderItem = ({ title, isSort, className }) => {
  const [sortActive, setSortActive] = useState(false)

  return (
    <th className={className}>
      {title}
      {isSort && <SvgSelector id="filter" />}
      {sortActive && <SvgSelector id="arrow" />}
    </th>
  )
}

export default TableHeaderItem
