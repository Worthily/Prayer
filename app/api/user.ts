import { api } from '../api';
import { SIGN_IN_LINK, SIGN_UP_LINK } from './constants';
import { UserSignIn, UserSignUp } from '../types';

export async function signIn(userData: UserSignIn) {
  console.log(userData);
  return await api.post(SIGN_IN_LINK, userData);
}

export async function signUp(userData: UserSignUp) {
  console.log(userData);
  return await api.post(SIGN_UP_LINK, userData);
}
