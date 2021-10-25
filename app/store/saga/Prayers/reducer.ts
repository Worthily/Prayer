import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Prayers } from '../../../types';

const prayersInitialState: Prayers[] = [];

export const prayersSlice = createSlice({
  name: 'prayers',
  initialState: prayersInitialState,
  reducers: {
    requestGetPrayers: (state) => {},
    responseGetPrayers: (state, { payload }: PayloadAction<Prayers[]>) => {
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
    ) => {},
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
    updatePrayerTitle: (
      state,
      { payload }: PayloadAction<{ id: number; title: string }>,
    ) => {
      if (payload.title.trim()) {
        const newPrayers = state.map((prayer) => {
          if (prayer.id === payload.id) {
            return { ...prayer, title: payload.title };
          }
          return prayer;
        });
        return newPrayers;
      }
    },
    deletePrayer: (state, { payload }: PayloadAction<{ id: number }>) => {
      let newPrayers: Prayers[] = state.filter((item) => {
        return item.id !== payload.id;
      });
      return newPrayers;
    },
  },
});
