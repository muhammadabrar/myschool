import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: localStorage.getItem('theme'),
}

export const theme = createSlice({
  name: 'theme',
  initialState,
  reducers: {
   
    mode: (state) => {
      state.value = !state.value
      localStorage.setItem('theme', !state.value);
    },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { mode } = theme.actions

export default theme.reducer