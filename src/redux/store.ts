
import {combineReducers, legacy_createStore} from 'redux'
import {maxReducer} from "../reducers/maxReducer";
import {minReducer} from "../reducers/minReducer";
import {counterReducer} from "../reducers/counterReducer";


const rootReducer = combineReducers({
    maxReValue: maxReducer,
    minReValue: minReducer,
    countReValue: counterReducer,
})

export const store = legacy_createStore( rootReducer )
export type RootStateType = ReturnType<typeof rootReducer>