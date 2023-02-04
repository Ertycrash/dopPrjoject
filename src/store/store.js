import { configureStore } from '@reduxjs/toolkit'
import mainReducer from './slices/mainSlice'
import authReducer from './slices/authSlice'
const store = configureStore({
  reducer: {
    main: mainReducer,
    auth:authReducer
  }
})
export default store
