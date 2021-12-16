import { configureStore } from '@reduxjs/toolkit'
import theme from './theme'
import title from './title'

export const store = configureStore({
  reducer: {
      theme: theme,
      title: title,
  },
})