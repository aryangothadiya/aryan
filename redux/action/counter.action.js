import { commentsAllData } from '../../common/api/comments.api'
import* as ActionTypes from '../ActionTypes'

export const incrementCounter = () => (dispatch) => {
   dispatch({type: ActionTypes.INCREMENT_COUNTER})
}

export const decrementCounter = () => (dispatch) => {
    dispatch({type: ActionTypes.DECREMENT_COUNTER})
 }