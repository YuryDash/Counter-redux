

type incrementAT = ReturnType<typeof incrementAC>
export type comparisonMaxMinAT = ReturnType<typeof comparisonMaxMinAC>
type addMaxValueAT = ReturnType<typeof addMaxValueAC>
type ActionType = incrementAT | comparisonMaxMinAT | addMaxValueAT
    
const initialState:MaxStateType = {
    numberValueMax: 1,
    textErrorMax: ""
}

 export type MaxStateType = {
    numberValueMax: number
    textErrorMax: string
}

export const maxReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case "INCREMENT_DECREMENT":
            return {...state, numberValueMax: action.payload.number}
        case "COMPARISON":
            if(state.numberValueMax <= action.payload.minValue){
                return {...state, textErrorMax:"Incorrect Max Value"}
            } else {
                return {...state, textErrorMax:""}
            }
        case "ADD_MAX_VALUE":
            return {...state, numberValueMax: action.payload.maxValue}

        default:
            return state
    }
}



export const incrementAC = (number: number) => {
    return {
        type: "INCREMENT_DECREMENT",
        payload: {
            number
        }
    } as const
}

export const comparisonMaxMinAC = (minValue: number ) => {
    return {
        type: "COMPARISON",
        payload: {
            minValue
        }
    } as const
}
export const addMaxValueAC = (maxValue: number ) => {
    return {
        type: "ADD_MAX_VALUE",
        payload: {
            maxValue
        }
    } as const
}