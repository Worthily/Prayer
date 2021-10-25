import { api } from '..';
import { PRAYERS_LINK, COMMENTS_LINK } from '../constants';

export async function getComments() {
  return await api.get(COMMENTS_LINK).catch((error) => {
    return error;
  });
}
export async function createComment(id: number, body: string) {
  return await api
    .post(`${PRAYERS_LINK}/${id}${COMMENTS_LINK}`, { body: body })
    .catch((error) => {
      return error;
    });
}

export async function deleteComment(id: number) {
  return await api.delete(`${COMMENTS_LINK}/${id}`).catch((error) => {
    return error;
  });
}
