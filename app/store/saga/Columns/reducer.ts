import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { Columns, User, UserSignIn, UserSignUp } from '../../../types';

const columnsInitialState: Columns[] = [];

export const columnsSlice = createSlice({
  name: 'columns',
  initialState: columnsInitialState,
  reducers: {
    requestGetColumns: (state) => {},
    responseGetColumns: (state, { payload }: PayloadAction<Columns[]>) => {
      console.log('columnsState>>>' + ' ' + payload);
      return [...payload];
    },
    requestCreateColumn: (
      state,
      { payload }: PayloadAction<{ title: string }>,
    ) => {},
    responseCreateColumn: (state, { payload }: PayloadAction<Columns>) => {
      const newColumns = [...state, payload];
      return newColumns;
    },
    deleteColumn: (state, { payload }: PayloadAction<{ id: number }>) => {
      let newColumns: Columns[] = state.filter((item) => {
        return item.id !== payload.id;
      });
      return newColumns;
    },
  },
});
