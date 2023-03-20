
import {combineReducers, legacy_createStore} from 'redux'
import {maxReducer} from "../reducers/maxReducer";
import {minReducer} from "../reducers/minReducer";


const rootReducer = combineReducers({
    maxReValue: maxReducer,
    minReValue: minReducer,
})

export const store = legacy_createStore( rootReducer )
export type RootStateType = ReturnType<typeof rootReducer>