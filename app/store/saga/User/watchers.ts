import { takeLatest } from 'redux-saga/effects';
import {
  requestSignInActionCreator,
  requestSignUpActionCreator,
} from '../User/actions';
import { userSignInWorkSaga, userSignUpWorkSaga } from './workers';

export function* userWatchSaga() {
  yield takeLatest(requestSignInActionCreator.type, userSignInWorkSaga);
  yield takeLatest(requestSignUpActionCreator.type, userSignUpWorkSaga);
}
