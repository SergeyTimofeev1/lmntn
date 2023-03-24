import { configureStore } from '@reduxjs/toolkit'
import user from './slices/userSlice'
import orders from './slices/ordersSlice'

export const store = configureStore({
  reducer: {
    user,
    orders
  }
})
