import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { columns, user, UserSignIn, UserSignUp } from '../../../types';

const columnsInitialState: columns[] = [
  {
    id: 0,
    title: '',
    description: '',
    userId: 0,
  },
];

export const columnsSlice = createSlice({
  name: 'columns',
  initialState: columnsInitialState,
  reducers: {
    requestGetColumns: (state) => {},
    responseGetColumns: (state, { payload }: PayloadAction<columns[]>) => {
      console.log('columnsState>>>' + ' ' + payload);
      // state = payload;
      return [...payload];
      // console.log('stateColumns0 ' + state[0].id);
      // payload.map((item) => {
      //   console.log(
      //     'ID = ' +
      //       item.id +
      //       ' ' +
      //       'title = ' +
      //       item.title +
      //       ' ' +
      //       'desc = ' +
      //       item.description +
      //       ' ' +
      //       'user = ' +
      //       item.userId,
      //   );
      // });
    },
  },
});
