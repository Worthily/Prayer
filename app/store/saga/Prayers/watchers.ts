import { takeLatest } from 'redux-saga/effects';
import {
  requestCreatePrayerActionCreator,
  setPrayerCheckedActionCreator,
  deletePrayerActionCreator,
} from './actions';
import {
  createPrayerWorkSaga,
  deletePrayerWorkSaga,
  setPrayerCheckedWorkSaga,
} from './workers';

export function* prayerWatchSaga() {
  yield takeLatest(requestCreatePrayerActionCreator.type, createPrayerWorkSaga);
  yield takeLatest(
    setPrayerCheckedActionCreator.type,
    setPrayerCheckedWorkSaga,
  );
  yield takeLatest(deletePrayerActionCreator.type, deletePrayerWorkSaga);
}
