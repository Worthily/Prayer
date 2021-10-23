import { takeLatest } from 'redux-saga/effects';
import {
  requestCreatePrayerActionCreator,
  setPrayerCheckedActionCreator,
  deletePrayerActionCreator,
  updatePrayerTitleActionCreator,
} from './actions';
import {
  createPrayerWorkSaga,
  deletePrayerWorkSaga,
  setPrayerCheckedWorkSaga,
  updatePrayerTitleWorkSaga,
} from './workers';

export function* prayerWatchSaga() {
  yield takeLatest(requestCreatePrayerActionCreator.type, createPrayerWorkSaga);
  yield takeLatest(
    setPrayerCheckedActionCreator.type,
    setPrayerCheckedWorkSaga,
  );
  yield takeLatest(updatePrayerTitleActionCreator, updatePrayerTitleWorkSaga);
  yield takeLatest(deletePrayerActionCreator.type, deletePrayerWorkSaga);
}
