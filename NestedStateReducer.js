const redux = require('redux')
const createStore = redux.createStore
const produce = require('immer').produce


const initialState = {
    name: "Isha",
    address: {
        street: '123 Main Street',
        city: "Boston",
        state: 'Na'
    },
}

const STREET_UPDATED = 'STREET_UPDATED'

const updateStreet = (street) => {
    return{
        type: STREET_UPDATED,
        payload: street
    }
}

const streetReducer = (state = initialState, action) =>
{
    switch (action.type) {
        case STREET_UPDATED:
            return produce (state, (draft) => {
                draft.address.street = action.payload
            })

        default : {

            return state
        }
    }
    
}

const store = createStore(streetReducer)
const unsubscribe = store.subscribe(() => console.log("Update state", store.getState()))
store.dispatch(updateStreet(" 222 North street"))
unsubscribe()