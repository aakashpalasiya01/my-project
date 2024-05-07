
import { configureStore } from '@reduxjs/toolkit'
import passbookslice from './slices/passbookslice'
export const store = configureStore({
  reducer: {
   passbook :passbookslice
  },
})