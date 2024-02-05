const store = require('./app/store')
const cakeActions = require ('./feature/cake/cakeSlice.js').cakeActions

const iceCreamActions = require('./feature/iceCream/iceCreamSlice.js').iceCreamActions
const fetchUsers = require('./feature/user/userSlice.js').fetchUsers
// const fetchUsers = require('./features/user/userSlice').fetchUsers

console.log('Initial State ', store.getState())

const unsubscribe = store.subscribe(() => {
  console.log('Updated State ', store.getState())
})
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(3))

store.dispatch(iceCreamActions.ordered())

store.dispatch(fetchUsers())
// unsubscribe()