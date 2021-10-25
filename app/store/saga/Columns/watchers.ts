import { call, put, takeLatest } from 'redux-saga/effects';
import {
  deleteColumnActionCreator,
  requestCreateColumnActionCreator,
  requestGetColumnsActionCreator,
  responseCreateColumnActionCreator,
  responseGetColumnsActionCreator,
  updateColumnTitleActionCreator,
} from '../Columns/actions';
import {
  createColumnWorkSaga,
  deleteColumnWorkSaga,
  getColumnsWorkSaga,
  updateColumnTitleWorkSaga,
} from './workers';

export function* columnsWatchSaga() {
  yield takeLatest(requestGetColumnsActionCreator, getColumnsWorkSaga);
  yield takeLatest(deleteColumnActionCreator, deleteColumnWorkSaga);
  yield takeLatest(requestCreateColumnActionCreator, createColumnWorkSaga);
  yield takeLatest(updateColumnTitleActionCreator, updateColumnTitleWorkSaga);
}
