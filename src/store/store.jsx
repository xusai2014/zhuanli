import { createStore, applyMiddleware, combineReducers } from 'redux';
import * as reducers from '../reducer/reducer';

function promiseMiddleware() {
    return (next) => (action) => {
        const { promise, types, ...rest } = action

        if (!promise) {
            return next(action)
        }

        const [REQUEST, SUCCESS, FAILURE] = types

        next({...rest, type: REQUEST})

        return promise().then(
            (result) => {
                next({...rest, result, type: SUCCESS})
            },
            (error) => {
                next({...rest, error, type: FAILURE})
            }
        )
    }
}
export default function() {
    var reducer = combineReducers(reducers)
    var finalCreateStore = applyMiddleware(promiseMiddleware)(createStore)
    var store = finalCreateStore(reducer);
    return store
}

