import * as ActionTypes from '../ActionTypes'

let initval = {
    comment: []
}

export const commentReducer = (state = initval, action) => {
    // console.log(action.type,action.payload);
    switch (action.type) {
        case ActionTypes.GET_COMMENTS:
            return {
                ...state,
                comment: action.payload
            }

            case ActionTypes.DELET_COMMENTS:
                return {
                    ...state,
                    comment:state.comment.filter((c)=>c.id != action.payload)
                }
            default:
                return state
    }
} 