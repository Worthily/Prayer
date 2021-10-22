import { call, put } from 'redux-saga/effects';
import {
  createPrayer,
  deletePrayer,
  getPrayers,
  setPrayerIsChecked,
} from '../../../api/Prayers/requests';
import {
  requestCreatePrayerActionCreator,
  responseGetPrayersActionCreator,
  responseCreatePrayerActionCreator,
  setPrayerCheckedActionCreator,
  deletePrayerActionCreator,
} from './actions';

export function* getPrayersWorkSaga() {
  const { data } = yield call(getPrayers);
  console.log('Prayers>>>' + ' ' + data);
  yield put({
    type: responseGetPrayersActionCreator.type,
    payload: data,
  });
}

export function* createPrayerWorkSaga({
  payload,
}: ReturnType<typeof requestCreatePrayerActionCreator>) {
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
    console.log('create prayer error');
  }
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
  console.log('Prayers>>>' + ' ' + data);
}

export function* deletePrayerWorkSaga({
  payload,
}: ReturnType<typeof deletePrayerActionCreator>) {
  const { data } = yield call(deletePrayer, payload.id);
  console.log('Prayers>>>' + ' ' + data);
}
