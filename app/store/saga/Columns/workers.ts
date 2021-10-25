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
import { setColumnsLoaderActionCreator } from '../Loader/actions';

export function* getColumnsWorkSaga() {
  yield put({
    type: setColumnsLoaderActionCreator.type,
    payload: {
      newValue: true,
    },
  });

  const { data } = yield call(getColumns);
  yield put({
    type: responseGetColumnsActionCreator.type,
    payload: data,
  });

  yield put({
    type: setColumnsLoaderActionCreator.type,
    payload: {
      newValue: false,
    },
  });
}

export function* createColumnWorkSaga({
  payload,
}: ReturnType<typeof requestCreateColumnActionCreator>) {
  yield put({
    type: setColumnsLoaderActionCreator.type,
    payload: {
      newValue: true,
    },
  });

  const { data } = yield call(createColumn, payload.title);
  yield put({
    type: responseCreateColumnActionCreator.type,
    payload: {
      id: data.id,
      title: data.title,
      description: data.description,
      userId: data.userId,
    },
  });

  yield put({
    type: setColumnsLoaderActionCreator.type,
    payload: {
      newValue: false,
    },
  });
}

export function* deleteColumnWorkSaga({
  payload,
}: ReturnType<typeof deleteColumnActionCreator>) {
  const { data } = yield call(deleteColumn, payload.id);
}

export function* updateColumnTitleWorkSaga({
  payload,
}: ReturnType<typeof updateColumnTitleActionCreator>) {
  const { data } = yield call(updateColumn, payload.id, payload.title);
}
