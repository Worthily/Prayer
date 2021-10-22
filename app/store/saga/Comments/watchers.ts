import { takeLatest } from 'redux-saga/effects';
import {
  deleteCommentActionCreator,
  requestCreateCommentActionCreator,
} from './actions';
import { createCommentWorkSaga, deleteCommentWorkSaga } from './workers';

export function* commentsWatchSaga() {
  yield takeLatest(requestCreateCommentActionCreator, createCommentWorkSaga);
  yield takeLatest(deleteCommentActionCreator, deleteCommentWorkSaga);
}
