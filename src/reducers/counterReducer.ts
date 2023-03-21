

type addNumberValueAT = ReturnType<typeof addNumberValueAC>
type incrementAT = ReturnType<typeof incrementAC>
type resetCounterAT = ReturnType<typeof resetCounterAC>
type comparisonMaxCeilingAT = ReturnType<typeof comparisonMaxCeilingAC>
type resetErrorAT = ReturnType<typeof resetErrorAC>

type ActionType = addNumberValueAT | incrementAT | resetCounterAT | comparisonMaxCeilingAT | resetErrorAT

const initialState:CounterStateType = {
    countNumber: 0,
    countTextError: '',
}

export type CounterStateType = {
    countTextError: string
    countNumber: number
}

export const counterReducer = (state = initialState, action: ActionType):CounterStateType => {
    switch (action.type) {
        case "SET_COUNTER_VALUE":
            return {...state, countNumber: action.payload.minCounterValue}
        case "INCREMENT_COUNTER_VALUE":
            const inc = state.countNumber
            return {...state, countNumber: inc + 1}
        case "RESET_COUNTER":
            return {...state, countNumber: action.payload.minValueForReset, countTextError:""}
        case "COMPARISON_MAX_CEILING":
            if((action.payload.currentValue + 1) >= action.payload.maxCounterValue){
                return {...state, countTextError: `The set value = ${action.payload.currentValue + 1}`}
            } else {
                return {...state, countTextError: ''}
            }
        case "RESET_ERROR" :
            return {...state, countTextError: ''}

        default:
            return state
    }
}
export const addNumberValueAC = (minCounterValue: number) => {
    return {
        type: "SET_COUNTER_VALUE",
        payload: {
            minCounterValue
        }
    } as const
}
export const incrementAC = () => {
    return {
        type: "INCREMENT_COUNTER_VALUE",
    } as const
}
export const resetCounterAC = (minValueForReset: number) => {
    return {
        type: "RESET_COUNTER",
        payload: {
            minValueForReset
        }
    } as const
}

export const comparisonMaxCeilingAC = (maxCounterValue: number, currentValue: number) => {
    return {
        type: "COMPARISON_MAX_CEILING",
        payload: {
            maxCounterValue,
            currentValue
        }
    } as const
}
export const resetErrorAC = () => {
    return {
        type: "RESET_ERROR",

    } as const
}
