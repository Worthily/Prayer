import { columnsSlice } from '../Columns/reducer';

export const {
  requestGetColumns: requestGetColumnsActionCreator,
  responseGetColumns: responseGetColumnsActionCreator,
  requestCreateColumn: requestCreateColumnActionCreator,
  responseCreateColumn: responseCreateColumnActionCreator,
  updateColumnTitle: updateColumnTitleActionCreator,
  deleteColumn: deleteColumnActionCreator,
} = columnsSlice.actions;
