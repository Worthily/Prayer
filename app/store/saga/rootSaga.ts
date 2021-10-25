import { all } from 'redux-saga/effects';
import { columnsWatchSaga } from './Columns/watchers';
import { commentsWatchSaga } from './Comments/watchers';
import { prayerWatchSaga } from './Prayers/watchers';
import { userWatchSaga } from './User/watchers';

export default function* rootSaga() {
  yield all([
    userWatchSaga(),
    prayerWatchSaga(),
    columnsWatchSaga(),
    commentsWatchSaga(),
  ]);
}
