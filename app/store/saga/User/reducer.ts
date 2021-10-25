import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserSignIn, UserSignUp } from '../../../types';

const userInitialState: User = {
  id: '',
  email: '',
  name: '',
  token: '',
  pass: '',
  logged: false,
  errorExists: false,
  errorText: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    requestSignIn: (state, { payload }: PayloadAction<UserSignIn>) => {
      state.email = payload.email;
    },
    requestSignUp: (state, { payload }: PayloadAction<UserSignUp>) => {
      state.email = payload.email;
      state.name = payload.name;
    },
    signIn: (
      state,
      {
        payload,
      }: PayloadAction<{
        logged: boolean;
        userId: string;
        userEmail: string;
        userName: string;
        userToken: string;
      }>,
    ) => {
      state.logged = payload.logged;
      state.id = payload.userId;
      state.email = payload.userEmail;
      state.name = payload.userName;
      state.token = payload.userToken;
    },
    signUp: (
      state,
      {
        payload,
      }: PayloadAction<{
        logged: boolean;
        userId: string;
        userEmail: string;
        userName: string;
        userPass: string;
        userToken: string;
      }>,
    ) => {
      state.logged = payload.logged;
      state.id = payload.userId;
      state.token = payload.userToken;
      state.email = payload.userEmail;
      state.name = payload.userName;
      state.pass = payload.userPass;
    },
    logOut: (state) => {
      return userInitialState;
    },
    onError: (
      state,
      { payload }: PayloadAction<{ errorExists: boolean; errorText: string }>,
    ) => {
      state.errorExists = payload.errorExists;
      state.errorText = payload.errorText;
    },
  },
});
