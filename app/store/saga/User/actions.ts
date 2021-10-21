import { userSlice } from './reducer';

export const {
  signIn: signInActionCreator,
  signUp: signUpActionCreator,
  requestSignIn: requestSignInActionCreator,
  requestSignUp: requestSignUpActionCreator,
  onError: onErrorActionCreator,
} = userSlice.actions;
