import * as ActionTypes from '../ActionTypes'

let initVal = {
    isLoading: false,
    category: [],
    error: ''
}

export const categoryReducer = (state=initVal, action) => {
    switch(action.type) {
        case ActionTypes.GET_CATEGORY:
            return {
                ...state,
                isLoading: false,
                category: action.payload,
                error: ''
            }
        default:
            return state
    }
}