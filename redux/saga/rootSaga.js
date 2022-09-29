import { all } from "redux-saga/effects";
import {postsaga} from '../saga/Post.saga';



export function* rootSaga(){
    yield all([
        postsaga()
    ])
}