import React, { ReactElement, useState } from 'react'
import classes from './ToolTipComponent.module.scss'

const ToolTipComponent = ({ children }) => {
  const [showToolTip, setShowToolTip] = useState(false)

  const onMouseEnterHandler = () => {
    setShowToolTip(true)
  }

  const onMouseLeaveHandler = () => {
    setShowToolTip(false)
  }

  return (
    <div
      className={classes.container}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      {children}
      {showToolTip && (
        <div className={classes.tooltip}>
          <div className="p">
            Всего загружен раз:
            <span>ХХ</span>
          </div>
          <div className="p">
            Предыдущий статус:
            <span>15.01.23 14:23</span>
          </div>
          <div className="p">
            Текущий татус:
            <span>15.01.23 18:58</span>
          </div>
          <div className="p">
            <span>Итого времени: 04:25:59</span>
          </div>
          <div className="p">
            <span>Далее: Название этапа</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default ToolTipComponent
