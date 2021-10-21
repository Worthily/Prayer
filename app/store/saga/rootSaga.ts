import { takeEvery, takeLatest } from 'redux-saga/effects';
import {
  deleteCommentActionCreator,
  requestCreateCommentActionCreator,
} from './Comments/actions';
import {
  createCommentWatchSaga,
  deleteCommentWatchSaga,
} from './Comments/watchers';
import {
  deletePrayerActionCreator,
  requestCreatePrayerActionCreator,
  setPrayerCheckedActionCreator,
} from './Prayers/actions';
import {
  createPrayerWatchSaga,
  deletePrayerWatchSaga,
  setPrayerCheckedWatchSaga,
} from './Prayers/watchers';
import {
  requestSignInActionCreator,
  requestSignUpActionCreator,
} from './User/actions';
import { userSignInWatchSaga, userSignUpWatchSaga } from './User/watchers';

export default function* rootSaga() {
  yield takeLatest(requestSignInActionCreator.type, userSignInWatchSaga);
  yield takeLatest(requestSignUpActionCreator.type, userSignUpWatchSaga);
  yield takeLatest(
    requestCreatePrayerActionCreator.type,
    createPrayerWatchSaga,
  );
  yield takeLatest(
    setPrayerCheckedActionCreator.type,
    setPrayerCheckedWatchSaga,
  );
  yield takeLatest(deletePrayerActionCreator.type, deletePrayerWatchSaga);
  yield takeLatest(requestCreateCommentActionCreator, createCommentWatchSaga);
  yield takeLatest(deleteCommentActionCreator, deleteCommentWatchSaga);
}

// delete create columns, change prayers
