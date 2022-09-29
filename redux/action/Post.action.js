import { LogBox } from 'react-native'
import * as ActionTypes from '../ActionTypes'

export const getpost = () => (dispatch) => {
     dispatch({type:ActionTypes.GET_POST})
}

export const addpost = (data) => (dispatch) => {
     dispatch({type:ActionTypes.ADD_POST,payload:data})
}

export const DeletPost = (id) => (dispatch) => {
     console.log("aryan",id);
     dispatch({type:ActionTypes.DELET_POST,payload:data})
}