import { call, put } from 'redux-saga/effects';
import {
  signInActionCreator,
  requestSignInActionCreator,
  requestSignUpActionCreator,
  signUpActionCreator,
  onErrorActionCreator,
} from '../User/actions';
import { signIn, signUp } from '../../../api/User/requests';
import { responseGetColumnsActionCreator } from '../Columns/actions';
import { getColumnsWorkSaga } from '../Columns/workers';
import { getPrayersWorkSaga } from '../Prayers/workers';
import { getCommentsWorkSaga } from '../Comments/workers';
import { setUserLoaderActionCreator } from '../Loader/actions';

export function* userSignInWorkSaga({
  payload,
}: ReturnType<typeof requestSignInActionCreator>) {
  yield put({
    type: setUserLoaderActionCreator.type,
    payload: {
      newValue: true,
    },
  });
  const { data } = yield call(signIn, payload.email, payload.password);
  if (data.name === 'EntityNotFound') {
    yield put({
      type: onErrorActionCreator.type,
      payload: {
        errorExists: true,
        errorText: 'Неправильное имя пользователя или пароль',
      },
    });
  } else {
    yield put({
      type: signInActionCreator.type,
      payload: {
        logged: true,
        userId: data.id,
        userEmail: data.email,
        userName: data.name,
        userToken: data.token,
        errorExists: false,
        errorText: '',
      },
    });
    yield put({
      type: setUserLoaderActionCreator.type,
      payload: {
        newValue: false,
      },
    });
    yield getColumnsWorkSaga();
    yield getPrayersWorkSaga();
    yield getCommentsWorkSaga();
  }
}

export function* userSignUpWorkSaga({
  payload,
}: ReturnType<typeof requestSignUpActionCreator>) {
  const { data } = yield call(
    signUp,
    payload.email,
    payload.name,
    payload.password,
  );
  if (data.severity === 'ERROR') {
    yield put({
      type: onErrorActionCreator.type,
      payload: {
        errorExists: true,
        errorText: 'Пользователь уже зарегистрирован',
      },
    });
  } else {
    yield put({
      type: signUpActionCreator.type,
      payload: {
        logged: true,
        userId: data.id,
        userEmail: data.email,
        userName: data.name,
        userToken: data.token,
        userPass: data.password,
      },
    });
    yield put({
      type: responseGetColumnsActionCreator.type,
      payload: data.columns,
    });
    yield getPrayersWorkSaga();
    yield getCommentsWorkSaga();
  }
}
