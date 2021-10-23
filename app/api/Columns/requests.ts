import { api } from '..';
import { COLUMNS_LINK } from '../constants';

export async function getColumns() {
  console.log('columns req start');
  return await api.get(COLUMNS_LINK).catch((error) => {
    console.log('columns error');
    return error;
  });
}

export async function createColumn(title: string) {
  console.log('columns create start');
  return await api
    .post(COLUMNS_LINK, { title: title, description: '' })
    .catch((error) => {
      console.log('columns error');
      return error;
    });
}

export async function updateColumn(id: number, title: string) {
  console.log('columns update start');
  return await api
    .put(`${COLUMNS_LINK}/${id}`, { title: title, description: '' })
    .catch((error) => {
      console.log('columns update error');
      return error;
    });
}

export async function deleteColumn(id: number) {
  console.log('columns dell start');
  return await api.delete(`${COLUMNS_LINK}/${id}`).catch((error) => {
    console.log('columns dell error');
    return error;
  });
}
