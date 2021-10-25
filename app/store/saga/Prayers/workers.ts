import { call, put } from 'redux-saga/effects';
import {
  createPrayer,
  deletePrayer,
  getPrayers,
  setPrayerIsChecked,
  updatePrayer,
} from '../../../api/Prayers/requests';
import { setPrayersLoaderActionCreator } from '../Loader/actions';
import {
  requestCreatePrayerActionCreator,
  responseGetPrayersActionCreator,
  responseCreatePrayerActionCreator,
  setPrayerCheckedActionCreator,
  deletePrayerActionCreator,
  updatePrayerTitleActionCreator,
} from './actions';

export function* getPrayersWorkSaga() {
  yield put({
    type: setPrayersLoaderActionCreator.type,
    payload: {
      newValue: true,
    },
  });
  const { data } = yield call(getPrayers);
  console.log('Prayers>>>' + ' ' + data);
  yield put({
    type: responseGetPrayersActionCreator.type,
    payload: data,
  });
  yield put({
    type: setPrayersLoaderActionCreator.type,
    payload: {
      newValue: false,
    },
  });
}

export function* createPrayerWorkSaga({
  payload,
}: ReturnType<typeof requestCreatePrayerActionCreator>) {
  yield put({
    type: setPrayersLoaderActionCreator.type,
    payload: {
      newValue: true,
    },
  });
  const { data } = yield call(
    createPrayer,
    payload.columnId,
    payload.title,
    payload.description,
  );

  if (data) {
    yield put({
      type: responseCreatePrayerActionCreator.type,
      payload: {
        id: data.id,
        title: data.title,
        description: data.description,
        checked: data.checked,
        columnId: data.columnId,
      },
    });
  } else {
  }
  yield put({
    type: setPrayersLoaderActionCreator.type,
    payload: {
      newValue: false,
    },
  });
}
export function* updatePrayerTitleWorkSaga({
  payload,
}: ReturnType<typeof updatePrayerTitleActionCreator>) {
  const { data } = yield call(updatePrayer, payload.id, payload.title);
}

export function* setPrayerCheckedWorkSaga({
  payload,
}: ReturnType<typeof setPrayerCheckedActionCreator>) {
  const { data } = yield call(
    setPrayerIsChecked,
    payload.id,
    payload.description,
    payload.checked,
  );
}

export function* deletePrayerWorkSaga({
  payload,
}: ReturnType<typeof deletePrayerActionCreator>) {
  const { data } = yield call(deletePrayer, payload.id);
}
