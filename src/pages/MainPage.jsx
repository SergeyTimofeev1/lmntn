import AddCommentForm from 'components/order/add-comment-form.jsx/AddCommentForm'
import OrderComponent from 'components/order/order-component/OrderComponent'
import SvgSelector from 'components/SvgSelector/SvgSelector'
import OrdersHeader from 'components/table/orders-header/OrdersHeader'
import Orders from 'components/table/orders/Orders'
import UserCard from 'components/user-card/UserCard'
import { useState } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import { UserContext } from '../components/order/context/UserContext'

const MainPage = () => {
  const [isHistory, setIsComments] = useState(true)
  const [isModal, setIsModal] = useState(false)
  const historyShow = () => setIsComments(false)
  const commentsShow = () => setIsComments(true)
  const commentsAddFormShow = () => setIsModal(true)
  const commentsAddFormHide = () => setIsModal(false)

  return (
    <>
      <UserContext.Provider
        value={{ isHistory, historyShow, commentsShow, commentsAddFormShow, commentsAddFormHide }}
      >
        {isModal ? (
          <AddCommentForm />
        ) : (
          <div className="main-page">
            <Routes>
              <Route path="/orders/" element={<Orders />}>
                <Route path="*" element={<OrderComponent />} />
              </Route>
              <Route path="/user" element={<UserCard />} />
            </Routes>
          </div>
        )}
      </UserContext.Provider>
    </>
  )
}

export default MainPage
