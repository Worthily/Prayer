import { call, put } from 'redux-saga/effects';
import {
  createComment,
  deleteComment,
  getComments,
} from '../../../api/Comments/requests';
import {
  deleteCommentActionCreator,
  requestCreateCommentActionCreator,
  responseCreateCommentActionCreator,
  responseGetCommentsActionCreator,
} from './actions';

export function* getCommentsWorkSaga() {
  const { data } = yield call(getComments);
  console.log('Comments>>>' + ' ' + data);
  yield put({
    type: responseGetCommentsActionCreator.type,
    payload: data,
  });
}

export function* createCommentWorkSaga({
  payload,
}: ReturnType<typeof requestCreateCommentActionCreator>) {
  const { data } = yield call(createComment, payload.id, payload.body);
  console.log('Comment created>>>' + ' ' + data);
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
}

export function* deleteCommentWorkSaga({
  payload,
}: ReturnType<typeof deleteCommentActionCreator>) {
  const { data } = yield call(deleteComment, payload.id);
  console.log('Comment dell>>>' + ' ' + data);
  // yield put({
  //   type: responseCreateCommentActionCreator.type,
  //   payload: {
  //     id: data.id,
  //     body: data.body,
  //     created: data.created,
  //     prayerId: data.prayerId,
  //     userId: data.userId,
  //   },
  // });
}
