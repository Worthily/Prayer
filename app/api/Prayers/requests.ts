import { api } from '..';
import { COLUMNS_LINK, PRAYERS_LINK } from '../constants';

export async function getPrayers() {
  return await api.get(PRAYERS_LINK).catch((error) => {
    return error;
  });
}

export async function createPrayer(
  columnId: number,
  title: string,
  description: string,
) {
  return await api
    .post(`${COLUMNS_LINK}/${columnId}${PRAYERS_LINK}`, {
      title: title,
      description: description,
      checked: true,
    })
    .catch((error) => {
      return error;
    });
}

export async function setPrayerIsChecked(
  id: number,
  description: string,
  checked: boolean,
) {
  return await api
    .put(`${PRAYERS_LINK}/${id}`, {
      id: id,
      description: description,
      checked: checked,
    })
    .catch((error) => {
      return error;
    });
}

export async function updatePrayer(id: number, title: string) {
  return await api
    .put(`${PRAYERS_LINK}/${id}`, { title: title, description: '' })
    .catch((error) => {
      return error;
    });
}

export async function deletePrayer(id: number) {
  return await api.delete(`${PRAYERS_LINK}/${id}`).catch((error) => {
    return error;
  });
}
