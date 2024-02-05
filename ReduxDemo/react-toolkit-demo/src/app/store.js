// const configureStore = require('@reduxjs/toolkit').configureStore
import { configureStore} from '@reduxjs/toolkit'
// const reduxLogger = require('redux-logger')
import cakeReducer from "../feature/cake/cakeSlice"
// const cakeReducer = require('../feature/cake/cakeSlice')
import iceCreamReducer from "../feature/iceCream/iceCreamSlice"

// const iceCreamReducer  =  require('../feature/iceCream/iceCreamSlice')
import userReducer from '../feature/user/userSlice'
// const userReducer = require('../feature/user/userSlice')
// const userReducer = require('../feature/user/userSlice')
// const logger = reduxLogger.createLogger()

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: iceCreamReducer,
    user: userReducer
  }
  // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
})

 export default store