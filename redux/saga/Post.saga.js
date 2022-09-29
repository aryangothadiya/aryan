import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { fetchAddAPI } from '../../common/api/fatchadd.api';
import { AddAPI, DeletPostAPI, fetchPostAPI } from '../../common/api/Post.api';
import * as ActionTypes from '../ActionTypes'

function* fetchPost(action) {
  try {
    const response = yield call(fetchPostAPI);

    // console.log("aryan", response);
      yield put({type:ActionTypes.POST_GET, payload:response});
  } catch (e) {
    console.log(e);
    //   yield put({type: "USER_FETCH_FAILED", message: e.message});
  }
}

function* AddPost(action) {
  try {
    const response = yield call(AddAPI,action.payload);
    // console.log('1111111',response);

      yield put({type:ActionTypes.ADDED_POST, payload:response});
  } catch (e) {
    console.log(e);
    //   yield put({type: "USER_FETCH_FAILED", message: e.message});
  }
}

function* DeletPost(action) {
  try {
    const response = yield call(DeletPostAPI,action.payload);
    // console.log('1111111',response);

      yield put({type:ActionTypes.DELET_POST, payload:response});
  } catch (e) {
    console.log(e);
    //   yield put({type: "USER_FETCH_FAILED", message: e.message});
  }
}

function* WatchGetPost() {
  yield takeEvery(ActionTypes.GET_POST, fetchPost);
}

function* WatchAddPost() {
  yield takeEvery(ActionTypes.ADD_POST, AddPost);
}

function* WatchDeletPost() {
  yield takeEvery(ActionTypes.DELET_POST, AddPost);
}

export function* postsaga() {
  yield all([
    WatchGetPost(),
    WatchAddPost(),
    WatchDeletPost()
  ])
}