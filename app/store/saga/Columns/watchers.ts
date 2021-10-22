import { call, put, takeLatest } from 'redux-saga/effects';
import {
  deleteColumnActionCreator,
  requestCreateColumnActionCreator,
  requestGetColumnsActionCreator,
  responseCreateColumnActionCreator,
  responseGetColumnsActionCreator,
} from '../Columns/actions';
import {
  createColumnWorkSaga,
  deleteColumnWorkSaga,
  getColumnsWorkSaga,
} from './workers';

export function* columnsWatchSaga() {
  yield takeLatest(requestGetColumnsActionCreator, getColumnsWorkSaga);
  yield takeLatest(deleteColumnActionCreator, deleteColumnWorkSaga);
  yield takeLatest(requestCreateColumnActionCreator, createColumnWorkSaga);
}
