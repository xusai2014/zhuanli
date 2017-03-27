var initialState = {
    a:""
}


export function userReducer (state = initialState, action) {
    console.log('userReducer was called with state', state, 'and action', action)

    switch (action.type) {
        // etc.
        case "SET_NAME":
            return {
                ...state,
                a:action.name
            }
        default:
            return state;
    }
}
export function itemsReducer (state = [], action) {
    console.log('itemsReducer was called with state', state, 'and action', action)

    switch (action.type) {
        // etc.
        default:
            return state;
    }
}