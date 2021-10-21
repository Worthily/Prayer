import { api } from '..';
import { COLUMNS_LINK, PRAYERS_LINK } from '../constants';

export async function getPrayers() {
  console.log('prayers req start');
  return await api.get(PRAYERS_LINK).catch((error) => {
    console.log('prayers error');
    return error;
  });
}

export async function createPrayer(
  columnId: number,
  title: string,
  description: string,
) {
  console.log('create prayers req start');
  return await api
    .post(`${COLUMNS_LINK}/${columnId}${PRAYERS_LINK}`, {
      title: title,
      description: description,
      checked: true,
    })
    .catch((error) => {
      console.log('prayers error');
      return error;
    });
}

export async function setPrayerIsChecked(
  id: number,
  description: string,
  checked: boolean,
) {
  console.log('prayers req start');
  return await api
    .put(`${PRAYERS_LINK}/${id}`, {
      id: id,
      description: description,
      checked: checked,
    })
    .catch((error) => {
      console.log('prayers check error');
      return error;
    });
}

export async function deletePrayer(id: number) {
  console.log('prayers req start');
  return await api.delete(`${PRAYERS_LINK}/${id}`).catch((error) => {
    console.log('prayers delete error');
    return error;
  });
}
