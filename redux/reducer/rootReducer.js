import { combineReducers } from 'redux'
import { categoryReducer } from './category.reducer'
import { commentReducer } from './comment.reducer'
import { counterReducer } from './counter.reducer'
import { postReducer } from './post.reducer'
import { authUserReducer } from './Auth.reducer'

export const rootReducer = combineReducers({
    counter: counterReducer,
    // category: categoryReducer
    post : postReducer,
    comment:commentReducer,
    auth: authUserReducer

})