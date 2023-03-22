import SvgSelector from 'components/SvgSelector/SvgSelector'
import React, { useState } from 'react'

const TableHeaderItem = ({ title, isSort, className }) => {
  const [sortActive, setSortActive] = useState(false)

  return (
    <th className={className}>
      <div className={className + '-wrapper'}>
        {title}
        {isSort && <SvgSelector id="filter" />}
        {sortActive && <SvgSelector id="arrow" />}
      </div>
    </th>
  )
}

export default TableHeaderItem
