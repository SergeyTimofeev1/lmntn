import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const AddCommentForm = () => {
  const { commentsAddFormHide } = useContext(UserContext)

  return (
    <>
      <div className="overlay">
        <div className="overlay__inner">
          <button className="overlay-close" onClick={commentsAddFormHide}>
            X Закрыть
          </button>
          <form className="add-form">
            <label className="add-form__label" htmlFor="addFormComments">
              Комментарий №23
            </label>
            <textarea
              className="add-form__input"
              id="addFormComments"
              placeholder="Введите текст (до 400 символов)"
            ></textarea>
            <p className="add-form__descr">
              Сервисный текст к текстовому полю. Например, про лимит символов.
            </p>
            <div className="add-form__files">
              <div className="add-form__file">
                <div className="add-form__file-text">Название файла 1.pdf</div>
              </div>
              <div className="add-form__file">
                <div className="add-form__file-text">Название файла 2.pdf</div>
              </div>
            </div>
            <div className="add-form__upload-file">
              <input className="add-form__upload-input" type="file" accept=".pdf" />
              <div className="add-form__upload-block">
                <button className="add-form__upload-btn" type="button">
                  Прикрепить файл
                </button>
                <p className="add-form__upload-descr">Максимальный вес файла — 10 Мб</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddCommentForm
