import { columnsSlice } from '../Columns/reducer';

export const {
  requestGetColumns: requestGetColumnsActionCreator,
  responseGetColumns: responseGetColumnsActionCreator,
} = columnsSlice.actions;
