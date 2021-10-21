import { call, put } from 'redux-saga/effects';
import {
  requestGetColumnsActionCreator,
  responseGetColumnsActionCreator,
} from '../Columns/actions';
// import { signIn, signUp } from '../../../api/user/requests';
// import { UserSignUp } from '../../../types';
import { getColumns } from '../../../api/Columns/requests';

export function* getColumnsWatchSaga() {
  const { data } = yield call(getColumns);
  console.log('columns>>>' + ' ' + data);
  yield put({
    type: responseGetColumnsActionCreator.type,
    payload: data,
  });
}
