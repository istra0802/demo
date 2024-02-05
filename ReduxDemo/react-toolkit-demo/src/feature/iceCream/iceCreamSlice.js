
// const {cakeActions} = require('../cake/cakeSlice')

import { createSlice } from "@reduxjs/toolkit"
import {ordered as cakeOrdered} from '../cake/cakeSlice'



const initialState = {
  numOfIcecreams: 10
}

const iceCreamSlice = createSlice({
  name: 'icecream',
  initialState,
  reducers: {
    ordered: state => {
      state.numOfIcecreams--
    },
    restocked: (state, action) => {
      state.numOfIcecreams += action.payload
    }
  },
  extraReducers: builder => {
    builder.addCase(cakeOrdered, state => {
      state.numOfIcecreams--
    })
  }
  // extraReducers: {
  //   ['cake/ordered']: state => {
  //     state.numOfIcecreams--
  //   }
  // }
})

export default iceCreamSlice.reducer
export const {ordered,restocked}  = iceCreamSlice.actions