import { api } from '..';
import { PRAYERS_LINK, COMMENTS_LINK } from '../constants';

export async function getComments() {
  console.log('comments req start');
  return await api.get(COMMENTS_LINK).catch((error) => {
    console.log('comments error');
    return error;
  });
}
export async function createComment(id: number, body: string) {
  console.log('comment create start');
  return await api
    .post(`${PRAYERS_LINK}/${id}${COMMENTS_LINK}`, { body: body })
    .catch((error) => {
      console.log('comments create error');
      return error;
    });
}

export async function deleteComment(id: number) {
  console.log('comment dell start');
  return await api.delete(`${COMMENTS_LINK}/${id}`).catch((error) => {
    console.log('comments dell error');
    return error;
  });
}
