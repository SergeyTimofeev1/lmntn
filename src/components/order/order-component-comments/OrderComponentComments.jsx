import React from 'react'

const OrderComponentComments = () => {
  return (
    <div className="order-info__comments order-comments">
      <div className="order-comments__item comments-item">
        <p className="comments-item__title">
          Изменение в комментарии 2 от Семенова И. И. <span>13.12.22 в 09:00</span>
        </p>
        <form className="comments-item__form comments-form">
          <label className="comments-form-label"></label>
          <div className="comments-form__text">
            <p>Текст комментария в этом окне</p>
            <div className="comments-form__file-btn">Название файла.pdf</div>
          </div>
          <div className="comments-form__file">
            <input type="file" id="js-file" accept=".pdf"></input>
          </div>
        </form>
      </div>
      <div className="order-comments__item comments-item">
        <p className="comments-item__title">
          Комментарий 2 от Семенова И. И.
          <span>13.12.22 в 09:00</span>
        </p>
        <div className="comments-item__text">Текст комментария в этом окне</div>
      </div>
      <div className="order-comments__item comments-item">
        <p className="comments-item__title">
          Удалил комментарий 1 от Семенова И. И.
          <span>13.12.22 в 09:00</span>
        </p>
      </div>
    </div>
  )
}

export default OrderComponentComments
