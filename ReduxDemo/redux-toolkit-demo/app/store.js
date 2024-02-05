const configureStore = require('@reduxjs/toolkit').configureStore
// const reduxLogger = require('redux-logger')
const cakeReducer = require('../feature/cake/cakeSlice')

const iceCreamReducer  =  require('../feature/iceCream/iceCreamSlice')
const userReducer = require('../feature/user/userSlice')
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

module.exports = store