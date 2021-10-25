import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Loader, Prayers } from '../../../types';

const laoderInitialState: Loader = {
  user: false,
  columns: false,
  prayers: false,
  comments: false,
};

export const laoderSlice = createSlice({
  name: 'laoder',
  initialState: laoderInitialState,
  reducers: {
    setUserLoader: (
      state,
      { payload }: PayloadAction<{ newValue: boolean }>,
    ) => {
      return { ...state, user: payload.newValue };
    },
    setColumnsLoader: (
      state,
      { payload }: PayloadAction<{ newValue: boolean }>,
    ) => {
      return { ...state, columns: payload.newValue };
    },
    setPrayersLoader: (
      state,
      { payload }: PayloadAction<{ newValue: boolean }>,
    ) => {
      return { ...state, prayers: payload.newValue };
    },
    setCommentsLoader: (
      state,
      { payload }: PayloadAction<{ newValue: boolean }>,
    ) => {
      return { ...state, comments: payload.newValue };
    },
  },
});
