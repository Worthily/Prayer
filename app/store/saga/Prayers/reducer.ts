import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Prayers } from '../../../types';

const prayersInitialState: Prayers[] = [];

export const prayersSlice = createSlice({
  name: 'prayers',
  initialState: prayersInitialState,
  reducers: {
    requestGetPrayers: (state) => {},
    responseGetPrayers: (state, { payload }: PayloadAction<Prayers[]>) => {
      // console.log('columnsState>>>' + ' ' + payload);
      return [...payload];
    },
    requestCreatePrayer: (
      state,
      {
        payload,
      }: PayloadAction<{
        columnId: number;
        title: string;
        description: string;
      }>,
    ) => {
      console.log('create prayer req');
    },
    responseCreatePrayer: (
      state,
      {
        payload,
      }: PayloadAction<{
        id: number;
        title: string;
        description: string;
        columnId: number;
        checked: boolean;
      }>,
    ) => {
      console.log('create prayer resp');
      const newPrayer: Prayers = {
        id: payload.id,
        title: payload.title,
        description: payload.description,
        checked: payload.checked,
        columnId: payload.columnId,
        commentsIds: [],
      };
      const newPrayers: Prayers[] = [...state, newPrayer];
      return newPrayers;
    },
    setPrayerChecked: (
      state,
      {
        payload,
      }: PayloadAction<{ id: number; description: string; checked: boolean }>,
    ) => {
      const newPrayers = state.map((item) => {
        if (item.id === payload.id) {
          return { ...item, checked: payload.checked };
        }
        return item;
      });
      return newPrayers;
    },
    deletePrayer: (state, { payload }: PayloadAction<{ id: number }>) => {
      let newPrayers: Prayers[] = state.filter((item) => {
        return item.id !== payload.id;
      });
      return newPrayers;
    },
  },
});
