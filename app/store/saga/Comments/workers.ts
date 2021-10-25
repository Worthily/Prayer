import { call, put } from 'redux-saga/effects';
import {
  createComment,
  deleteComment,
  getComments,
} from '../../../api/Comments/requests';
import { setCommentsLoaderActionCreator } from '../Loader/actions';
import {
  deleteCommentActionCreator,
  requestCreateCommentActionCreator,
  responseCreateCommentActionCreator,
  responseGetCommentsActionCreator,
} from './actions';

export function* getCommentsWorkSaga() {
  yield put({
    type: setCommentsLoaderActionCreator.type,
    payload: {
      newValue: true,
    },
  });
  const { data } = yield call(getComments);
  yield put({
    type: responseGetCommentsActionCreator.type,
    payload: data,
  });
  yield put({
    type: setCommentsLoaderActionCreator.type,
    payload: {
      newValue: false,
    },
  });
}

export function* createCommentWorkSaga({
  payload,
}: ReturnType<typeof requestCreateCommentActionCreator>) {
  yield put({
    type: setCommentsLoaderActionCreator.type,
    payload: {
      newValue: true,
    },
  });
  const { data } = yield call(createComment, payload.id, payload.body);
  yield put({
    type: responseCreateCommentActionCreator.type,
    payload: {
      id: data.id,
      body: data.body,
      created: data.created,
      prayerId: data.prayerId,
      userId: data.userId,
    },
  });
  yield put({
    type: setCommentsLoaderActionCreator.type,
    payload: {
      newValue: false,
    },
  });
}

export function* deleteCommentWorkSaga({
  payload,
}: ReturnType<typeof deleteCommentActionCreator>) {
  const { data } = yield call(deleteComment, payload.id);
}
