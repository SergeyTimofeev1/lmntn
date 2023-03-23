import SvgSelector from 'components/SvgSelector/SvgSelector'
import React, { useState } from 'react'

const TableHeaderItem = ({ title, isSort, className }) => {
  const [sortActive, setSortActive] = useState(false)

  return (
    <th className={className} onClick={() => setSortActive(prev => !prev)}>
      <div className={sortActive ? className + '-wrapper is-sorted' : className + '-wrapper'}>
        <div className={className + '-wrapper-text'}>{title}</div>
        {isSort && <SvgSelector id="filter" />}
        {/* {sortActive && isSort && <SvgSelector id="arrow" />} */}
      </div>
    </th>
  )
}

export default TableHeaderItem
