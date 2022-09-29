import * as ActionTypes from '../ActionTypes'

let initVal = {
    post: []
}

export const postReducer = (state = initVal, action) => {
    // console.log("yes",action.type);
    switch (action.type) {
        case ActionTypes.POST_GET:
            return {
                ...state,
                post:action.payload,
            }

            case ActionTypes.ADDED_POST:
                return {
                    ...state,
                    post:state.post.concat(action.payload),
                }

                case ActionTypes.DELET_POST:
                return {
                    ...state,
                    post:state.post.filter((p)=>p.id !=action.payload),
                }
        default:
            return state
    }
}