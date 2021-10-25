import { laoderSlice } from '../Loader/reducer';

export const {
  setUserLoader: setUserLoaderActionCreator,
  setColumnsLoader: setColumnsLoaderActionCreator,
  setPrayersLoader: setPrayersLoaderActionCreator,
  setCommentsLoader: setCommentsLoaderActionCreator,
} = laoderSlice.actions;
