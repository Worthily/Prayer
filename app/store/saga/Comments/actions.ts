import { commentsSlice } from './reducer';

export const {
  requestGetComments: requestGetCommentsActionCreator,
  responseGetComments: responseGetCommentsActionCreator,
  requestCreateComment: requestCreateCommentActionCreator,
  responseCreateComment: responseCreateCommentActionCreator,
  deleteComment: deleteCommentActionCreator,
} = commentsSlice.actions;
