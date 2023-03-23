import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: null
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {}
})

export const { setCategoryId, setSortType } = filterSlice.actions

export default filterSlice.reducer
