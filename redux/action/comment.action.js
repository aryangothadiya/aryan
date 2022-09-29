import { commentsAllData } from "../../common/api/comments.api";
import* as ActionTypes from '../ActionTypes'


export const getcomment = () => (dispatch) => {
    console.log("aryan");

    commentsAllData()
    .then((data)=> console.log(data))
    .catch((error)=> console.log(error))
    dispatch({type:ActionTypes.GET_COMMENTS})
}


export const deletcomment = (id) => (dispatch) => {
    console.log("aryan",id);

    commentsAllData()
    .then((data)=> console.log(data))
    .catch((error)=> console.log(error))
    dispatch({type:ActionTypes.DELET_COMMENTS})
}