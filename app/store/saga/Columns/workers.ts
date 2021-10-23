import { call, put } from 'redux-saga/effects';
import {
  deleteColumnActionCreator,
  requestCreateColumnActionCreator,
  responseCreateColumnActionCreator,
  responseGetColumnsActionCreator,
  updateColumnTitleActionCreator,
} from '../Columns/actions';
import {
  createColumn,
  deleteColumn,
  getColumns,
  updateColumn,
} from '../../../api/Columns/requests';

export function* getColumnsWorkSaga() {
  const { data } = yield call(getColumns);
  console.log('columns>>>' + ' ' + data);
  yield put({
    type: responseGetColumnsActionCreator.type,
    payload: data,
  });
}

export function* createColumnWorkSaga({
  payload,
}: ReturnType<typeof requestCreateColumnActionCreator>) {
  const { data } = yield call(createColumn, payload.title);
  console.log('columns>>>' + ' ' + data);
  yield put({
    type: responseCreateColumnActionCreator.type,
    payload: {
      id: data.id,
      title: data.title,
      description: data.description,
      userId: data.userId,
    },
  });
}

export function* deleteColumnWorkSaga({
  payload,
}: ReturnType<typeof deleteColumnActionCreator>) {
  const { data } = yield call(deleteColumn, payload.id);
  console.log('columns>>>' + ' ' + data);
}

export function* updateColumnTitleWorkSaga({
  payload,
}: ReturnType<typeof updateColumnTitleActionCreator>) {
  const { data } = yield call(updateColumn, payload.id, payload.title);
  console.log('columns>>>' + ' ' + data);
}
