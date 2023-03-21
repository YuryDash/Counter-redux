import {comparisonMaxMinAC, comparisonMaxMinAT, incrementAC} from "./maxReducer";


type addMinValueAT = ReturnType<typeof addMinValueAC>
type comparisonMinMaxAT = ReturnType<typeof comparisonMinMaxAC>

type ActionType = addMinValueAT | comparisonMinMaxAT

const initialState:MinStateType = {
    numberValueMin: 0,
    textErrorMin: ''
}

export type MinStateType = {
    numberValueMin: number
    textErrorMin: string
}

export const minReducer = (state = initialState, action: ActionType):MinStateType => {
    switch (action.type) {
        case "ADD_MIN_VALUE":
            return {...state, numberValueMin: action.payload.minValue}
        case "COMPARISON":
            if(state.numberValueMin >= action.payload.maxValue){
                return {...state, textErrorMin:"Incorrect Min Value"}
            } else {
                return {...state, textErrorMin:""}
            }

        default:
            return state
    }
}

export const addMinValueAC = (minValue: number) => {
    return {
        type: "ADD_MIN_VALUE",
        payload: {
            minValue
        }
    } as const
}

export const comparisonMinMaxAC = (maxValue: number ) => {
    return {
        type: "COMPARISON",
        payload: {
            maxValue
        }
    } as const
}