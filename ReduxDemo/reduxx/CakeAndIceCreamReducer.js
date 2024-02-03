const redux = require('redux')
const {createStore,combineReducers} = redux

const bindActionCreators = redux.bindActionCreators



const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERED = 'ICEREAM_ORDERED';
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";


function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}
function orderIceCream() {
    return {
      type: ICECREAM_ORDERED,
      quantity: 1,
    };
  }
function restockedCake(qty) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
}
function restockedIceCream(qty) {
    return {
      type: ICECREAM_RESTOCKED,
      payload: qty,
    };
  }




const initialCakeState = {
    numOfCakes: 10,
}
const initialIceCreamState = {
    numOfIceCream: 10,
}



const cakeReducer = (state= initialCakeState, action) => {
    switch(action.type){
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes-1,
            }
        case CAKE_RESTOCKED:
            return {
                ...state,
                numOfCakes: state.numOfCakes+action.payload,
            }
        default:
            return state
    }
}
const iceCreamReducer = (state= initialIceCreamState, action) => {
    switch(action.type){
        case ICECREAM_ORDERED:
            return {
                ...state,
                numOfIceCream: state.numOfIceCream-1,
            }
            case ICECREAM_RESTOCKED:
                return {
                    ...state,
                    numOfIceCream: state.numOfIceCream+action.payload,
                }
        default:
            return state
    }
}


const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})



const store = createStore(rootReducer)
console.log("Initial state: ",store.getState())



const unsubscribe = store.subscribe(() => console.log("Update state", store.getState()))

// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restockedCake(3))
// store.dispatch(orderIceCream())
// store.dispatch(orderIceCream())
// store.dispatch(orderIceCream())
// store.dispatch(orderIceCream())
// store.dispatch(restockedIceCream())
// store.dispatch(restockedIceCream())


const actions = redux.bindActionCreators({orderCake,orderIceCream,restockedCake,restockedIceCream},store.dispatch)
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restockedCake(2)
actions.orderIceCream()
actions.orderIceCream()
actions.orderIceCream()
actions.restockedIceCream(3)



unsubscribe()