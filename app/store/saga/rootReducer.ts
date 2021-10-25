import { combineReducers } from '@reduxjs/toolkit';
import { columnsSlice } from './Columns/reducer';
import { commentsSlice } from './Comments/reducer';
import { laoderSlice } from './Loader/reducer';
import { prayersSlice } from './Prayers/reducer';
import { userSlice } from './User/reducer';

export const reducer = combineReducers({
  user: userSlice.reducer,
  columns: columnsSlice.reducer,
  prayers: prayersSlice.reducer,
  comments: commentsSlice.reducer,
  loader: laoderSlice.reducer,
});
