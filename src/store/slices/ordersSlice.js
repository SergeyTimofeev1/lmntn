import { createSlice } from '@reduxjs/toolkit'
import { tableRowData } from 'data'

const initialState = tableRowData

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {}
})

export const {} = ordersSlice.actions

export default ordersSlice.reducer
