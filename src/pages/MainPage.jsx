import AddCommentForm from 'components/order/add-comment-form.jsx/AddCommentForm'
import OrderComponent from 'components/order/order-component/OrderComponent'
import OrderLogoPreview from 'components/order/order-logo-preview/OrderLogoPreview'
import Orders from 'components/table/orders/Orders'
import UserCard from 'components/user-card/UserCard'
import { useState } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import { UserContext } from '../components/order/context/UserContext'

const MainPage = () => {
  const [isHistory, setIsComments] = useState(true)
  const [isModal, setIsModal] = useState(false)
  const [isOrderImg, setIsOrderImg] = useState(false)

  const historyShow = () => setIsComments(false)
  const commentsShow = () => setIsComments(true)
  const commentsAddFormShow = () => setIsModal(true)
  const commentsAddFormHide = () => setIsModal(false)
  const showOrderImg = () => setIsOrderImg(true)
  const hideOrderImg = () => setIsOrderImg(false)

  return (
    <>
      <UserContext.Provider
        value={{
          isHistory,
          historyShow,
          commentsShow,
          commentsAddFormShow,
          commentsAddFormHide,
          showOrderImg,
          hideOrderImg
        }}
      >
        {!isModal && !isOrderImg ? (
          <div className="main-page">
            <Routes>
              <Route path="/orders/" element={<Orders />}>
                <Route path="*" element={<OrderComponent />} />
              </Route>
              <Route path="/user" element={<UserCard />} />
            </Routes>
          </div>
        ) : isModal ? (
          <AddCommentForm />
        ) : (
          <OrderLogoPreview />
        )}
      </UserContext.Provider>
    </>
  )
}

export default MainPage
