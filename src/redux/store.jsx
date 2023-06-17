import{legacy_createStore,applyMiddleware,combineReducers} from "redux"
import {pokereducer} from "./reducer"
const allreducers=combineReducers({
    pokereducer
})
export const store=legacy_createStore(allreducers)
