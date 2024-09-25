import { configureStore } from '@reduxjs/toolkit'
import commentSlice from './reducers/commentSlice'
import drawerSlice from './reducers/drawerSlice'

export const store = configureStore({
  reducer: {
    comment: commentSlice,
    drawer: drawerSlice
  },
})