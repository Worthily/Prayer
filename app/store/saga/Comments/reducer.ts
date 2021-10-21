import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Comments } from '../../../types';

const commentsInitialState: Comments[] = [
  {
    id: -1,
    body: '',
    created: '',
    prayerId: -1,
    userId: -1,
  },
];

export const commentsSlice = createSlice({
  name: 'comments',
  initialState: commentsInitialState,
  reducers: {
    requestGetComments: (state) => {},
    responseGetComments: (state, { payload }: PayloadAction<Comments[]>) => {
      return [...payload];
    },
    requestCreateComment: (
      state,
      { payload }: PayloadAction<{ id: number; body: string }>,
    ) => {},
    responseCreateComment: (state, { payload }: PayloadAction<Comments>) => {
      return [...state, payload];
    },
    deleteComment: (state, { payload }: PayloadAction<{ id: number }>) => {
      let newComments: Comments[] = state.filter((item) => {
        return item.id !== payload.id;
      });
      return newComments;
    },
  },
});
